"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Shield, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
}

const features: FeatureProps[] = [
  {
    title: "完全免费与零门槛",
    description: "100% 免费使用，无需登录或支付任何费用，零成本即可开始创作，无任何隐藏门槛。",
    image: "/free-access.png",
    icon: <Sparkles className="h-6 w-6" />,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "高效多样的生成能力",
    description: "无限次数生成 + 闪电般速度 + 先进输出质量 + 多样风格支持，一站式满足高强度创作需求。",
    image: "/generation-engine.png",
    icon: <Zap className="h-6 w-6" />,
    color: "from-amber-500/20 to-pink-500/20"
  },
  {
    title: "安全与智能融合",
    description: "严格隐私保护机制，结合高级文本理解能力，确保数据安全的同时精准实现需求。",
    image: "/secure-ai.png",
    icon: <Shield className="h-6 w-6" />,
    color: "from-emerald-500/20 to-cyan-500/20"
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      {/* 背景装饰 */}
      <div className="from-background via-primary/5 to-background absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="bg-primary/5 absolute top-1/3 left-0 -z-10 h-[400px] w-[400px] rounded-full blur-[80px]" />

      <div className="container space-y-16">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold lg:text-4xl"
          >
            VVen AI{" "}
            <span className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-transparent">
              的主要功能
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {featureList.map((feature: string, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="outline"
                  className="bg-primary/5 border-primary/20 hover:bg-primary/10 px-3 py-1 text-sm backdrop-blur-sm transition-colors"
                >
                  {feature}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ title, description, image, icon, color }: FeatureProps) => (
            <motion.div key={title} variants={itemVariants} className="group">
              <Card className="border-primary/10 bg-background/50 hover:border-primary/30 hover:shadow-primary/5 h-full overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                    <div className={`rounded-full bg-gradient-to-br p-2 ${color}`}>{icon}</div>
                  </div>
                </CardHeader>

                <CardContent className="pt-4 pb-6">
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>

                <CardFooter className="relative overflow-hidden pt-0">
                  <div className="relative h-[180px] w-full overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="from-background/80 via-background/20 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
                    <Image
                      src={image}
                      alt={`${title} 功能展示`}
                      className="h-full w-full object-cover"
                      width={400}
                      height={300}
                      unoptimized
                      loading="lazy"
                    />
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
