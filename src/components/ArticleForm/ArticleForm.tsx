import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";

import IArticle from "../../types/Article";
import articleService from "../../services/apiService";

import "bootstrap/dist/css/bootstrap.min.css";

const ArticleForm: React.FC = () => {
  const [state, setState] = useState("");

  return <div className="card"></div>;
};

export default ArticleForm;
