import { QueryKeys } from "@/constants/query-key.constant";
import { jsonServer } from "@/libs/api/jsonServer.axios";
import { queryClient } from "@/main";
import {
  PageDto,
  TestResultDto,
  TestResultRequestDto,
  TestResultResponseDto,
} from "@/types/dto/test-result.dto";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useTestResultByPageQuery({ page = 0, limit = 20 }: PageDto) {
  return useQuery({
    queryKey: QueryKeys.DEVELOPER_RESULTS(page, limit),
    queryFn: async (): Promise<TestResultDto[]> => {
      const response = await jsonServer.get(`/developer-test?_page=${page}&_limit=${limit}`);

      return response.data.map((item: TestResultResponseDto) => ({
        id: item.id,
        nickname: item.nickname,
        avatar: item.avatar,
        userId: item.userIdentifier,
        type: item.type,
      }));
    },
  });
}

export function useTestResultQuery({ id }: { id: number }) {
  return useQuery({
    queryKey: QueryKeys.DEVELOPER_DETAIL_RESULT(id),
    queryFn: async (): Promise<TestResultDto> => {
      const response = await jsonServer.get(`/developer-test/${id}`);
      const data: TestResultResponseDto = response.data;

      return {
        ...data,
        userId: data.userIdentifier,
      };
    },
  });
}

export function useCreateTestResultMutation() {
  return useMutation({
    mutationFn: async (testResult: TestResultRequestDto) => {
      const response = await jsonServer.post("/developer-test", testResult);
      return response.data;
    },
  });
}

export function useDeleteTestResultMutation() {
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await jsonServer.delete(`/developer-test/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKeys.DEVELOPER_RESULTS(0, 20) });
    },
  });
}
