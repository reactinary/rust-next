import axios, { type AxiosError, type AxiosResponse } from "axios";
import error from "next/error";
import { handleHttpError } from "../error-handler";

const BASE_URL = "http://localhost:8080/";

export const localhostClient_8080 = axios.create({
  baseURL: BASE_URL,
  headers: { Accept: "application/json" },
});

localhostClient_8080.interceptors.request.use((config) => {
  if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

localhostClient_8080.interceptors.response.use(
  (response: AxiosResponse<unknown>) => response,
  (errorResponse: AxiosError<AxiosResponse<unknown>>) => {
    // @ts-ignore
    if (!errorResponse?.config?.silent) {
      handleHttpError(errorResponse);
    }
    return Promise.reject(error);
  },
);
