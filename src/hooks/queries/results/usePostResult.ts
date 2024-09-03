import { postBodyCheckResult } from "@/apis/results";
import { PAGE_PATH } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const usePostResult = (resultId: number) => {
  const nav = useNavigate();
  return useMutation({
    mutationFn: postBodyCheckResult,
    onSuccess: (data) => {
      nav(
        `/${PAGE_PATH.BODY_CHECK}/${PAGE_PATH.STYLEING}/${PAGE_PATH.RESULT}/${resultId}`,
        { state: data.data },
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePostResult;
