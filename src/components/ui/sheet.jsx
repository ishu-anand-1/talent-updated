import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";

export function Sheet(props) {
  return <Dialog.Root {...props} />;
}

export function SheetTrigger(props) {
  return <Dialog.Trigger {...props} />;
}

export function SheetClose(props) {
  return <Dialog.Close {...props} />;
}

export function SheetPortal(props) {
  return <Dialog.Portal {...props} />;
}

export function SheetOverlay({ className, ...props }) {
  return (
    <Dialog.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

export function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return (
    <SheetPortal>
      <SheetOverlay />

      <Dialog.Content
        className={cn(
          "fixed z-50 flex flex-col bg-white shadow-lg",
          side === "right" && "right-0 top-0 h-full w-80 border-l",
          side === "left" && "left-0 top-0 h-full w-80 border-r",
          side === "top" && "top-0 left-0 w-full border-b",
          side === "bottom" && "bottom-0 left-0 w-full border-t",
          className
        )}
        {...props}
      >
        {children}

        <Dialog.Close className="absolute right-4 top-4 opacity-70 hover:opacity-100">
          <X size={18} />
        </Dialog.Close>
      </Dialog.Content>
    </SheetPortal>
  );
}

export function SheetHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

export function SheetFooter({ className, ...props }) {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

export function SheetTitle({ className, ...props }) {
  return (
    <Dialog.Title
      className={cn("font-semibold text-lg", className)}
      {...props}
    />
  );
}

export function SheetDescription({ className, ...props }) {
  return (
    <Dialog.Description
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  );
}