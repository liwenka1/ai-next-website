"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CreationShowcase = () => {
  const imgList = [
    {
      title: "01",
      url: "/example/img/01.webp"
    },
    {
      title: "02",
      url: "/example/img/02.webp"
    },
    {
      title: "03",
      url: "/example/img/03.webp"
    },
    {
      title: "04",
      url: "/example/img/04.webp"
    },
    // {
    //   title: "05",
    //   url: "/example/img/05.webp"
    // },
    {
      title: "06",
      url: "/example/img/06.webp"
    },
    {
      title: "07",
      url: "/example/img/07.webp"
    },
    {
      title: "08",
      url: "/example/img/08.webp"
    },
    {
      title: "09",
      url: "/example/img/09.webp"
    }
  ];

  // const videoList = [
  //   {
  //     title: "01",
  //     url: "/example/video/01.mp4"
  //   },
  //   {
  //     title: "02",
  //     url: "/example/video/02.mp4"
  //   },
  //   {
  //     title: "03",
  //     url: "/example/video/03.mp4"
  //   },
  //   {
  //     title: "04",
  //     url: "/example/video/04.mp4"
  //   },
  //   {
  //     title: "05",
  //     url: "/example/video/05.mp4"
  //   }
  // ];

  return (
    <section id="creationShowcase" className="relative overflow-hidden py-24 sm:py-32">
      {/* 背景装饰 */}
      <div className="from-primary/5 via-background to-background absolute inset-0 -z-10 bg-gradient-to-t" />
      <div className="bg-primary/5 absolute right-0 -bottom-40 -z-10 h-[500px] w-[500px] rounded-full blur-[80px]" />

      <div className="container space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
            获取灵感
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            从其他人使用 VVen AI 创建的内容中获得灵感，探索无限可能
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
        >
          {imgList.map(({ title, url }, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-black/5 backdrop-blur-sm"
              key={title}
            >
              <Link href="#imageContent" className="block h-full w-full">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Image
                  src={url}
                  alt={`AI生成图像示例 ${title}`}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  width={600}
                  height={800}
                  unoptimized
                  loading="lazy"
                />
                <div className="absolute right-3 bottom-3 left-3 z-20 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-sm font-medium">点击创建类似图像</p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* {videoList.map(({ title, url }, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: (imgList.length + index) * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-black/5 backdrop-blur-sm"
              key={title}
            >
              <Link href="#videoContent" className="block h-full w-full">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <video
                  src={url}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  preload="none"
                />
                <div className="absolute right-3 bottom-3 left-3 z-20 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-sm font-medium">点击创建类似视频</p>
                </div>
              </Link>
            </motion.div>
          ))} */}
        </motion.div>
      </div>
    </section>
  );
};

export default CreationShowcase;
