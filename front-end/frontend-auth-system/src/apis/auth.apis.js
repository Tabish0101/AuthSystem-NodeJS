// auth.apis.js
import api from "./axiosInstance";

async function loginApi(email, password) {
  const response = await api.post(`${BASE_URL}api/auth/login`, {
    email,
    password,
  });
  return response.data;
}

export { loginApi };
