import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";

import IArticle from "../../types/Article";
import articleService from "../../services/apiService";

import "bootstrap/dist/css/bootstrap.min.css";

const ArticleForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const resetState = () => {
    setTitle("");
    setDescription("");
    setResult("");
  };

  return (
    <div className="card">
      <div className="card-header">Create a new article</div>
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
        <button className="btn btn-sm btn-primary">Post Data</button>
        <button className="btn btn-sm btn-warning ml-2" onClick={resetState}>
          Clear
        </button>
        <div className="alert alert-secondary mt-2" role="alert">
          <pre>Result</pre>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;
