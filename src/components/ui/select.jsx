import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../utils/cn";

export function Select(props) {
  return <SelectPrimitive.Root {...props} />;
}

export function SelectGroup(props) {
  return <SelectPrimitive.Group {...props} />;
}

export function SelectValue(props) {
  return <SelectPrimitive.Value {...props} />;
}

export function SelectTrigger({ className, children, ...props }) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-md border",
        "bg-white px-3 py-2 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    >
      {children}

      <SelectPrimitive.Icon asChild>
        <ChevronDown size={16} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectContent({ className, children, ...props }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md",
          className
        )}
        {...props}
      >
        <SelectScrollUpButton />

        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>

        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectLabel({ className, ...props }) {
  return (
    <SelectPrimitive.Label
      className={cn("px-2 py-1.5 text-xs text-gray-500", className)}
      {...props}
    />
  );
}

export function SelectItem({ className, children, ...props }) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default items-center",
        "rounded-sm py-1.5 pl-2 pr-8 text-sm",
        "focus:bg-gray-100",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check size={16} />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export function SelectSeparator({ className, ...props }) {
  return (
    <SelectPrimitive.Separator
      className={cn("my-1 h-px bg-gray-200", className)}
      {...props}
    />
  );
}

export function SelectScrollUpButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    >
      <ChevronUp size={16} />
    </SelectPrimitive.ScrollUpButton>
  );
}

export function SelectScrollDownButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    >
      <ChevronDown size={16} />
    </SelectPrimitive.ScrollDownButton>
  );
}