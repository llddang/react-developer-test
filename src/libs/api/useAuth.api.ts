import { authServer } from "@/libs/api/authServer.axios";
import { SignInDto, SignInResponseDto, SignUpDto } from "@/types/dto/auth.dto";
import { useMutation } from "@tanstack/react-query";

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
      const { success: isAuth, nickname, userId, avatar } = response.data;
      localStorage.setItem("authToken", response.data.accessToken);
      localStorage.setItem(
        "user",
        JSON.stringify({ isAuth, nickname, userId, avatar })
      );
    },
  });
}
