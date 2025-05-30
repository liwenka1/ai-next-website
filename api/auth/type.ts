export interface LoginResponse {
  access_token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ProfileResponse {
  sub: number;
  email: string;
  name: string;
  vipLevel: number;
  vipExpiresAt: string;
}
