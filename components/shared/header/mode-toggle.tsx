"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";
import { THEMES, ThemeValue } from "@/lib/constants";
import _ from "lodash";
import { cn } from "@/lib/utils";

const ModeToggle = ({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className={cn(
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              className,
            )}
          />
        }
      >
        {theme === THEMES[0] ? (
          <SunMoon className="h-4 w-4" />
        ) : theme === THEMES[2] ? (
          <MoonIcon className="h-4 w-4" />
        ) : (
          <SunIcon className="h-4 w-4" />
        )}
        {label && <span className="ml-2">{label}</span>}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearence</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {THEMES.map((value: ThemeValue) => (
            <DropdownMenuCheckboxItem
              checked={value === theme}
              key={value}
              onClick={() => setTheme(value)}
            >
              {_.capitalize(value)}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ModeToggle;
