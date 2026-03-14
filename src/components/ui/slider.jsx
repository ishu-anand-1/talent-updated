import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../utils/cn";

export function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {

  const values = React.useMemo(() => {
    if (Array.isArray(value)) return value;
    if (Array.isArray(defaultValue)) return defaultValue;
    return [min];
  }, [value, defaultValue, min]);

  return (
    <SliderPrimitive.Root
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full items-center touch-none select-none",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
        <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
      </SliderPrimitive.Track>

      {values.map((_, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="block h-4 w-4 rounded-full border border-blue-500 bg-white shadow"
        />
      ))}
    </SliderPrimitive.Root>
  );
}