import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";

import articleService from "../../services/apiService";

import "bootstrap/dist/css/bootstrap.min.css";

const DeleteForm: React.FC = () => {
  const [id, setId] = useState("");

  return (
    <div className="card">
      <div className="card-header">Delete your article</div>
      <div className="card-body">
        <div className="input-group input-group-sm">
          <button className="btn btn-sm btn-danger">Delete All</button>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="form-control ml-2"
            placeholder="Id"
          />
          <div className="input-group-append">
            <button className="btn btn-sm btn-danger">Delete by Id</button>
          </div>
          <button className="btn btn-sm btn-warning ml-2">Clear</button>
        </div>
        <div className="alert alert-secondary mt-2" role="alert">
          <pre>Result</pre>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
