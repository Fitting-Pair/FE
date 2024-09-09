import queryClient from "@/apis/queryClient";
import { deleteUser } from "@/apis/user";
import { useMutation } from "@tanstack/react-query";

const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      localStorage.clear();
      queryClient.clear();
    },
  });
};

export default useDeleteUser;
