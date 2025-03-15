"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Loader } from "lucide-react";

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
    <section id="videoContent" className="container flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>AI 视频生成器</CardTitle>
          <CardDescription>免费好用的ai生视频</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            {imgUrl && <Image className="h-36 w-auto rounded-md" width="1024" height="1024" src={imgUrl} alt="img" />}
            <Textarea className="mb-5 h-36 resize-none" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-4">
            <input type="file" accept="image/*" onChange={handleFileUpload} ref={fileInputRef} className="hidden" />
            <div className="flex items-center gap-2">
              <Label htmlFor="withAudio">生成声音</Label>
              <Switch id="withAudio" checked={withAudio} onCheckedChange={(v) => setWithAudio(v)} />
            </div>
            <Button className="cursor-pointer" type="button" onClick={() => fileInputRef.current?.click()}>
              上传图片文件
            </Button>
            <Dialog open={openValue} onOpenChange={(v) => setOpenValue(v)}>
              <DialogTrigger asChild>
                <Button className="cursor-pointer" type="button">
                  上传图片链接
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>上传图片链接</DialogTitle>
                  <DialogDescription>
                    图片要求如下：图片支持.png、.jpeg、.jpg 格式、图片大小：不超过5M。
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-4">
                  <Input
                    placeholder="输入图片链接"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button className="cursor-pointer" type="button" onClick={saveImgUrl}>
                    保存
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <Button
            className="cursor-pointer"
            type="button"
            onClick={handleGeneration}
            disabled={loading || (!prompt && !imgUrl)}
          >
            生成
          </Button>
        </CardFooter>
      </Card>
      {generationTitle && (
        <Card>
          <CardHeader>
            <CardTitle>生成: {generationTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              {videoUrl ? (
                <video className="h-full w-auto rounded-md" src={videoUrl} controls />
              ) : (
                <div className="bg-accent flex h-full w-1/4 items-center justify-center rounded-md">
                  <Loader className="animate-spin" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};

export default VideoContent;
