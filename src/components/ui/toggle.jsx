import React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-gray-100",
        outline: "border hover:bg-gray-100",
      },
      size: {
        default: "h-9 px-2",
        sm: "h-8 px-1.5",
        lg: "h-10 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Toggle({ className, variant, size, ...props }) {
  return (
    <TogglePrimitive.Root
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { toggleVariants };