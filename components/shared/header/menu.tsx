import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/header/mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@base-ui/react";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden w-full max-w-xs gap-1 md:flex">
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
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start gap-2 p-4">
            <SheetTitle className="mt-1 flex h-8 items-center">Menu</SheetTitle>
            <Separator className="bg-border my-2 h-px w-full" />
            <ModeToggle className="w-full justify-start" label="Appearance" />
            <Button
              className="w-full justify-start"
              nativeButton={false}
              variant="ghost"
              render={
                <Link href="/cart">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Cart
                </Link>
              }
            />
            <Button
              className="w-full justify-start"
              nativeButton={false}
              variant="ghost"
              render={
                <Link href="/cart">
                  <UserIcon className="mr-2 h-4 w-4" /> Sign In
                </Link>
              }
            />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
