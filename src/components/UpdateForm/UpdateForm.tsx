import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";

import articleService from "../../services/apiService";

import "bootstrap/dist/css/bootstrap.min.css";

const UpdateForm: React.FC = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const formatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isUpdatingArticle, mutate: updateArticle } = useMutation<
    any,
    Error
  >(
    async () => {
      return await articleService.update(id, {
        title: title,
        description: description,
        published: published,
      });
    },
    {
      onSuccess: (res) => {
        setResult(formatResponse(res));
      },
      onError: (err: any) => {
        setResult(formatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isUpdatingArticle) setResult("Updating...");
  }, [isUpdatingArticle]);

  function updateData() {
    if (id) {
      try {
        updateArticle();
      } catch (error) {
        setResult(formatResponse(error));
      }
    }
  }

  return (
    <div className="card">
      <div className="card-header">Update your article</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="form-control"
            placeholder="Id"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            placeholder="Description"
          />
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            name="Published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="Published">
            Publish
          </label>
        </div>
        <button className="btn btn-sm btn-primary" onClick={updateData}>
          Update Data
        </button>
        <button className="btn btn-sm btn-warning ml-2">Clear</button>
        <div className="alert alert-secondary mt-2" role="alert">
          {result && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{result}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
