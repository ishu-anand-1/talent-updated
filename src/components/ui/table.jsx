import React from "react";
import { cn } from "../../utils/cn";

export function Table({ className, ...props }) {
  return (
    <div className="relative w-full overflow-x-auto">
      <table
        className={cn("w-full text-sm", className)}
        {...props}
      />
    </div>
  );
}

export function TableHeader({ className, ...props }) {
  return (
    <thead
      className={cn("border-b", className)}
      {...props}
    />
  );
}

export function TableBody({ className, ...props }) {
  return (
    <tbody
      className={cn("", className)}
      {...props}
    />
  );
}

export function TableFooter({ className, ...props }) {
  return (
    <tfoot
      className={cn("border-t bg-gray-50 font-medium", className)}
      {...props}
    />
  );
}

export function TableRow({ className, ...props }) {
  return (
    <tr
      className={cn(
        "border-b hover:bg-gray-50 transition-colors",
        className
      )}
      {...props}
    />
  );
}

export function TableHead({ className, ...props }) {
  return (
    <th
      className={cn(
        "px-3 py-2 text-left font-medium",
        className
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }) {
  return (
    <td
      className={cn(
        "px-3 py-2",
        className
      )}
      {...props}
    />
  );
}

export function TableCaption({ className, ...props }) {
  return (
    <caption
      className={cn("mt-4 text-sm text-gray-500", className)}
      {...props}
    />
  );
}