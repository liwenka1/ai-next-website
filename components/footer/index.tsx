"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="from-background via-primary/10 to-background/80 text-foreground relative border-t bg-gradient-to-b shadow-lg backdrop-blur-md transition-colors duration-300">
      <div className="container px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Link href="/" className="mb-4 flex items-center gap-4 text-3xl font-bold tracking-tight">
              <Image
                src="/logo.png"
                alt="logo"
                className="h-10 w-10 overflow-hidden rounded-full object-contain shadow-md"
                width="200"
                height="200"
                unoptimized
                loading="lazy"
              />
              <span className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-transparent">VVen AI</span>
            </Link>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              VVen AI：完全免费、无限制 AI 图像生成器。无需注册，没有使用限制。
            </p>
            <div className="bg-primary/20 absolute top-0 -right-4 h-24 w-24 rounded-full blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">联系我</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="mailto:2020583117@qq.com" target="_blank" className="hover:text-primary transition-colors">
                邮箱
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">关于</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#features" legacyBehavior passHref className="hover:text-primary transition-colors">
                功能特点
              </Link>
              <Link href="#faq" legacyBehavior passHref className="hover:text-primary transition-colors">
                常见问题
              </Link>
            </nav>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Me</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://x.com/liwenka1" target="_blank">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-primary/30 hover:bg-primary/10 cursor-pointer rounded-full transition-all"
                      >
                        <Twitter className="text-primary h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow me on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://github.com/liwenka1" target="_blank">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-primary/30 hover:bg-primary/10 cursor-pointer rounded-full transition-all"
                      >
                        <Github className="text-primary h-4 w-4" />
                        <span className="sr-only">Github</span>
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with me on Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-muted-foreground text-sm">© 2025 • VVen AI 保留所有权利。</p>
          <nav className="flex gap-4 text-sm">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              服务条款
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
