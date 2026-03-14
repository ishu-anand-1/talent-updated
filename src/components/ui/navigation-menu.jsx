import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

export function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn(
        "relative flex max-w-max items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

export function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("flex list-none items-center gap-1", className)}
      {...props}
    />
  );
}

export function NavigationMenuItem(props) {
  return <NavigationMenuPrimitive.Item {...props} />;
}

export function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(
        "flex items-center rounded-md px-4 py-2 text-sm font-medium",
        "hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="ml-1 h-3 w-3" />
    </NavigationMenuPrimitive.Trigger>
  );
}

export function NavigationMenuContent({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        "absolute top-0 left-0 w-full p-2 md:w-auto",
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuViewport({ className, ...props }) {
  return (
    <div className="absolute top-full left-0 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "mt-1 rounded-md border bg-white shadow",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        "flex flex-col gap-1 rounded-md p-2 text-sm",
        "hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuIndicator({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Indicator
      className={cn("flex h-1.5 items-end justify-center", className)}
      {...props}
    >
      <div className="h-2 w-2 rotate-45 bg-gray-300" />
    </NavigationMenuPrimitive.Indicator>
  );
}