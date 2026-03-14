import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid grid-cols-[0_1fr] items-start gap-y-1 has-[>svg]:grid-cols-[16px_1fr] has-[>svg]:gap-x-3",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
        destructive: "bg-red-50 text-red-600 border-red-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function Alert({ className, variant, ...props }) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

export function AlertTitle({ className, ...props }) {
  return (
    <div
      className={cn(
        "col-start-2 font-medium tracking-tight text-sm",
        className
      )}
      {...props}
    />
  );
}

export function AlertDescription({ className, ...props }) {
  return (
    <div
      className={cn(
        "col-start-2 text-sm text-gray-500 leading-relaxed",
        className
      )}
      {...props}
    />
  );
}