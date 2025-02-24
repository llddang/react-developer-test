import { QueryKeys } from "@/constants/query-key.constant";
import { authServer } from "@/libs/api/authServer.axios";
import { queryClient } from "@/main";
import { useTokenStore } from "@/stores/token.store";
import { useUserStore } from "@/stores/user.store";
import {
  SignInRequestDto,
  SignInResponseDto,
  SignUpRequestDto,
  ProfileRequestDto,
  ProfileResponseDto,
} from "@/types/dto/auth.dto";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

export function useSignUpMutate() {
  return useMutation({
    mutationFn: async (signUpData: SignUpRequestDto) => {
      await authServer.post("/register", signUpData);
    },
  });
}

export function useSignInMutate() {
  const setUserInfo = useUserStore().setUserInfo;
  const setToken = useTokenStore().setToken;

  return useMutation({
    mutationFn: async (signInData: SignInRequestDto) => {
      const response = await authServer.post<SignInResponseDto>("/login", signInData);
      return response.data;
    },
    onSuccess: (response) => {
      const { accessToken, ...auth } = response;
      setToken(accessToken);
      setUserInfo({ ...auth, id: auth.userId, isAuth: auth.success });
    },
  });
}

export function prefetchProfile() {
  return queryClient.prefetchQuery({
    queryKey: QueryKeys.MEMBER_ME,
    queryFn: async (): Promise<ProfileResponseDto> => {
      const response = await authServer.get<ProfileResponseDto>("/user");
      console.log("asdf");
      return response.data;
    },
    staleTime: 60 * 1000,
  });
}

export function useProfileQuery() {
  return useSuspenseQuery({
    queryKey: QueryKeys.MEMBER_ME,
    queryFn: async (): Promise<ProfileResponseDto> => {
      const response = await authServer.get<ProfileResponseDto>("/user");
      return response.data;
    },
    staleTime: 60 * 1000,
  });
}

export function useProfileMutate() {
  return useMutation({
    mutationFn: async (profileData: ProfileRequestDto) => {
      const formData = new FormData();
      if (profileData.avatar) formData.append("avatar", profileData.avatar);
      formData.append("nickname", profileData.nickname);

      await authServer.patch("/profile", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QueryKeys.MEMBER_ME });
    },
  });
}
