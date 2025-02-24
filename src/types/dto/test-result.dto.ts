import { DeveloperTypeId } from "@/types/developer-test.type";

export interface TestResult {
  id: number;
  nickname: string;
  userId: string;
  avatar: string | null;
  type: DeveloperTypeId;
}

export interface TestResultRequestDto {
  type: DeveloperTypeId;
  userId: string;
}

export interface TestResultResponseDto extends TestResultRequestDto {
  id: number;
  user: {
    nickname: string;
    avatar: string | null;
  };
}

export interface PageDto {
  page?: number;
  limit?: number;
}
