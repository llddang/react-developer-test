export interface SignUpDto {
  id: string;
  password: string;
  nickname: string;
}

export interface SignInDto {
  id: string;
  password: string;
}

export interface UserDto {
  userId: string;
  isAuth: boolean;
  nickname: string;
  avatar: null | string;
}

export interface SignInResponseDto {
  accessToken: string;
  avatar: null | string;
  nickname: string;
  success: boolean;
  userId: string;
}
