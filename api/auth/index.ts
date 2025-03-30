import { fetchRequest } from "@/request/fetchRequest";

import type { LoginRequest, LoginResponse, ProfileResponse } from "./type";

export const useAuthApi = () => {
  const login = (params: LoginRequest) => {
    return fetchRequest<LoginResponse>("/auth/login", {
      body: JSON.stringify(params),
      method: "POST"
    });
  };

  const profile = () => {
    return fetchRequest<ProfileResponse>("/auth/profile", {});
  };

  return {
    login,
    profile
  };
};
