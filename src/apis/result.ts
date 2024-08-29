import { API_PATH } from "@/constants";
import { axiosInstance } from "./axiosInstance";
import { TResult } from "@/types/result";

const getAllResult = async (): Promise<TResult> => {
  const { data } = await axiosInstance.get(`${API_PATH.MYPAGE}`);

  return data;
};

export { getAllResult };
