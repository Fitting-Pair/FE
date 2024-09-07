import { getUserInfo } from "@/apis/user";
import { QUERY_KEYS } from "@/constants";
import { useQuery } from "@tanstack/react-query";

const useGetUserInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.AUTH],
    queryFn: getUserInfo,
    select: (data) => data.data,
    staleTime: 5 * 60 * 1000,
  });
};

export default useGetUserInfo;
