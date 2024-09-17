import { API_PATH } from "@/constants";
import { axiosInstance } from "./axiosInstance";
import { IResultProps, CustomResponse, IMypageResults } from "@/types/result";

const getAllResult = async (): Promise<CustomResponse<IMypageResults>> => {
  const { data } = await axiosInstance.get(`${API_PATH.MYPAGE}`);

  return data;
};

const getResult = async (
  resultId: number,
): Promise<CustomResponse<IResultProps>> => {
  const { data } = await axiosInstance.get(
    `${API_PATH.MYPAGE_RESULT}/${resultId}`,
  );

  return data;
};

export { getAllResult, getResult };
