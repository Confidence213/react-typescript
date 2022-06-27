import axios from "axios";
import IArticle from "../types/Article";

const apiService = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-type": "application/json",
  },
});

const findAll = async () => {
  const response = await apiService.get<IArticle[]>("/articles");
  return response.data;
};

const findById = async (id: any) => {
  const response = await apiService.get<IArticle>(`/articles/${id}`);
  return response.data;
};

const findByTitle = async (title: string) => {
  const response = await apiService.get<IArticle[]>(`/articles/title?title=${title}`);
  return response.data;
};

const create = async ({ title, description }: IArticle) => {
  const response = await apiService.post<any>("/articles", {
    title,
    description,
  });
  return response.data;
};

const update = async (id: any, { title, description, published }: IArticle) => {
  const response = await apiService.put<any>(`/articles/${id}`, {
    title,
    description,
    published,
  });
  return response.data;
};

const deleteById = async (id: any) => {
  const response = await apiService.delete<any>(`/articles/${id}`);
  return response.data;
};

const deleteAll = async () => {
  const response = await apiService.delete<any>("/articles");
  return response.data;
};

const articleService = {
  findAll,
  findById,
  findByTitle,
  create,
  update,
  deleteById,
  deleteAll,
};

export default articleService;
