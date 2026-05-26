import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "@/components/shared/header/mode-toggle";

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
          <ModeToggle />
          <Button
            nativeButton={false}
            variant="ghost"
            render={
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4" /> Cart
              </Link>
            }
          />
          <Button
            nativeButton={false}
            render={
              <Link href="/cart">
                <UserIcon className="h-4 w-4" /> Sign In
              </Link>
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
