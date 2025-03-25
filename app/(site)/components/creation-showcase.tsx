import Image from "next/image";
import Link from "next/link";

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
    {
      title: "05",
      url: "/example/img/05.webp"
    },
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

  const videoList = [
    // {
    //   title: "01",
    //   url: "/example/video/01.mp4"
    // },
    {
      title: "02",
      url: "/example/video/02.mp4"
    },
    {
      title: "03",
      url: "/example/video/03.mp4"
    },
    {
      title: "04",
      url: "/example/video/04.mp4"
    },
    {
      title: "05",
      url: "/example/video/05.mp4"
    }
  ];

  return (
    <section id="creationShowcase" className="container space-y-8 py-24 sm:py-32">
      <h2 className="space-y-4 text-3xl font-bold md:text-center lg:text-4xl">
        <p>获取灵感</p>
        <p className="text-muted-foreground text-center text-base">从其他人使用 VVen AI 创建的内容中获得灵感</p>
      </h2>

      <div>
        <div className="columns-2 space-y-4 md:columns-3 lg:columns-4">
          {imgList.map(({ title, url }) => (
            <div className="w-full cursor-pointer overflow-hidden rounded-md" key={title}>
              <Link href="#imageContent" legacyBehavior passHref>
                <Image
                  src={url}
                  alt="About Showcase"
                  className="w-full rounded-md transition-all hover:scale-105"
                  width="864"
                  height="1152"
                />
              </Link>
            </div>
          ))}
          {videoList.map(({ title, url }) => (
            <div className="w-full cursor-pointer overflow-hidden rounded-md" key={title}>
              <Link href="#videoContent" legacyBehavior passHref>
                <video src={url} autoPlay loop muted className="w-full rounded-md transition-all hover:scale-105" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreationShowcase;
