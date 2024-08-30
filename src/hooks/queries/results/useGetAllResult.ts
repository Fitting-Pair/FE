import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants";
import { getAllResult } from "@/apis/result";

const useGetAllResult = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.MYPAGE],
    queryFn: getAllResult,
    select: (data) => data.data.userStylingResultResponseDtos,
  });
};

export default useGetAllResult;
