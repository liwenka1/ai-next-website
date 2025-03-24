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
    answer: "可以，您拥有使用 Raphael AI 生成的图像的权利。这些图像可以用于个人和商业用途，非常适合创作者和企业使用。",
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
  return (
    <section id="faq" className="container space-y-8 py-24 sm:py-32">
      <h2 className="space-y-4 text-3xl font-bold md:text-center lg:text-4xl">
        <p> 常见问题解答</p>
        <p className="text-muted-foreground text-center text-base">还有其他问题？请发邮件至 2020583117@qq.com</p>
      </h2>

      <Accordion type="single" collapsible className="AccordionRoot w-full">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem className="cursor-pointer" key={value} value={value}>
            <AccordionTrigger className="cursor-pointer text-left">{question}</AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
