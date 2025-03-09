// 基础配置
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface RequestOptions extends RequestInit {
  data?: Record<string, any>;
  headers?: Record<string, string>;
}

// 核心封装函数
export const fetchRequest = async <T = any>(
  endpoint: string,
  { data, headers, ...customConfig }: RequestOptions = {}
): Promise<T> => {
  const url = `${BASE_URL}${endpoint}`;

  const config: RequestInit = {
    ...customConfig,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);

    // 处理 HTTP 错误状态码
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Request failed");
    }

    return response.json() as Promise<T>;
  } catch (error) {
    // 统一错误处理
    if (error instanceof Error) {
      throw new Error(`API Error: ${error.message}`);
    }
    throw new Error("Unknown API error");
  }
};
