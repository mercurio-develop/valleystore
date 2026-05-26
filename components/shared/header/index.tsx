import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "@/components/shared/header/menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start flex">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME}`}
              width={32}
              height={32}
              priority={true}
            />
            <span className="ml-3 hidden text-2xl font-bold lg:block">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
