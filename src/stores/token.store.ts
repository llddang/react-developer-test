import { parseJwt } from "@/libs/utils/auth.util";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialValue: string = "";

interface TokenState {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
  isValidToken: () => boolean;
}
export const useTokenStore = create<TokenState>()(
  persist(
    immer((set, get) => ({
      token: initialValue,
      setToken: (token: string) =>
        set((state) => {
          state.token = token;
        }),
      clearToken: () =>
        set((state) => {
          state.token = "";
        }),
      isValidToken: () => {
        const token = get().token;
        const tokenJson = parseJwt(token);
        if (!tokenJson) return false;

        return tokenJson.exp > Math.floor(Date.now() / 1000);
      },
    })),
    {
      name: "token-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
