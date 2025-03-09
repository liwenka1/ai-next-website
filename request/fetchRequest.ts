// lib/api.ts

// 基础配置
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");

// 精确类型定义
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions extends Omit<RequestInit, "method"> {
  method?: HttpMethod;
  data?: Record<string, any>;
  headers?: Record<string, string>;
}

export const fetchRequest = async <T = any>(
  endpoint: string,
  { data, headers, method = "GET", ...customConfig }: RequestOptions = {}
): Promise<T> => {
  // 处理 GET 请求的查询参数
  let finalUrl = `${BASE_URL}${endpoint}`;

  if (method === "GET" && data) {
    const queryParams = new URLSearchParams(data).toString();
    finalUrl += `?${queryParams}`;
  }

  const config: RequestInit = {
    method,
    ...customConfig,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  };

  // 非 GET 请求才允许携带 body
  if (method !== "GET" && data) {
    config.body = JSON.stringify(data);
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

      throw new Error(errorMessage);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error("Unknown API error");
  }
};
