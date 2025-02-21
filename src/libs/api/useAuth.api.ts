import { QueryKeys } from "@/constants/query-key.constant";
import { authServer } from "@/libs/api/authServer.axios";
import { queryClient } from "@/main";
import { useTokenStore } from "@/stores/token.store";
import { useUserStore } from "@/stores/user.store";
import {
  ProfileDto,
  ProfileRequestDto,
  SignInDto,
  SignInResponseDto,
  SignUpDto,
  UserDto,
} from "@/types/dto/auth.dto";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useSignUpMutate() {
  return useMutation({
    mutationFn: async (signUpData: SignUpDto) => {
      await authServer.post("/register", signUpData);
    },
  });
}

export function useSignInMutate() {
  const setUserInfo = useUserStore().setUserInfo;
  const setToken = useTokenStore().setToken;

  return useMutation({
    mutationFn: async (signInData: SignInDto) => {
      const response = await authServer.post<SignInResponseDto>(
        "/login",
        signInData
      );
      return response.data;
    },
    onSuccess: (response) => {
      const { accessToken, ...auth } = response;
      setToken(accessToken);
      setUserInfo({ ...auth, isAuth: auth.success });
    },
  });
}

export function useProfileQuery() {
  return useQuery({
    queryKey: QueryKeys.MEMBER_ME,
    queryFn: async (): Promise<UserDto> => {
      const response = await authServer.get<UserDto>("/user");
      return response.data;
    },
  });
}

export function useProfileMutate() {
  return useMutation({
    mutationFn: async (profileData: ProfileRequestDto): Promise<ProfileDto> => {
      const formData = new FormData();
      if (profileData.avatar) formData.append("avatar", profileData.avatar);
      formData.append("nickname", profileData.nickname);

      const response = await authServer.patch("/profile", formData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKeys.MEMBER_ME });
    },
  });
}
