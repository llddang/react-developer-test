export interface SignUpDto {
  id: string;
  password: string;
  nickname: string;
}

export interface SignInDto {
  id: string;
  password: string;
}

export interface ProfileRequestDto {
  avatar: File | null;
  nickname: string;
}

export interface ProfileDto {
  nickname: string;
  avatar: string | null;
}

export interface UserDto extends ProfileDto {
  id: string;
  success: boolean;
}

export interface SignInResponseDto {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string;
  nickname: string;
}
