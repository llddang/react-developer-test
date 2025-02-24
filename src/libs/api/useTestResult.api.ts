import { QueryKeys } from "@/constants/query-key.constant";
import { jsonServer } from "@/libs/api/jsonServer.axios";
import {
  PageDto,
  TestResultDto,
  TestResultRequestDto,
  TestResultResponseDto,
} from "@/types/dto/test-result.dto";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useTestResultByPageQuery({ page = 0, limit = 20 }: PageDto) {
  return useQuery({
    queryKey: QueryKeys.DEVELOPER_TEST,
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
    queryKey: QueryKeys.DEVELOPER_TEST,
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
