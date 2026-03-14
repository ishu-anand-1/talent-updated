import React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "../../utils/cn";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "./dialog";

export function Command({ className, ...props }) {
  return (
    <CommandPrimitive
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-md bg-white text-black",
        className
      )}
      {...props}
    />
  );
}

export function CommandDialog({
  title = "Command Palette",
  description = "Search for a command...",
  children,
  ...props
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>

      <DialogContent className="p-0 overflow-hidden">
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
}

export function CommandInput({ className, ...props }) {
  return (
    <div className="flex items-center border-b px-3">
      <Search className="mr-2 h-4 w-4 opacity-50" />
      <CommandPrimitive.Input
        className={cn(
          "flex h-10 w-full bg-transparent text-sm outline-none",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function CommandList({ className, ...props }) {
  return (
    <CommandPrimitive.List
      className={cn("max-h-[300px] overflow-y-auto", className)}
      {...props}
    />
  );
}

export function CommandEmpty(props) {
  return (
    <CommandPrimitive.Empty
      className="py-6 text-center text-sm"
      {...props}
    />
  );
}

export function CommandGroup({ className, ...props }) {
  return (
    <CommandPrimitive.Group
      className={cn("p-1 text-sm", className)}
      {...props}
    />
  );
}

export function CommandSeparator({ className, ...props }) {
  return (
    <CommandPrimitive.Separator
      className={cn("h-px bg-gray-200", className)}
      {...props}
    />
  );
}

export function CommandItem({ className, ...props }) {
  return (
    <CommandPrimitive.Item
      className={cn(
        "flex items-center gap-2 rounded px-2 py-1.5 text-sm cursor-pointer",
        "data-[selected=true]:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

export function CommandShortcut({ className, ...props }) {
  return (
    <span
      className={cn("ml-auto text-xs text-gray-500", className)}
      {...props}
    />
  );
}