import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../../utils/cn";

export function Popover(props) {
  return <PopoverPrimitive.Root {...props} />;
}

export function PopoverTrigger(props) {
  return <PopoverPrimitive.Trigger {...props} />;
}

export function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 rounded-md border bg-white p-4 shadow-md",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export function PopoverAnchor(props) {
  return <PopoverPrimitive.Anchor {...props} />;
}