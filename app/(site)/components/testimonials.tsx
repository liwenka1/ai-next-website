"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "陈晨",
    username: "@创意设计师CC",
    body: "完全免费的顶级工具！不用注册直接生成，我们学生党的福音，做毕业设计效率翻倍！",
    img: "https://avatar.vercel.sh/jack",
    rating: 5
  },
  {
    name: "林墨",
    username: "@数字游民Lin",
    body: "生成速度像开了涡轮增压！昨晚1小时搞定了30张海报，居然还支持国潮风设计，完全超出预期！",
    img: "https://avatar.vercel.sh/jill",
    rating: 5
  },
  {
    name: "吴筱雨",
    username: "@自由插画师",
    body: "终于不用担心隐私泄露了！生成的作品直接存本地，AI还能精准get我的抽象需求描述，太懂创作者了！",
    img: "https://avatar.vercel.sh/john",
    rating: 5
  },
  {
    name: "周子轩",
    username: "@创业中的Tony",
    body: "零成本启动品牌设计！我们小团队用这个做了整套VI，生成质量完全不输收费软件，已经推荐给投资人！",
    img: "https://avatar.vercel.sh/jane",
    rating: 5
  },
  {
    name: "欧阳娜",
    username: "@新媒体打工人",
    body: "每天批量生成上百条文案都不卡顿！从科技风到田园风随意切换，彻底告别素材网站会员费！",
    img: "https://avatar.vercel.sh/jenny",
    rating: 5
  },
  {
    name: "郑泽宇",
    username: "@科技公司PM",
    body: "敏感数据自动过滤功能很专业！对接我们内部系统时，AI对专业术语的理解精准得让技术团队都惊讶！",
    img: "https://avatar.vercel.sh/james",
    rating: 5
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-5 backdrop-blur-sm",
        "border-primary/10 bg-background/50 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300",
        "dark:border-primary/20 dark:bg-background/80 dark:hover:border-primary/30 dark:hover:bg-primary/10"
      )}
    >
      <div className="bg-primary/5 absolute top-0 right-0 -z-10 h-20 w-20 rounded-full blur-xl" />
      <div className="flex flex-row items-center gap-3">
        <div className="relative">
          <div className="from-primary/20 to-primary/5 absolute inset-0 rounded-full bg-gradient-to-br blur-sm" />
          <Image
            className="relative z-10 rounded-full"
            width="40"
            height="40"
            alt={`${name}的头像`}
            src={img}
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-muted-foreground text-xs">{username}</p>
        </div>
      </div>

      <div className="mt-2 mb-3 flex">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="fill-primary text-primary h-3.5 w-3.5" />
        ))}
      </div>

      <blockquote className="text-sm leading-relaxed">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden py-20 sm:py-28">
      {/* 背景装饰 */}
      <div className="from-background via-primary/5 to-background absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="bg-primary/5 absolute right-1/4 bottom-0 -z-10 h-[300px] w-[300px] rounded-full blur-[60px]" />

      <div className="container space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <h2 className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
            用户对 VVen AI 的评价
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            听取每天使用我们 AI 图像生成器的创作者和专业人士的意见
          </p>
        </motion.div>

        <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s] [--gap:2rem]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 bg-gradient-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-1/4 bg-gradient-to-l" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
