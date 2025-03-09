"use client";

import { useImagesApi } from "@/api/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

const MainContent = () => {
  const [prompt, setPrompt] = useState("");
  const { bigmodelGenerations } = useImagesApi();
  const [imgUrl, setImgUrl] = useState("");
  const handleGeneration = async () => {
    try {
      const res = await bigmodelGenerations(prompt);
      console.log(res, "res");
      setImgUrl(res.data.data[0].url);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <section id="mainContent" className="container">
      <Card>
        <CardHeader>
          <CardTitle>AI 图像生成器</CardTitle>
          <CardDescription>免费好用的ai生图</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea className="mb-5" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          {imgUrl && <Image className="rounded-md" width="1024" height="1024" src={imgUrl} alt="img" />}
        </CardContent>
        <CardFooter>
          <Button type="button" onClick={handleGeneration}>
            生成
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default MainContent;
