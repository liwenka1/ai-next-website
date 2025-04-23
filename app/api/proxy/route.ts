import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * 图片代理API，用于解决跨域问题
 * @param request 请求对象
 * @returns 响应对象
 */
export async function GET(request: NextRequest) {
  try {
    // 从URL参数中获取目标图片URL
    const url = request.nextUrl.searchParams.get("url");

    if (!url) {
      return NextResponse.json({ error: "缺少url参数" }, { status: 400 });
    }

    // 解码URL（如果需要）
    const decodedUrl = decodeURIComponent(url);

    // 获取图片数据
    const response = await fetch(decodedUrl, {
      headers: {}
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `获取图片失败: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    // 获取图片数据
    const imageBuffer = await response.arrayBuffer();

    // 获取原始内容类型
    const contentType = response.headers.get("content-type") || "image/png";

    // 返回图片数据
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (error) {
    console.error("代理图片时出错:", error);
    return NextResponse.json({ error: "代理服务器错误" }, { status: 500 });
  }
}
