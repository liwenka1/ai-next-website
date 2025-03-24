import Image from "next/image";

const Sponsor = () => {
  return (
    <section id="sponsor" className="container space-y-8 py-14 sm:py-20">
      <h2 className="space-y-4 text-3xl font-bold md:text-center lg:text-4xl">
        <p>赞助</p>
        <p className="text-muted-foreground text-center text-base">
          如果我的网站为您提供了帮助，诚邀您给予一份支持。您的慷慨助力，将帮助我们持续优化，为大家带来更优质的内容与体验！
        </p>
      </h2>

      <div className="flex items-center justify-center">
        <div className="mx-2 h-[300px] max-w-[200px] lg:h-[400px] lg:max-w-[300px]">
          <Image
            src="/wx-pay.jpg"
            alt="About sponsor"
            className="object-contains h-full w-full overflow-hidden rounded-md"
            width="1024"
            height="1024"
          />
        </div>
        <div className="mx-2 h-[300px] max-w-[200px] lg:h-[400px] lg:max-w-[300px]">
          <Image
            src="/zfb-pay.jpg"
            alt="About sponsor"
            className="h-full w-full overflow-hidden rounded-md object-contain"
            width="1024"
            height="1024"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
