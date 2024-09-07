import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { PAGE_PATH } from "@/constants";
import { login } from "@/apis/user";
import { AxiosError } from "axios";
import theme from "@/styles/theme";
import useAuthStore from "@/store/useAuthStore";

const useLogin = () => {
  const nav = useNavigate();
  const { setUserName } = useAuthStore();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("로그인 완료 !", {
        duration: 1200,
      });

      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);
      setUserName(data.data.userName);

      if (window.innerWidth <= 600) {
        // 모바일
        nav(`${PAGE_PATH.MY_PAGE}/${data.data.id}`);
      } else {
        nav(`/${PAGE_PATH.BODY_CHECK}`);
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      error.response &&
        toast.error(error.response.data.message, {
          duration: 1200,
          style: {
            color: theme.COLOR.WHITE,
            backgroundColor: theme.COLOR.RED,
          },
        });
    },
  });
};

export { useLogin };
