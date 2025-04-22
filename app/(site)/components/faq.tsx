"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "VVen AI 真的可以免费使用吗？",
    answer:
      "是的，VVen AI 完全免费使用！我们致力于成为世界上最大的、最强大的免费 AI 图像生成器。没有隐藏费用，无需信用卡，也没有使用限制。",
    value: "item-1"
  },
  {
    question: "使用 VVen AI 需要创建账号吗？",
    answer: "不需要创建账号或注册。只需访问 ai.liwenkai.fun 就能立即开始生成图像。我相信让 AI 技术无障碍地服务每个人。",
    value: "item-2"
  },
  {
    question: "VVen AI 如何保护我的隐私？",
    answer:
      "我会严格保护隐私。我不会将您的提示词或生成的图像存储在我的服务器上，也不需要任何个人信息。您的创作完全私密，生成后立即删除。",
    value: "item-3"
  },
  {
    question: "我可以将生成的图像用于商业用途吗？",
    answer: "可以，您拥有使用 VVen AI 生成的图像的权利。这些图像可以用于个人和商业用途，非常适合创作者和企业使用。",
    value: "item-4"
  },
  {
    question: "VVen AI 未来有什么计划？",
    answer:
      "我在不断改进服务，定期更新 AI 模型和用户界面。未来计划包括移动应用和更多创意功能，同时保持完全免费的承诺。",
    value: "item-5"
  }
];

const Faq = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      {/* 背景装饰 */}
      <div className="from-primary/5 via-background to-background absolute inset-0 -z-10 bg-gradient-to-t" />
      <div className="bg-primary/5 absolute top-1/3 right-0 -z-10 h-[400px] w-[400px] rounded-full blur-[80px]" />

      <div className="container space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <div className="mb-2 flex justify-center">
            <div className="bg-primary/10 inline-flex items-center justify-center rounded-full p-2">
              <HelpCircle className="text-primary h-6 w-6" />
            </div>
          </div>
          <h2 className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
            常见问题解答
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            还有其他问题？请发邮件至 <span className="text-primary">2020583117@qq.com</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQList.map(({ question, answer, value }: FAQProps) => (
              <motion.div key={value} variants={itemVariants}>
                <AccordionItem
                  value={value}
                  className="border-primary/10 bg-background/50 hover:border-primary/20 overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300"
                >
                  <AccordionTrigger className="hover:bg-primary/5 px-6 py-4 text-left text-base font-medium transition-colors">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-4">{answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
