import type { PropsWithChildren } from "react";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { clx } from "@/lib/utils/clx/clx-merge";
import { cn } from "@/lib/utils/core/cn";
// Primitives are CLI-installed by default, but @radix-ui can also be used
import * as NavigationMenuPrimitive from "@/components/primitives/navigation-menu";

const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuContent = clx(
  NavigationMenuPrimitive.Content,
  "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
);

const NavigationMenuViewportRoot = clx(
  NavigationMenuPrimitive.Viewport,
  "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
);

const NavigationMenuIndicatorRoot = clx(
  NavigationMenuPrimitive.Indicator,
  "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
);

const NavigationMenuRoot = clx(
  NavigationMenuPrimitive.Root,
  "relative z-10 flex max-w-max flex-1 items-center justify-center",
);

function NavigationMenu({ children }: PropsWithChildren) {
  return (
    <NavigationMenuRoot>
      {children}
      <NavigationMenuViewport />
    </NavigationMenuRoot>
  );
}

const NavigationMenuListRoot = clx(
  NavigationMenuPrimitive.List,
  "group flex flex-1 list-none items-center justify-center space-x-1",
);

function NavigationMenuList({ children }: PropsWithChildren) {
  return <NavigationMenuListRoot>{children}</NavigationMenuListRoot>;
}

function NavigationMenuIndicator() {
  return (
    <NavigationMenuIndicatorRoot>
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuIndicatorRoot>
  );
}

//
const NavigationMenuTriggerRoot = clx(NavigationMenuPrimitive.Trigger, "group");

function NavigationMenuTrigger({ children, ...props }: PropsWithChildren) {
  return (
    <NavigationMenuTriggerRoot className={cn(navigationMenuTriggerStyle())} {...props}>
      {children}{" "}
      <ChevronDown
        size={12}
        className="relative top-[1px] ml-1 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuTriggerRoot>
  );
}

//

const ViewportWrapper = clx.div("absolute left-0 top-full flex justify-center");

function NavigationMenuViewport({ ...props }: any) {
  return (
    <ViewportWrapper>
      <NavigationMenuViewportRoot {...props} />
    </ViewportWrapper>
  );
}

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
