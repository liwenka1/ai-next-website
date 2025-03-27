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
    description: "AI创作初体验：快速入门图像生成", // 更聚焦核心价值
    features: [
      "每日10次基础图像生成", // 强调"基础"限制
      "单次生成1张图像",
      "支持512x512分辨率", // 添加技术参数
      "15秒短视频生成体验", // 加入视频能力锚点
      "生成图片带平台水印", // 明确限制条件
      "社区论坛支持" // 说明支持方式
    ],
    cta: "立即尝试" // 增强行动力
  },
  {
    id: "pro",
    name: "专业版",
    price: { monthly: 60, yearly: 50 },
    description: "高效创作：解锁高清图像与短视频", // 强调效率提升
    features: [
      "每月3000次快速生成（优先队列）", // 暗示性能优势
      "单次生成4张图像并智能优选",
      "1080P高清分辨率（1920x1080）",
      "1分钟短视频生成（30fps）",
      "3种专业模型（写实/动漫/插画）", // 体现模型差异
      "基础商用授权（限个人使用）", // 明确商业权限
      "工作日优先客服"
    ],
    cta: "免费试用3天", // 增加试用钩子
    popular: true
  },
  {
    id: "max",
    name: "尊享版",
    price: { monthly: 120, yearly: 100 },
    description: "专业级创作：4K图像与长视频输出", // 突出专业级
    features: [
      "每月6000次极速生成（专属GPU）",
      "单次生成8张图像 + 智能修图",
      "4K超清分辨率（4096x2160）",
      "5分钟长视频生成（支持4K/60fps）",
      "全模型库解锁（12种艺术风格）",
      "无限商用授权（团队可用）",
      "API基础接入权限" // 开发扩展能力
    ],
    cta: "获取团队优惠" // 引导批量采购
  },
  {
    id: "enterprise",
    name: "定制版",
    price: { monthly: "定制", yearly: "定制" },
    description: "企业级AI生产流水线解决方案", // 强调规模化
    features: [
      "私有化模型部署与定制训练",
      "无限生成额度 + 专属服务器",
      "多团队协同工作区（SSO集成）",
      "品牌专属内容水印模板",
      "7×24小时专属技术支持",
      "SLA服务保障（99.9%可用性）"
    ],
    cta: "咨询企业方案", // 强化B端沟通
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
