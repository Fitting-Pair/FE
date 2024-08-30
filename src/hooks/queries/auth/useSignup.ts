import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";
import { PAGE_PATH } from "@/constants";
import theme from "@/styles/theme";
import { signup } from "@/apis/user";
import { AxiosError } from "axios";

const useSignup = () => {
  const nav = useNavigate();
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("회원가입이 완료되었습니다 !", {
        duration: 1200,
      });
      nav(`${PAGE_PATH.BASE}${PAGE_PATH.LOGIN}`, { replace: true });
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

export { useSignup };
