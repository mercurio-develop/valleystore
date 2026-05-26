"use client";

import {useTheme} from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {SunIcon, MoonIcon, SunMoon} from "lucide-react";
import {useEffect, useState} from "react";
import {THEMES, ThemeValue} from "@/lib/constants";
import _ from "lodash";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();
  useEffect(() => setMounted(true), []);
  console.log(theme);
  if (!mounted) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        }
      >
        {theme === THEMES[0] ? (
          <SunMoon/>
        ) : theme === THEMES[2] ? (
          <MoonIcon/>
        ) : (
          <SunIcon/>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearence</DropdownMenuLabel>
          <DropdownMenuSeparator/>
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
