import { authServer } from "@/libs/api/authServer.axios";
import { SignInDto, SignUpDto } from "@/types/dto/auth.dto";
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
      await authServer.post("/login", signInData);
    },
  });
}
