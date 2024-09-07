import queryClient from "@/apis/queryClient";
import { logout } from "@/apis/user";
import { PAGE_PATH } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const nav = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.clear();
      queryClient.clear();

      nav(`${PAGE_PATH.BASE}`, { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useLogout;
