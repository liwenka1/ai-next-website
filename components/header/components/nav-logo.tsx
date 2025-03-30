import Image from "next/image";
import Link from "next/link";

const NavLogo = () => {
  return (
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
  );
};

export default NavLogo;
