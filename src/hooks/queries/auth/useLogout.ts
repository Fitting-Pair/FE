import queryClient from "@/apis/queryClient";
import { logout } from "@/apis/user";
import { PAGE_PATH } from "@/constants";
import useAuthStore from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const nav = useNavigate();
  const { setUserName } = useAuthStore();
  const clearUserStorage = useAuthStore.persist.clearStorage;

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.clear();
      queryClient.clear();
      setUserName(null);
      clearUserStorage();
      nav(`${PAGE_PATH.BASE}`, { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useLogout;
