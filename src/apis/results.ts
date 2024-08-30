import { API_PATH } from "@/constants";
import { axiosInstance } from "./axiosInstance";
import { TFirstResult } from "@/types/result";

interface IPostResultProps {
  resultId: number;
  topName: string;
  bottomName: string;
}

const postImg = async (imageFile: FormData) => {
  const { data } = await axiosInstance.post(
    `${API_PATH.UPLOAD_USER_IMAGE}`,
    imageFile,
  );
  return data;
};

const getBodyCheckResult = async (imgId: number): Promise<TFirstResult> => {
  const { data } = await axiosInstance.get(`${API_PATH.RESULT}/${imgId}`);

  return data;
};

const postBodyCheckResult = async ({
  resultId,
  topName,
  bottomName,
}: IPostResultProps) => {
  const { data } = await axiosInstance.post(
    `${API_PATH.RESULT}/${API_PATH.STYLING}/${resultId}`,
    {
      topName,
      bottomName,
    },
  );
  return data;
};

export { postImg, getBodyCheckResult, postBodyCheckResult };
