import { API_PATH } from "@/constants";
import { axiosInstance } from "./axiosInstance";
import {
  CustomResponse,
  IBodyCheckResults,
  ISelectCloth,
} from "@/types/result";

interface IPostResultProps extends ISelectCloth {
  resultId: number;
}

const postImg = async (imageFile: FormData) => {
  const { data } = await axiosInstance.post(
    `${API_PATH.UPLOAD_USER_IMAGE}`,
    imageFile,
  );
  return data;
};

const getBodyCheckResult = async (
  imgId: number,
): Promise<CustomResponse<IBodyCheckResults>> => {
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
