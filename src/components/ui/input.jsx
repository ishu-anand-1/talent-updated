import React from "react";
import { cn } from "../../utils/cn";

export function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-gray-300",
        "px-3 py-1 text-sm outline-none",
        "focus:ring-2 focus:ring-blue-500",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}