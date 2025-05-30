import { useAuthStore } from "@/stores/auth-store";
import toast from "react-hot-toast";

// 基础配置
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");

export interface ResponseData<T> {
  success: boolean;
  data: T;
  timestamp: string;
  message: string;
}

export const fetchRequest = async <T = unknown>(
  endpoint: string,
  { body, headers, method = "GET", ...customConfig }: RequestInit = {}
): Promise<T> => {
  const { accessToken } = useAuthStore.getState();

  // 处理 GET 请求的查询参数
  let finalUrl = `${BASE_URL}${endpoint}`;

  if (method === "GET" && body && typeof body === "string") {
    const queryParams = new URLSearchParams(body).toString();
    finalUrl += `?${queryParams}`;
  }

  const config: RequestInit = {
    method,
    ...customConfig,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...headers
    }
  };

  // 非 GET 请求才允许携带 body
  if (method !== "GET" && body) {
    config.body = body;
  }

  try {
    const response = await fetch(finalUrl, config);

    // 增强错误处理（处理非 JSON 响应）
    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = "Request failed";

      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData.message || errorText;
      } catch {
        errorMessage = errorText;
      }

      toast.error(errorMessage);
      throw new Error(errorMessage);
    }

    const { success, data, message } = await (response.json() as Promise<ResponseData<T>>);

    if (!success) {
      toast.error(message);
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error("Unknown API error");
  }
};
