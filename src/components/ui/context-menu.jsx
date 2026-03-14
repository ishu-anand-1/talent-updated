import React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../../utils/cn";
export function ContextMenu(props) {
  return <ContextMenuPrimitive.Root {...props} />;
}

export function ContextMenuTrigger(props) {
  return <ContextMenuPrimitive.Trigger {...props} />;
}

export function ContextMenuContent({ className, ...props }) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

export function ContextMenuItem({ className, ...props }) {
  return (
    <ContextMenuPrimitive.Item
      className={cn(
        "flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer",
        "focus:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

export function ContextMenuCheckboxItem({ className, children, ...props }) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      className={cn(
        "relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
        className
      )}
      {...props}
    >
      <span className="absolute left-2">
        <ContextMenuPrimitive.ItemIndicator>
          <Check size={14} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

export function ContextMenuRadioItem({ className, children, ...props }) {
  return (
    <ContextMenuPrimitive.RadioItem
      className={cn(
        "relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
        className
      )}
      {...props}
    >
      <span className="absolute left-2">
        <ContextMenuPrimitive.ItemIndicator>
          <Circle size={10} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

export function ContextMenuLabel({ className, ...props }) {
  return (
    <ContextMenuPrimitive.Label
      className={cn("px-2 py-1.5 text-sm font-medium", className)}
      {...props}
    />
  );
}

export function ContextMenuSeparator({ className, ...props }) {
  return (
    <ContextMenuPrimitive.Separator
      className={cn("my-1 h-px bg-gray-200", className)}
      {...props}
    />
  );
}