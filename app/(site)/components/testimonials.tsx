import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "陈晨",
    username: "@创意设计师CC",
    body: "完全免费的顶级工具！不用注册直接生成，我们学生党的福音，做毕业设计效率翻倍！",
    img: "https://avatar.vercel.sh/jack"
  },
  {
    name: "林墨",
    username: "@数字游民Lin",
    body: "生成速度像开了涡轮增压！昨晚1小时搞定了30张海报，居然还支持国潮风设计，完全超出预期！",
    img: "https://avatar.vercel.sh/jill"
  },
  {
    name: "吴筱雨",
    username: "@自由插画师",
    body: "终于不用担心隐私泄露了！生成的作品直接存本地，AI还能精准get我的抽象需求描述，太懂创作者了！",
    img: "https://avatar.vercel.sh/john"
  },
  {
    name: "周子轩",
    username: "@创业中的Tony",
    body: "零成本启动品牌设计！我们小团队用这个做了整套VI，生成质量完全不输收费软件，已经推荐给投资人！",
    img: "https://avatar.vercel.sh/jane"
  },
  {
    name: "欧阳娜",
    username: "@新媒体打工人",
    body: "每天批量生成上百条文案都不卡顿！从科技风到田园风随意切换，彻底告别素材网站会员费！",
    img: "https://avatar.vercel.sh/jenny"
  },
  {
    name: "郑泽宇",
    username: "@科技公司PM",
    body: "敏感数据自动过滤功能很专业！对接我们内部系统时，AI对专业术语的理解精准得让技术团队都惊讶！",
    img: "https://avatar.vercel.sh/james"
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="container space-y-8">
      <h2 className="space-y-4 text-3xl font-bold md:text-center lg:text-4xl">
        <p> 用户对 VVen AI 的评价</p>
        <p className="text-muted-foreground text-center text-base">
          听取每天使用我们 AI 图像生成器的创作者和专业人士的意见。
        </p>
      </h2>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      </div>
    </section>
  );
};

export default Testimonials;
