import { API_PATH } from "@/constants";
import axios from "axios";
import { TAuthProps, Tlogin, TPhone, TSignup } from "@/types/auth";

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

const login = async ({ phoneNumber }: TPhone): Promise<Tlogin> => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}${API_PATH.AUTH}/${API_PATH.LOGIN}`,
    {
      phoneNumber,
    },
  );
  return data;
};

// const logout = async () => {
//   setRefresh("Refresh", localStorage.getItem("refreshToken"));

//   const { data } = await axiosInstance.post(
//     `${API_PATH.AUTH}/${API_PATH.LOGOUT}`,
//   );
//   return data;
// };

export { login, signup };
