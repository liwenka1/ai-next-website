import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  user: {
    id?: string;
    email?: string;
    name?: string;
    vipLevel?: number;
    sub?: number;
  } | null;
  isLoading: boolean;
}

interface AuthActions {
  setAccessToken: (token: string) => void;
  setUser: (user: AuthState["user"]) => void;
  logout: () => void;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
  isLoading: true // 用于检测初始化加载状态
};

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      ...initialState,
      setAccessToken: (accessToken) => set({ accessToken }),
      setUser: (user) => set({ user }),
      logout: () => {
        set(initialState);
        // 可选：清理 API 客户端缓存
      }
    }),
    {
      name: "auth-storage", // 本地存储键名
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user
      })
    }
  )
);
