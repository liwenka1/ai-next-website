"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Loader, LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

import { useVideosApi } from "@/api/videos";
import type { BigmodelGenerationsRequest } from "@/api/videos/type";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogHeader
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const VideoContent = () => {
  const [prompt, setPrompt] = useState<BigmodelGenerationsRequest["prompt"]>("");
  const [withAudio, setWithAudio] = useState<BigmodelGenerationsRequest["with_audio"]>(false);
  const [imgUrl, setImgUrl] = useState<BigmodelGenerationsRequest["image_url"]>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 验证文件存在性
      if (!file) return;

      // 验证文件类型
      if (!file.type.startsWith("image/")) {
        alert("请选择图片文件");
        return;
      }

      // 验证文件大小（示例限制5MB）
      if (file.size > 5 * 1024 * 1024) {
        alert("文件大小不能超过5MB");
        return;
      }

      // 创建预览
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result);
        setImgUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const timerRef = useRef<NodeJS.Timeout>(null);
  // 轮询状态管理
  const [pollingCount, setPollingCount] = useState(0);
  const [maxRetries] = useState(10);
  const [isPolling, setIsPolling] = useState(true);

  const { bigmodelGenerations, asyncResult } = useVideosApi();
  const [id, setId] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [generationTitle, setGenerationTitle] = useState("");
  const handleGeneration = async () => {
    setVideoUrl("");
    setGenerationTitle(prompt);
    setLoading(true);
    try {
      const params: BigmodelGenerationsRequest = { prompt, image_url: imgUrl, with_audio: withAudio };
      const res = await bigmodelGenerations(params);
      console.log(res, "res");
      // 重置轮询状态
      setPollingCount(0);
      setIsPolling(true);
      setId(res.id);
    } catch (error) {
      console.log(error, "error");
      setIsPolling(false);
    }
  };
  useEffect(() => {
    const fetchAsyncResult = async () => {
      if (!isPolling || !id) return;

      try {
        const res = await asyncResult({ id });
        console.log(res, "res");

        // 根据业务逻辑判断是否需要继续轮询
        if (res.task_status === "SUCCESS") {
          setVideoUrl(res.video_result[0].url);
          setIsPolling(false);
          setLoading(false);
          toast.success("视频生成成功!");
        } else if (pollingCount < maxRetries) {
          scheduleNextPoll();
        } else {
          setIsPolling(false);
        }
      } catch (error) {
        console.error(error, "error");
        if (pollingCount < maxRetries) {
          scheduleNextPoll();
        } else {
          stopPolling();
        }
      }
    };
    // 调度下一次轮询（带指数退避）
    const scheduleNextPoll = () => {
      const baseDelay = 1000;
      const delay = Math.min(
        baseDelay * Math.pow(2, pollingCount),
        30000 // 最大间隔 30 秒
      );

      timerRef.current = setTimeout(() => {
        setPollingCount((c) => c + 1);
      }, delay);
    };
    // 停止轮询
    const stopPolling = () => {
      setIsPolling(false);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };

    const pollAsyncResult = () => {
      if (isPolling) {
        fetchAsyncResult();
      }
    };
    pollAsyncResult();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [asyncResult, id, isPolling, maxRetries, pollingCount]);

  const [openValue, setOpenValue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const saveImgUrl = () => {
    setOpenValue(false);
    setImgUrl(inputValue);
  };

  return (
    <section id="videoContent" className="relative overflow-hidden py-20 sm:py-28">
      {/* 背景装饰 */}
      <div className="from-background via-primary/5 to-background absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="bg-primary/5 absolute bottom-1/3 left-0 -z-10 h-[400px] w-[400px] rounded-full blur-[80px]" />

      <div className="container space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <h2 className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
            AI 视频生成器
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            几秒钟内创建令人惊叹的AI生成视频，完全免费且无限制
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
              <CardTitle className="text-xl font-semibold">创建你的视频</CardTitle>
              <CardDescription>输入详细的提示词，上传参考图片，创建你想要的视频</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                {imgUrl && (
                  <Image
                    className="h-36 w-auto rounded-md"
                    width="1024"
                    height="1024"
                    src={imgUrl}
                    alt="img"
                    unoptimized
                    loading="lazy"
                  />
                )}
                <Textarea
                  id="videoTextarea"
                  aria-label="videoTextarea"
                  aria-labelledby="videoTextarea"
                  className="mb-5 h-36 resize-none"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-4">
                <input type="file" accept="image/*" onChange={handleFileUpload} ref={fileInputRef} className="hidden" />
                <div className="flex items-center gap-2">
                  <Label htmlFor="withAudio" className="text-sm font-medium">
                    生成声音
                  </Label>
                  <Switch
                    id="withAudio"
                    checked={withAudio}
                    onCheckedChange={(v) => setWithAudio(v)}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                <Button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5 rounded-full transition-all duration-300"
                >
                  上传图片文件
                </Button>
                <Dialog open={openValue} onOpenChange={(v) => setOpenValue(v)}>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/5 rounded-full transition-all duration-300"
                    >
                      上传图片链接
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="border-primary/10 bg-background/90 border backdrop-blur-sm">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-semibold">上传图片链接</DialogTitle>
                      <DialogDescription>请输入有效的图片URL地址</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-4">
                      <Input
                        id="imgUrl"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="请输入图片链接"
                        className="border-primary/20 bg-background/80 focus:border-primary/40"
                      />
                      <Button
                        type="button"
                        onClick={saveImgUrl}
                        className="hover:shadow-primary/20 rounded-full px-6 font-medium transition-all duration-300 hover:shadow-md"
                      >
                        确定
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <Button
                type="button"
                onClick={handleGeneration}
                disabled={loading || !prompt}
                className="hover:shadow-primary/20 rounded-full px-6 font-medium transition-all duration-300 hover:shadow-md"
              >
                {loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                生成视频
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
                    {videoUrl ? (
                      <>
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <video
                          className="h-full w-full rounded-md object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          src={videoUrl}
                          controls
                          autoPlay
                          loop
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

export default VideoContent;
