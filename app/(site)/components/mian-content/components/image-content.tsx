"use client";

import { useState } from "react";
import Image from "next/image";
import { Loader, LoaderCircle } from "lucide-react";
import { useRequest } from "ahooks";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useImagesApi } from "@/api/images";
import type { BigmodelGenerationsRequest } from "@/api/images/type";

const ImageContent = () => {
  const [prompt, setPrompt] = useState<BigmodelGenerationsRequest["prompt"]>("");
  const [size, setSize] = useState<BigmodelGenerationsRequest["image_size"]>("1024x1024");
  const { bigmodelGenerations } = useImagesApi();
  const [imgUrl, setImgUrl] = useState("");

  const { run, loading } = useRequest(
    async (params: BigmodelGenerationsRequest) => {
      const res = await bigmodelGenerations(params);
      return res.data[0].url;
    },
    {
      manual: true,
      onBefore: () => {
        setGenerationTitle(prompt); // 生成前设置标题
      },
      onSuccess: (url) => {
        setImgUrl(url); // 成功时更新标题、
        toast.success("图片生成成功!");
      },
      onError: (error) => {
        console.error("生成失败:", error);
        // 可以在这里添加错误提示组件
      }
    }
  );

  const handleGeneration = () => {
    if (!prompt) return;
    run({ prompt, image_size: size });
  };

  const [generationTitle, setGenerationTitle] = useState("");

  return (
    <section id="imageContent" className="relative overflow-hidden py-20 sm:py-28">
      {/* 背景装饰 */}
      <div className="from-background via-primary/5 to-background absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="bg-primary/5 absolute top-1/3 right-0 -z-10 h-[400px] w-[400px] rounded-full blur-[80px]" />

      <div className="container space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <h2 className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
            AI 图像生成器
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            几秒钟内创建令人惊叹的AI生成图像，完全免费且无限制
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <Card className="border-primary/10 bg-background/80 hover:border-primary/20 border shadow-sm backdrop-blur-sm transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">创建你的图像</CardTitle>
              <CardDescription>输入详细的提示词，选择合适的尺寸，创建你想要的图像</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                id="imageTextarea"
                aria-label="imageTextarea"
                aria-labelledby="imageTextarea"
                className="mb-5 h-36 resize-none"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Select value={size} onValueChange={(v) => setSize(v as BigmodelGenerationsRequest["image_size"])}>
                <SelectTrigger
                  className="border-primary/20 bg-background/80 hover:bg-primary/5 w-[180px] transition-colors"
                  id="selectSize"
                  aria-label="sizeLabel"
                  aria-labelledby="sizeLabel selectedSize"
                >
                  <SelectValue placeholder="选择尺寸" />
                </SelectTrigger>
                <SelectContent className="border-primary/20 bg-background/90 backdrop-blur-sm">
                  <SelectGroup>
                    <SelectItem value="1024x1024">1024x1024</SelectItem>
                    <SelectItem value="768x1344">768x1344</SelectItem>
                    <SelectItem value="864x1152">864x1152</SelectItem>
                    <SelectItem value="1152x864">1152x864</SelectItem>
                    <SelectItem value="1440x720">1440x720</SelectItem>
                    <SelectItem value="720x1440">720x1440</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button
                type="button"
                onClick={handleGeneration}
                disabled={loading || !prompt}
                className="hover:shadow-primary/20 rounded-full px-6 font-medium transition-all duration-300 hover:shadow-md"
              >
                {loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                生成图像
              </Button>
            </CardFooter>
          </Card>
          {generationTitle && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="border-primary/10 bg-background/80 hover:border-primary/20 overflow-hidden border shadow-sm backdrop-blur-sm transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">生成结果: {generationTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="group relative h-80 w-full overflow-hidden rounded-md">
                    {imgUrl ? (
                      <>
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <Image
                          className="h-full w-full rounded-md object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          width="1024"
                          height="1024"
                          src={imgUrl}
                          alt="AI生成图像"
                          unoptimized
                          loading="lazy"
                        />
                      </>
                    ) : (
                      <div className="bg-primary/5 flex h-full w-full items-center justify-center rounded-md">
                        <Loader className="text-primary h-10 w-10 animate-spin" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageContent;
