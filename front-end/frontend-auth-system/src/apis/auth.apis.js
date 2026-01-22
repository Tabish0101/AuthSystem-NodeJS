// auth.apis.js
import api from "./axiosInstance";

async function loginApi(email, password) {
  const response = await api.post(`${BASE_URL}api/auth/login`, {
    email,
    password,
  });

  return response.data;
}

async function registerUserApi({ username, email, password }) {
  const response = await api.post(`${BASE_URL}api/auth/register`, {
    username,
    email,
    password,
  });

  return response.data;
}

async function logoutApi() {
  const response = await api.post("/api/auth/logout");

  return response.data;
}

async function getProfileDataApi() {
  const response = await api.get("/api/dashboard/profile");

  return response.data;
}

export { loginApi, registerUserApi, logoutApi, getProfileDataApi };
