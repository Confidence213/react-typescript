import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";

import articleService from "../../services/apiService";

import "bootstrap/dist/css/bootstrap.min.css";

const CreateForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const formatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isPostingArticle, mutate: postArticle } = useMutation<
    any,
    Error
  >(
    async () => {
      return await articleService.create({
        title: title,
        description: description,
      });
    },
    {
      onSuccess: (res) => {
        setResult(formatResponse(res));
      },
      onError: (error: any) => {
        setResult(formatResponse(error.response?.data || error));
      },
    }
  );

  useEffect(() => {
    if (isPostingArticle) setResult("Posting...");
  }, [isPostingArticle]);

  function postData() {
    try {
      postArticle();
    } catch (err) {
      setResult(formatResponse(err));
    }
  }

  const resetState = () => {
    setTitle("");
    setDescription("");
    setResult("");
  };

  return (
    <div className="card">
      <div className="card-header">Create your article</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <button className="btn btn-sm btn-primary" onClick={postData}>
          Post Data
        </button>
        <button className="btn btn-sm btn-warning ml-2" onClick={resetState}>
          Clear
        </button>
        {result && (
          <div className="alert alert-secondary mt-2" role="alert">
            <pre>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateForm;
