import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col items-center justify-center gap-4 py-16">
        <span className="text-6xl font-bold">VVen AI</span>
        <span className="text-foreground/90 mx-auto mt-4 max-w-2xl text-xl font-medium sm:mt-6 sm:text-2xl">
          几秒钟内创建令人惊叹的AI生成图像
        </span>
        <span className="text-foreground/70 text-base sm:text-lg">⭐ 世界首个免费无限制AI图像生成器 ⭐</span>
        <div className="flex gap-3">
          <Badge className="bg-amber-600" variant="outline">
            100% 免费
          </Badge>
          <Badge className="bg-amber-600" variant="outline">
            100% 免费
          </Badge>
          <Badge className="bg-amber-600" variant="outline">
            100% 免费
          </Badge>
          <Badge className="bg-amber-600" variant="outline">
            100% 免费
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Hero;
