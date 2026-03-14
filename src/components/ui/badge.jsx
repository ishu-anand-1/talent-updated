import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap gap-1",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white border-transparent",
        secondary: "bg-gray-200 text-gray-800 border-transparent",
        destructive: "bg-red-500 text-white border-transparent",
        outline: "border-gray-300 text-gray-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { badgeVariants };