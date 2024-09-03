import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import theme from "@/styles/theme";
import { PAGE_PATH } from "@/constants";
import useLoadingStore from "@/store/useLoadingStore";
import { AxiosError } from "axios";
import { postImg } from "@/apis/results";

const usePostImg = () => {
  const nav = useNavigate();
  const { setLoading } = useLoadingStore((state) => state);

  return useMutation({
    mutationFn: postImg,
    onSuccess: (data) => {
      setLoading(true);
      nav(`/${PAGE_PATH.BODY_CHECK}/${PAGE_PATH.STYLEING}/${data.data.imgId}`, {
        replace: true,
      });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.log(error);
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

export default usePostImg;
