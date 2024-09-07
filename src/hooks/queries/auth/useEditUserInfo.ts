import queryClient from "@/apis/queryClient";
import { editUserInfo } from "@/apis/user";
import { PAGE_PATH, QUERY_KEYS } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useEditUserInfo = (id: number) => {
  const nav = useNavigate();
  return useMutation({
    mutationFn: editUserInfo,
    onSuccess: (data) => {
      console.log(data.data.userName); //TODO: 유저이름 변경
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.AUTH] });
      nav(`${PAGE_PATH.MY_PAGE}/${PAGE_PATH.MODIFY}/${id}`);
    },
  });
};

export default useEditUserInfo;
