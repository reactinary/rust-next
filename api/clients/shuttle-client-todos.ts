import axios, { type AxiosError, type AxiosResponse } from "axios";
import error from "next/error";
import { handleHttpError } from "../error-handler";

const createShuttleClient = (baseURL: string) => {
  const client = axios.create({
    baseURL,
    headers: { Accept: "application/json" },
  });

  client.interceptors.request.use((config) => {
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  });

  client.interceptors.response.use(
    (response: AxiosResponse<unknown>) => response,
    (errorResponse: AxiosError<AxiosResponse<unknown>>) => {
      // @ts-ignore
      if (!errorResponse?.config?.silent) {
        handleHttpError(errorResponse);
      }
      return Promise.reject(error);
    },
  );

  return client;
};

export const shuttleClientTODOS = {
  local: createShuttleClient("http://localhost:8000/"),
  remote: createShuttleClient("https://ever-postgres-todos-v2.shuttleapp.rs/"),
};
