import { API_PATH } from "@/constants";
import { axiosInstance } from "./axiosInstance";
import { TResult, TResultProps } from "@/types/result";
import { AxiosResponse } from "axios";

interface CustomResponse<T> extends AxiosResponse {
  message: string;
  data: T;
}

const getAllResult = async (): Promise<TResult> => {
  const { data } = await axiosInstance.get(`${API_PATH.MYPAGE}`);

  return data;
};

const getResult = async (
  resultId: number,
): Promise<CustomResponse<TResultProps>> => {
  const { data } = await axiosInstance.get(
    `${API_PATH.MYPAGE_RESULT}/${resultId}`,
  );

  return data;
};

export { getAllResult, getResult };
