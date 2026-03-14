import React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "../../utils/cn";

export function Drawer(props) {
  return <DrawerPrimitive.Root {...props} />;
}

export function DrawerTrigger(props) {
  return <DrawerPrimitive.Trigger {...props} />;
}

export function DrawerClose(props) {
  return <DrawerPrimitive.Close {...props} />;
}

export function DrawerOverlay({ className, ...props }) {
  return (
    <DrawerPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

export function DrawerContent({ className, children, ...props }) {
  return (
    <DrawerPrimitive.Portal>
      <DrawerOverlay />

      <DrawerPrimitive.Content
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 flex flex-col",
          "rounded-t-lg border bg-white p-4 shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  );
}

export function DrawerHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props} />
  );
}

export function DrawerFooter({ className, ...props }) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props} />
  );
}

export function DrawerTitle({ className, ...props }) {
  return (
    <DrawerPrimitive.Title
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

export function DrawerDescription({ className, ...props }) {
  return (
    <DrawerPrimitive.Description
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  );
}