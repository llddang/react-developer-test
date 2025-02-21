export interface SignUpDto {
  id: string;
  password: string;
  nickname: string;
}

export interface SignInDto {
  id: string;
  password: string;
}

export interface ProfileDto {
  nickname: string;
  avatar: string | null;
}

export interface UserDto extends ProfileDto {
  userId: string;
  success: boolean;
}

export interface SignInResponseDto extends UserDto {
  accessToken: string;
}
