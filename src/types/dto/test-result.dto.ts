import { DeveloperTypeId } from "@/types/developer-test.type";

export interface TestResultDto {
  id: number;
  nickname: string;
  userId: string;
  avatar: string | null;
  type: DeveloperTypeId;
}

export interface TestResultResponseDto extends TestResultRequestDto {
  id: number;
}

export interface TestResultRequestDto {
  type: DeveloperTypeId;
  nickname: string;
  avatar: string | null;
  userIdentifier: string;
}

export interface PageDto {
  page?: number;
  limit?: number;
}
