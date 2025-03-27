import Link from "next/link";
import { NavMenu } from "./components/nav-menu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-background/60 sticky top-0 z-50 backdrop-blur">
      <div className="container flex items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="logo"
            className="h-10 w-10 overflow-hidden rounded-full object-contain"
            width="200"
            height="200"
            unoptimized
            loading="lazy"
          />
          <span className="text-xl font-bold">VVen AI</span>
        </Link>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
