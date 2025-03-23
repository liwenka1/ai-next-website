import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}
const features: FeatureProps[] = [
  {
    title: "完全免费与零门槛",
    description: "100% 免费使用，无需登录或支付任何费用，零成本即可开始创作，无任何隐藏门槛。",
    image: "/free-access.png" // 直接体现零成本访问特性，可设计为钥匙打开创作大门的视觉
  },
  {
    title: "高效多样的生成能力",
    description: "无限次数生成 + 闪电般速度 + 先进输出质量 + 多样风格支持，一站式满足高强度创作需求。",
    image: "/generation-engine.png" // 用多核引擎喷射不同风格作品的动态图形，强调生成效率与多样性
  },
  {
    title: "安全与智能融合",
    description: "严格隐私保护机制，结合高级文本理解能力，确保数据安全的同时精准实现需求。",
    image: "/secure-ai.png" // 采用盾牌与AI神经元结合的设计，直观传达安全与智能的双重属性
  }
];

const featureList: string[] = [
  "100% 免费",
  "无需登录",
  "无限生成",
  "零成本创建",
  "先进质量",
  "闪电般快速的生成",
  "隐私保护",
  "多样风格支持",
  "高级文本理解"
];

const Features = () => {
  return (
    <section id="features" className="container space-y-8 py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-center lg:text-4xl">
        VVen AI{" "}
        <span className="from-primary/60 to-primary bg-gradient-to-b bg-clip-text text-transparent">的主要功能</span>
      </h2>

      <div className="flex flex-wrap gap-4 md:justify-center">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt="About feature"
                className="mx-auto w-[200px] rounded-md lg:w-[300px]"
                width="1024"
                height="1024"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
