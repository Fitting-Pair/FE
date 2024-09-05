import { getResult } from "@/apis/result";
import { QUERY_KEYS } from "@/constants";
import { useQuery } from "@tanstack/react-query";

const useGetResult = (resultId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.RESULT, resultId],
    queryFn: () => getResult(resultId),
    enabled: !!resultId,
    select: (data) => data.data,
  });
};

export default useGetResult;
