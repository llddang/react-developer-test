import { QueryKeys } from "@/constants/query-key.constant";
import { jsonServer } from "@/libs/api/jsonServer.axios";
import { queryClient } from "@/main";
import {
  PageDto,
  TestResult,
  TestResultRequestDto,
  TestResultResponseDto,
} from "@/types/dto/test-result.dto";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useTestResultByPageQuery({ page = 0, limit = 20 }: PageDto) {
  return useQuery({
    queryKey: QueryKeys.DEVELOPER_RESULTS(page, limit),
    queryFn: async (): Promise<TestResult[]> => {
      const response = await jsonServer.get(
        `/developer-tests?_page=${page}&_limit=${limit}&_expand=user`
      );

      return response.data.map((item: TestResultResponseDto) => ({
        id: item.id,
        type: item.type,
        userId: item.userId,
        avatar: item.user.avatar,
        nickname: item.user.nickname,
      }));
    },
  });
}

export function useTestResultQuery({ id }: { id: number }) {
  return useQuery({
    queryKey: QueryKeys.DEVELOPER_DETAIL_RESULT(id),
    queryFn: async (): Promise<TestResult> => {
      const response = await jsonServer.get(`/developer-tests/${id}?_expand=user`);
      const data: TestResultResponseDto = response.data;

      return {
        id: data.id,
        type: data.type,
        userId: data.userId,
        avatar: data.user.avatar,
        nickname: data.user.nickname,
      };
    },
  });
}

export function useCreateTestResultMutation() {
  return useMutation({
    mutationFn: async (testResult: TestResultRequestDto) => {
      const response = await jsonServer.post("/developer-tests", testResult);
      return response.data;
    },
  });
}

export function useDeleteTestResultMutation() {
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await jsonServer.delete(`/developer-tests/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKeys.DEVELOPER_RESULTS(0, 20) });
    },
  });
}
