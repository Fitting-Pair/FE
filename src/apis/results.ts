import { API_PATH } from "@/constants";
import { axiosInstance } from "./axiosInstance";

const postImg = async (imageFile: FormData) => {
  const { data } = await axiosInstance.post(
    `${API_PATH.UPLOAD_USER_IMAGE}`,
    imageFile,
  );
  return data;
};

export { postImg };
