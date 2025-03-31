import { PricingSection } from "@/components/pricing-section";

const PAYMENT_FREQUENCIES = [
  { id: "monthly", label: "月付" },
  { id: "yearly", label: "年付" }
];

const TIERS = [
  {
    id: "free",
    name: "免费版",
    price: { monthly: "免费", yearly: "免费" },
    description: "AI创作的理想起点",
    features: [
      "每日10次基础图像生成",
      "单次生成1张图像",
      "支持基础分辨率模板库",
      "每日2次基础视频生成",
      "社区支持与教程资源"
    ],
    cta: "立即开始创作"
  },
  {
    id: "pro",
    name: "专业版",
    price: { monthly: 60, yearly: 50 },
    description: "高效AI内容生产方案",
    features: [
      "每月1000次快速生成（优先队列）图像",
      "批量生成（最多2张/次）",
      "自定义分辨率（512px - 2048px之间）",
      "每月200次基础视频生成",
      "更强大的模型",
      "无水印体验",
      "无广告体验"
    ],
    cta: "升级专业版",
    popular: true
  },
  {
    id: "max",
    name: "尊享版",
    price: { monthly: 120, yearly: 100 },
    description: "专业级AI创作解决方案",
    features: [
      "每月2000次快速生成（优先队列）图像",
      "批量生成（最多4张/次）",
      "自定义分辨率（512px - 2048px之间）",
      "每月600次基础视频生成",
      "更强大的模型",
      "无水印体验",
      "无广告体验",
      "私密生成"
    ],
    cta: "升级尊享版"
  },
  {
    id: "enterprise",
    name: "定制版",
    price: { monthly: "定制", yearly: "定制" },
    description: "定制完成AI生产解决方案",
    features: [
      "无限生成额度",
      "自定义分辨率（512px - 2048px之间）",
      "更强大的模型",
      "无水印体验",
      "无广告体验",
      "7×24小时专属技术支持",
      "专属客户成功团队",
      "所有网站共享特权"
    ],
    cta: "获取定制方案",
    highlighted: true
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="container pb-24 sm:pb-32">
      <div className="relative mt-20 flex w-full items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        <PricingSection
          title="选择您的计划"
          subtitle="通过更快的生成和商业用途获得最佳的 VVen AI"
          frequencies={PAYMENT_FREQUENCIES}
          tiers={TIERS}
        />
      </div>
    </section>
  );
};

export default Pricing;
