import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";

import { cn } from "../../utils/cn";
import { Button, buttonVariants } from "./button";

export function Pagination({ className, ...props }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

export function PaginationContent({ className, ...props }) {
  return (
    <ul
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

export function PaginationItem(props) {
  return <li {...props} />;
}

export function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      )}
      {...props}
    />
  );
}

export function PaginationPrevious({ className, ...props }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("flex items-center gap-1 px-2.5", className)}
      {...props}
    >
      <ChevronLeft size={16} />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

export function PaginationNext({ className, ...props }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("flex items-center gap-1 px-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRight size={16} />
    </PaginationLink>
  );
}

export function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex h-9 w-9 items-center justify-center",
        className
      )}
      {...props}
    >
      <MoreHorizontal size={16} />
      <span className="sr-only">More pages</span>
    </span>
  );
}