import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../utils/cn";

export function Progress({
  className,
  value = 0,
  ...props
}) {
  return (
    <ProgressPrimitive.Root
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-gray-200",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full bg-blue-600 transition-all"
        style={{
          transform: `translateX(-${100 - value}%)`
        }}
      />
    </ProgressPrimitive.Root>
  );
}