import { jsonServer } from "@/libs/api/jsonServer.axios";
import { UserRequestDto } from "@/types/dto/user.dto";
import { useMutation } from "@tanstack/react-query";

export function useCreateUserMutation() {
  return useMutation({
    mutationFn: async (userInfo: UserRequestDto) => {
      await jsonServer.post("/user", userInfo);
    },
  });
}

export function useUpdateUserMutation() {
  return useMutation({
    mutationFn: async (userInfo: UserRequestDto) => {
      await jsonServer.put(`/user/${userInfo.id}`, userInfo);
    },
  });
}
