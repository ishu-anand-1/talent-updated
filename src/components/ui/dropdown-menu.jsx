import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../../utils/cn";

export function DropdownMenu(props) {
  return <DropdownMenuPrimitive.Root {...props} />;
}

export function DropdownMenuTrigger(props) {
  return <DropdownMenuPrimitive.Trigger {...props} />;
}

export function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

export function DropdownMenuItem({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer",
        "focus:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

export function DropdownMenuCheckboxItem({ className, children, ...props }) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cn(
        "relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
        className
      )}
      {...props}
    >
      <span className="absolute left-2">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check size={14} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioGroup(props) {
  return <DropdownMenuPrimitive.RadioGroup {...props} />;
}

export function DropdownMenuRadioItem({ className, children, ...props }) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        "relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm",
        className
      )}
      {...props}
    >
      <span className="absolute left-2">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle size={10} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

export function DropdownMenuLabel({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn("px-2 py-1.5 text-sm font-medium", className)}
      {...props}
    />
  );
}

export function DropdownMenuSeparator({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn("my-1 h-px bg-gray-200", className)}
      {...props}
    />
  );
}

export function DropdownMenuSub(props) {
  return <DropdownMenuPrimitive.Sub {...props} />;
}

export function DropdownMenuSubTrigger({ className, children, ...props }) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        "flex items-center rounded-sm px-2 py-1.5 text-sm cursor-pointer",
        "focus:bg-gray-100",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight size={16} className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

export function DropdownMenuSubContent({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.SubContent
      className={cn(
        "z-50 min-w-[8rem] rounded-md border bg-white p-1 shadow-md",
        className
      )}
      {...props}
    />
  );
}