import { jsonServer } from "@/libs/api/jsonServer.axios";
import { UserRequestDto } from "@/types/dto/user.dto";
import { useMutation } from "@tanstack/react-query";

export function useCreateUserMutation() {
  return useMutation({
    mutationFn: async (userInfo: UserRequestDto) => {
      await jsonServer.post("/users", userInfo);
    },
  });
}

export function useUpdateUserMutation() {
  return useMutation({
    mutationFn: async (userInfo: UserRequestDto) => {
      await jsonServer.put(`/users/${userInfo.id}`, userInfo);
    },
  });
}
