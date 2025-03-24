"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function NavMenu() {
  return (
    <div className="flex flex-1 items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#features" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>功能</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#faq" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>常见问题</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#sponsor" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>赞助</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <Button className="cursor-pointer" type="button">
          Login
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
