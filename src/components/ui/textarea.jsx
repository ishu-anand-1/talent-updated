import React from "react";
import { cn } from "../../utils/cn";

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "min-h-[80px] w-full rounded-md border px-3 py-2 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        "disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}