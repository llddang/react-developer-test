import { QueryKeys } from "@/constants/query-key.constant";
import { authServer } from "@/libs/api/authServer.axios";
import { queryClient } from "@/main";
import {
  ProfileDto,
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
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("user", JSON.stringify(auth));
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
    mutationFn: async (profileData: ProfileDto): Promise<ProfileDto> => {
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
