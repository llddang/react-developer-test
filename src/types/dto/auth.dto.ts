export interface SignUpRequestDto {
  id: string;
  password: string;
  nickname: string;
}

export interface SignInRequestDto {
  id: string;
  password: string;
}

export interface SignInResponseDto {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string;
  nickname: string;
}

export interface ProfileRequestDto {
  avatar: File | null;
  nickname: string;
}

export interface ProfileResponseDto {
  id: string;
  success: boolean;
  nickname: string;
  avatar: string | null;
}
