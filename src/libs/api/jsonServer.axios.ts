import { JSON_API_URL } from "@/constants/env.constant";
import axios from "axios";

export const jsonServer = axios.create({ baseURL: JSON_API_URL });

jsonServer.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
