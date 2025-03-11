"use client";

import { useImagesApi } from "@/api/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const MainContent = () => {
  const [prompt, setPrompt] = useState("");
  const { bigmodelGenerations } = useImagesApi();
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGeneration = async () => {
    setGenerationTitle(prompt);
    setLoading(true);
    try {
      const res = await bigmodelGenerations(prompt);
      console.log(res, "res");
      setImgUrl(res.data.data[0].url);
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  const [generationTitle, setGenerationTitle] = useState("");

  return (
    <section id="mainContent" className="container flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>AI 图像生成器</CardTitle>
          <CardDescription>免费好用的ai生图</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea className="mb-5" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </CardContent>
        <CardFooter>
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

export default MainContent;
