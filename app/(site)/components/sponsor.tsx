"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Sponsor = () => {
  return (
    <section id="sponsor" className="relative overflow-hidden py-24 sm:py-32">
      {/* 背景装饰 */}
      <div className="from-primary/5 via-background to-background absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="bg-primary/5 absolute bottom-0 left-1/4 -z-10 h-[300px] w-[300px] rounded-full blur-[60px]" />

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
              <Heart className="text-primary h-6 w-6" />
            </div>
          </div>
          <h2 className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
            赞助支持
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            如果我的网站为您提供了帮助，诚邀您给予一份支持。您的慷慨助力，将帮助我们持续优化，为大家带来更优质的内容与体验！
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-8 md:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative"
          >
            <div className="from-primary/20 to-primary/10 absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r blur-lg transition-all duration-500 group-hover:blur-xl" />
            <div className="bg-background/80 border-primary/10 relative h-[300px] w-[200px] overflow-hidden rounded-xl border p-3 shadow-lg backdrop-blur-sm md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[280px]">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src="/wx-pay.jpg"
                alt="微信支付赞助码"
                className="h-full w-full rounded-lg object-contain"
                width={600}
                height={800}
                unoptimized
                loading="lazy"
              />
              <div className="absolute right-0 bottom-4 left-0 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-primary bg-background/80 mx-auto w-fit rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  微信支付
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative"
          >
            <div className="from-primary/10 to-primary/20 absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r blur-lg transition-all duration-500 group-hover:blur-xl" />
            <div className="bg-background/80 border-primary/10 relative h-[300px] w-[200px] overflow-hidden rounded-xl border p-3 shadow-lg backdrop-blur-sm md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[280px]">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src="/zfb-pay.jpg"
                alt="支付宝赞助码"
                className="h-full w-full rounded-lg object-contain"
                width={600}
                height={800}
                unoptimized
                loading="lazy"
              />
              <div className="absolute right-0 bottom-4 left-0 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-primary bg-background/80 mx-auto w-fit rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  支付宝
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsor;
