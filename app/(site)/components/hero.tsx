import { AuroraText } from "@/components/magicui/aurora-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* 背景渐变效果 */}
      <div className="from-primary/5 via-background to-background absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="bg-primary/10 absolute top-20 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-[100px]" />

      <div className="container flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
        {/* 闪光效果装饰 */}
        <div className="bg-primary/80 absolute top-1/4 left-1/4 h-2 w-2 animate-pulse rounded-full" />
        <div className="bg-primary/60 absolute top-1/3 right-1/3 h-3 w-3 animate-ping rounded-full" />
        <div className="bg-primary/70 absolute right-1/4 bottom-1/3 h-2 w-2 animate-pulse rounded-full" />

        <div className="space-y-2">
          <Badge variant="outline" className="bg-background/50 border-primary/20 px-4 py-1 text-sm backdrop-blur-sm">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" /> 全新升级 2.0 版本
          </Badge>
        </div>

        <h1 className="text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          VVen <AuroraText>AI</AuroraText>
        </h1>

        <p className="text-foreground/90 mx-auto max-w-2xl text-xl leading-relaxed font-medium md:text-2xl">
          几秒钟内创建令人惊叹的<span className="text-primary font-semibold">AI生成图像&视频</span>
        </p>

        <p className="text-foreground/70 flex items-center gap-2 text-base md:text-lg">
          <span className="bg-primary/50 inline-block h-0.5 w-5 rounded-full" />
          世界首个免费无限制AI图像生成器
          <span className="bg-primary/50 inline-block h-0.5 w-5 rounded-full" />
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-none">100% 免费</Badge>
          <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-none">无需注册</Badge>
          <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-none">无限生成</Badge>
          <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-none">高质量输出</Badge>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="rounded-full px-8 font-medium">
            <Link href="#imageContent">开始创作</Link>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 font-medium">
            <Link href="#features">了解更多</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
