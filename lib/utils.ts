import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 将 ISO 时间字符串转换为中文格式（默认转北京时间 UTC+8）
 * @param isoString ISO 时间字符串（例如 "2027-12-30T12:29:05.231Z"）
 * @param timeZoneOffset 目标时区偏移小时数（默认 +8 北京时间）
 * @returns 格式如 "2027年12月30日 20:29:05"
 */
export function formatToChineseDateTime(isoString: string, timeZoneOffset = 8): string {
  const date = new Date(isoString);

  // 计算目标时区时间戳
  const targetTime = date.getTime() + timeZoneOffset * 60 * 60 * 1000;
  const adjustedDate = new Date(targetTime);

  // 提取时间组件（使用 UTC 方法获取调整后的时间）
  const year = adjustedDate.getUTCFullYear();
  const month = adjustedDate.getUTCMonth() + 1; // 月份从 0 开始
  const day = adjustedDate.getUTCDate();
  const hours = adjustedDate.getUTCHours().toString().padStart(2, "0");
  const minutes = adjustedDate.getUTCMinutes().toString().padStart(2, "0");
  const seconds = adjustedDate.getUTCSeconds().toString().padStart(2, "0");

  return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
}
