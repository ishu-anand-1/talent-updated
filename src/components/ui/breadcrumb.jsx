import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "../../utils/cn";

export function Breadcrumb(props) {
  return <nav aria-label="breadcrumb" {...props} />;
}

export function BreadcrumbList({ className, ...props }) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-2 text-sm text-gray-500",
        className
      )}
      {...props}
    />
  );
}

export function BreadcrumbItem({ className, ...props }) {
  return (
    <li
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export function BreadcrumbLink({ asChild = false, className, ...props }) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn("hover:text-black transition-colors", className)}
      {...props}
    />
  );
}

export function BreadcrumbPage({ className, ...props }) {
  return (
    <span
      aria-current="page"
      className={cn("font-medium text-black", className)}
      {...props}
    />
  );
}

export function BreadcrumbSeparator({ children, className, ...props }) {
  return (
    <li
      role="presentation"
      className={cn("flex items-center", className)}
      {...props}
    >
      {children ?? <ChevronRight size={14} />}
    </li>
  );
}

export function BreadcrumbEllipsis({ className, ...props }) {
  return (
    <span
      className={cn("flex items-center justify-center w-6 h-6", className)}
      {...props}
    >
      <MoreHorizontal size={16} />
    </span>
  );
}