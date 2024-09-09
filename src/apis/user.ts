import { API_PATH } from "@/constants";
import axios, { AxiosResponse } from "axios";
import {
  IUserInfo,
  TAuthProps,
  TPhone,
  TSignup,
  TUser,
  ILogin,
} from "@/types/auth";
import { axiosInstance } from "./axiosInstance";

interface CustomResponse<T> extends AxiosResponse {
  message: string;
  data: T;
}

const signup = async ({
  userName,
  phoneNumber,
  height,
  gender,
}: TAuthProps): Promise<TSignup> => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}${API_PATH.AUTH}/${API_PATH.SIGN_UP}`,
    {
      userName,
      phoneNumber,
      height,
      gender,
    },
  );
  return data;
};

const login = async ({
  phoneNumber,
}: TPhone): Promise<CustomResponse<ILogin>> => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}${API_PATH.AUTH}/${API_PATH.LOGIN}`,
    {
      phoneNumber,
    },
  );
  return data;
};

const logout = async () => {
  axiosInstance.defaults.headers.common["Refresh"] =
    localStorage.getItem("refreshToken");

  const { data } = await axiosInstance.post(
    `${API_PATH.AUTH}/${API_PATH.LOGOUT}`,
  );
  return data;
};

const getUserInfo = async (): Promise<CustomResponse<TUser>> => {
  const { data } = await axiosInstance.get(`${API_PATH.MYPAGE}/info`);

  return data;
};

const editUserInfo = async ({
  userName,
}: {
  userName: string;
}): Promise<CustomResponse<IUserInfo>> => {
  const { data } = await axiosInstance.put(`${API_PATH.EDIT_INFO}`, {
    userName,
  });

  return data;
};

const deleteUser = async (): Promise<AxiosResponse> => {
  const { data } = await axiosInstance.delete(`${API_PATH.USERS}`);

  return data;
};

export { login, signup, logout, getUserInfo, editUserInfo, deleteUser };
