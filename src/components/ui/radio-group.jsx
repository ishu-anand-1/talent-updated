import React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "../../utils/cn";

export function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

export function RadioGroupItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-gray-300",
        "flex items-center justify-center",
        "focus:ring-2 focus:ring-blue-500",
        "disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator>
        <Circle className="h-2 w-2 fill-blue-600 text-blue-600" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}