import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../utils/cn";

export function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "inline-flex h-5 w-9 items-center rounded-full bg-gray-300 transition",
        "data-[state=checked]:bg-blue-600",
        "focus:outline-none focus:ring-2 focus:ring-blue-400",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className="block h-4 w-4 rounded-full bg-white shadow transition-transform data-[state=checked]:translate-x-4"
      />
    </SwitchPrimitive.Root>
  );
}