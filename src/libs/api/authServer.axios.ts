import { AUTH_API_KEY } from "@/constants/env.constant";
import axios from "axios";

export const authServer = axios.create({
  baseURL: AUTH_API_KEY,
});
authServer.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("authToken");

  config.headers.Authorization = `Bearer ${authToken}`;
  return config;
});
authServer.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject({
      status: error.status,
      message: error.response.data.message,
    });
  }
);
