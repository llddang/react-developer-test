import axios from "axios";
import { AUTH_API_URL } from "@/constants/env.constant";
import { useTokenStore } from "@/stores/token.store";

export const authServer = axios.create({
  baseURL: AUTH_API_URL,
});
authServer.interceptors.request.use((config) => {
  const token = useTokenStore.getState().token;

  config.headers.Authorization = `Bearer ${token}`;
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
