import axios from "axios";
import { API_PATH } from "@/constants/path";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

/**
 * axiosInstance 실행 전에, 토큰을 넣음.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

/**
 * 리프레시 토큰 자동 발급
 */

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    if (
      error.config &&
      error.response &&
      error.response.code === 401 &&
      !error.config._retry
    ) {
      error.config._retry = true;
      const refreshtoken = localStorage.getItem("refreshToken");
      error.config.headers.Refresh = `${refreshtoken}`;
      return axios
        .post(`${import.meta.env.VITE_API_URL}/${API_PATH.REFRESH}`, {
          headers: {
            Refresh: `${refreshtoken}`,
          },
        })
        .then(async (res) => {
          if (res.data.code === 200 && res.data.data.accessToken) {
            localStorage.setItem("accessToken", res.data.data.accessToken);
            localStorage.setItem("refreshToken", res.data.data.refreshToken);
            error.config.headers["Authorization"] =
              `Bearer ${res.data.data.accessToken}`;
            return axiosInstance(error.config);
          }
        });
    }
    return Promise.reject(error);
  },
);

export { axiosInstance };
