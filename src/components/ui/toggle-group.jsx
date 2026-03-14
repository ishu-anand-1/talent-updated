import React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "../../utils/cn";

export function ToggleGroup({ className, children, ...props }) {
  return (
    <ToggleGroupPrimitive.Root
      className={cn("flex items-center rounded-md", className)}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  );
}

export function ToggleGroupItem({
  className,
  children,
  ...props
}) {
  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        "px-3 py-1 text-sm border",
        "data-[state=on]:bg-blue-500 data-[state=on]:text-white",
        "rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}