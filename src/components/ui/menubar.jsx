import React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../../utils/cn";

export function Menubar({ className, ...props }) {
  return (
    <MenubarPrimitive.Root
      className={cn(
        "flex h-9 items-center gap-1 rounded-md border bg-white p-1 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function MenubarMenu(props) {
  return <MenubarPrimitive.Menu {...props} />;
}

export function MenubarTrigger({ className, ...props }) {
  return (
    <MenubarPrimitive.Trigger
      className={cn(
        "flex items-center rounded-sm px-2 py-1 text-sm font-medium",
        "focus:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

export function MenubarContent({ className, ...props }) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        className={cn(
          "z-50 min-w-[12rem] rounded-md border bg-white p-1 shadow-md",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
}

export function MenubarItem({ className, ...props }) {
  return (
    <MenubarPrimitive.Item
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
        "focus:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

export function MenubarSeparator({ className, ...props }) {
  return (
    <MenubarPrimitive.Separator
      className={cn("my-1 h-px bg-gray-200", className)}
      {...props}
    />
  );
}

export function MenubarLabel({ className, ...props }) {
  return (
    <MenubarPrimitive.Label
      className={cn("px-2 py-1.5 text-sm font-medium", className)}
      {...props}
    />
  );
}

export function MenubarCheckboxItem({ className, children, ...props }) {
  return (
    <MenubarPrimitive.CheckboxItem
      className={cn(
        "relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
        className
      )}
      {...props}
    >
      <span className="absolute left-2">
        <MenubarPrimitive.ItemIndicator>
          <Check size={14} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

export function MenubarRadioGroup(props) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

export function MenubarRadioItem({ className, children, ...props }) {
  return (
    <MenubarPrimitive.RadioItem
      className={cn(
        "relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
        className
      )}
      {...props}
    >
      <span className="absolute left-2">
        <MenubarPrimitive.ItemIndicator>
          <Circle size={10} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

export function MenubarSub(props) {
  return <MenubarPrimitive.Sub {...props} />;
}

export function MenubarSubTrigger({ className, children, ...props }) {
  return (
    <MenubarPrimitive.SubTrigger
      className={cn(
        "flex items-center rounded-sm px-2 py-1.5 text-sm",
        "focus:bg-gray-100",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight size={16} className="ml-auto" />
    </MenubarPrimitive.SubTrigger>
  );
}

export function MenubarSubContent({ className, ...props }) {
  return (
    <MenubarPrimitive.SubContent
      className={cn(
        "z-50 min-w-[8rem] rounded-md border bg-white p-1 shadow-md",
        className
      )}
      {...props}
    />
  );
}

export function MenubarShortcut({ className, ...props }) {
  return (
    <span
      className={cn("ml-auto text-xs text-gray-500", className)}
      {...props}
    />
  );
}