import { API_PATH } from "@/constants";
import { axiosInstance } from "./axiosInstance";

const getAllResult = async () => {
  const { data } = await axiosInstance.get(`${API_PATH.MYPAGE}`);

  return data;
};

export { getAllResult };
