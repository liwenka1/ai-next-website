"use client";

import { useState } from "react";
import Image from "next/image";

import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useImagesApi } from "@/api/images";
import type { BigmodelGenerationsRequest } from "@/api/images/type";

const ImageContent = () => {
  const [prompt, setPrompt] = useState<BigmodelGenerationsRequest["prompt"]>("");
  const [size, setSize] = useState<BigmodelGenerationsRequest["size"]>("1024x1024");
  const { bigmodelGenerations } = useImagesApi();
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGeneration = async () => {
    setGenerationTitle(prompt);
    setLoading(true);
    try {
      const params: BigmodelGenerationsRequest = { prompt, size };
      const res = await bigmodelGenerations(params);
      console.log(res, "res");
      setImgUrl(res.data[0].url);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  const [generationTitle, setGenerationTitle] = useState("");

  return (
    <section id="imageContent" className="container flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>AI 图像生成器</CardTitle>
          <CardDescription>免费好用的ai生图</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea className="mb-5 h-36 resize-none" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Select value={size} onValueChange={(v) => setSize(v as BigmodelGenerationsRequest["size"])}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Size" />
            </SelectTrigger>
            <SelectContent>
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
          <Button className="cursor-pointer" type="button" onClick={handleGeneration} disabled={loading || !prompt}>
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
              {imgUrl ? (
                <Image className="h-full w-auto rounded-md" width="1024" height="1024" src={imgUrl} alt="img" />
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

export default ImageContent;
