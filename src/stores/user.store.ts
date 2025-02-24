import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface UserDto {
  isAuth: boolean;
  id: string;
  nickname: string;
  avatar: string | null;
}
interface UserState {
  user: UserDto;
  setUserInfo: (userInfo: UserDto) => void;
  clearUserInfo: () => void;
}

const initialValue: UserDto = {
  isAuth: false,
  id: "",
  nickname: "",
  avatar: "",
};

export const useUserStore = create<UserState>()(
  persist(
    immer((set) => ({
      user: initialValue,
      setUserInfo: (userInfo: UserDto) =>
        set((state) => {
          state.user = userInfo;
        }),
      clearUserInfo: () =>
        set((state) => {
          state.user = initialValue;
        }),
    })),
    {
      name: "token",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
