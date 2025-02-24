import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface User {
  isAuth: boolean;
  id: string;
  nickname: string;
  avatar: string | null;
}
const initialValue: User = {
  isAuth: false,
  id: "",
  nickname: "",
  avatar: "",
};

interface UserState {
  user: User;
  setUserInfo: (userInfo: User) => void;
  clearUserInfo: () => void;
}
export const useUserStore = create<UserState>()(
  persist(
    immer((set) => ({
      user: initialValue,
      setUserInfo: (userInfo: User) =>
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
