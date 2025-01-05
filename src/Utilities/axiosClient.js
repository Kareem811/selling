import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "http://127.0.0.1:8000/api",
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const token = user;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("user");
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
