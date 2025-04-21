import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRequest } from "ahooks";

import { useAuthApi } from "@/api/auth";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/auth-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { formatToChineseDateTime } from "@/lib/utils";
import Image from "next/image";
import { LoaderCircle } from "lucide-react";

// 定义表单验证规则
const formSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(6, "密码至少需要6个字符")
});

const AuthLogin = () => {
  // 初始化表单
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const { accessToken, user, setAccessToken, setUser, logout } = useAuthStore();
  const { login, profile } = useAuthApi();
  const { loading, run } = useRequest(login, {
    manual: true,
    // 推荐在成功回调中处理后续逻辑
    onSuccess: async (data) => {
      const { access_token } = data;
      console.log("获取到的 token:", access_token);

      // 存储 token
      setAccessToken(access_token);

      try {
        // 获取用户信息
        const user = await profile();
        setUser(user);
      } catch (error) {
        console.error("获取用户信息失败:", error);
        // 这里可以添加错误提示（如 Toast 通知）
      }
    },
    onError: (error) => {
      console.error("登录失败:", error);
      // 这里可以添加错误提示（如 Toast 通知）
    }
  });
  // 提交处理
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("提交数据:", values);
    run(values); // 等待登录请求完成
  };

  return accessToken ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
        <DropdownMenuLabel>等级：VIP{user?.vipLevel || 0}</DropdownMenuLabel>
        <DropdownMenuLabel>
          过期时间：{formatToChineseDateTime(user?.vipExpiresAt || new Date().toDateString())}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>退出</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">登录</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>登录</DialogTitle>
          <DialogDescription>请添加客服微信购买服务并开通账号</DialogDescription>
        </DialogHeader>

        <div className="sm:flex sm:items-center sm:justify-center sm:gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>邮箱</FormLabel>
                    <FormControl>
                      <Input placeholder="example@domain.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>密码</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <LoaderCircle className="animate-spin" />}
                登录
              </Button>
            </form>
          </Form>

          <Image
            src="/wx-code.jpg"
            alt="About sponsor"
            className="h-full max-h-60 w-full basis-3/5 overflow-hidden rounded-md object-contain"
            width="1024"
            height="1024"
            unoptimized
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthLogin;
