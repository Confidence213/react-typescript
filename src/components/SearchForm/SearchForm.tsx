import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import IArticle from "../../types/Article";
import articleService from "../../services/apiService";

import "bootstrap/dist/css/bootstrap.min.css";

const SearchForm: React.FC = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [result, setResult] = useState("");

  const formatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isLoadingArticles, refetch: getAllAtricles } = useQuery<
    IArticle[],
    Error
  >(
    "query-articles",
    async () => {
      return await articleService.findAll();
    },
    {
      enabled: false,
      onSuccess: (res) => {
        setResult(formatResponse(res));
      },
      onError: (error: any) => {
        setResult(formatResponse(error.response?.data || error));
      },
    }
  );

  useEffect(() => {
    if (isLoadingArticles) {
      setResult("Loading...");
    }
  }, [isLoadingArticles]);

  function getAllData() {
    try {
      getAllAtricles();
    } catch (error) {
      setResult(formatResponse(error));
    }
  }

  const { isLoading: isLoadingArticle, refetch: getAtricleById } = useQuery<
    IArticle,
    Error
  >(
    "query-article-by-id",
    async () => {
      return await articleService.findById(id);
    },
    {
      enabled: false,
      retry: 1,
      onSuccess: (res) => {
        setResult(formatResponse(res));
      },
      onError: (error: any) => {
        setResult(formatResponse(error.response?.data || error));
      },
    }
  );

  useEffect(() => {
    if (isLoadingArticle) {
      setResult("Loading...");
    }
  }, [isLoadingArticle]);

  function getDataById() {
    if (id) {
      try {
        getAtricleById();
      } catch (error) {
        setResult(formatResponse(error));
      }
    }
  }

  const { isLoading: isSearchingArticle, refetch: findArticleByTitle } =
    useQuery<IArticle[], Error>(
      "query-articles-by-title",
      async () => {
        return await articleService.findByTitle(title);
      },
      {
        enabled: false,
        retry: 1,
        onSuccess: (res) => {
          setResult(formatResponse(res));
        },
        onError: (error: any) => {
          setResult(formatResponse(error.response?.data || error));
        },
      }
    );

  useEffect(() => {
    if (isSearchingArticle) {
      setResult("Searching...");
    }
  }, [isSearchingArticle]);

  function getDataByTitle() {
    if (title) {
      try {
        findArticleByTitle();
      } catch (error) {
        setResult(formatResponse(error));
      }
    }
  }

  const resetState = () => {
    setResult("");
    setId("");
    setTitle("");
  };

  return (
    <div className="card">
      <div className="card-header">Find your article</div>
      <div className="card-body">
        <div className="input-group input-group-sm">
          <button className="btn btn-sm btn-primary" onClick={getAllData}>
            Get All
          </button>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="form-control ml-2"
            placeholder="Id"
          />
          <div className="input-group-append">
            <button className="btn btn-sm btn-primary" onClick={getDataById}>
              Get By Id
            </button>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control ml-2"
            placeholder="Title"
          />
          <div className="input-group-append">
            <button className="btn btn-sm btn-primary" onClick={getDataByTitle}>
              Find By Title
            </button>
          </div>
          <button className="btn btn-sm btn-warning ml-2" onClick={resetState}>
            Clear
          </button>
        </div>
        {result && (
          <div className="alert alert-secondary mt-2" role="alert">
            <pre>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
