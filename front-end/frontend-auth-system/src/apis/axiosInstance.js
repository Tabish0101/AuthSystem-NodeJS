import axios from "axios";
import { BASE_URL } from "../constants/global.constants";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      error.response?.data?.code === "TOKEN_EXPIRED" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const response = await api.post("/api/auth/refresh");

        sessionStorage.setItem("accessToken", response.data.accessToken);

        return api(originalRequest);
      } catch (refreshError) {
        if (
          refreshError.response?.status === 401 &&
          refreshError.response?.data?.code === "INVALID_REFRESH_TOKEN"
        ) {
          sessionStorage.removeItem("accessToken");

          window.location.href = "/login";

          return Promise.reject(refreshError);
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
