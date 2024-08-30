import { API_PATH } from "@/constants";
import { axiosInstance } from "./axiosInstance";
import { TFirstResult } from "@/types/result";

const postImg = async (imageFile: FormData) => {
  const { data } = await axiosInstance.post(
    `${API_PATH.UPLOAD_USER_IMAGE}`,
    imageFile,
  );
  return data;
};

const getBodyCheckResult = async (imgId: string): Promise<TFirstResult> => {
  const { data } = await axiosInstance.get(`${API_PATH.RESULT}/${imgId}`);

  return data;
};

export { postImg, getBodyCheckResult };
