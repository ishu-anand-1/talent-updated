import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../utils/cn";
import { buttonVariants } from "./button";

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center items-center relative",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",

        nav_button: cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "h-7 w-7 bg-transparent opacity-50 hover:opacity-100"
        ),

        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",

        table: "w-full border-collapse",
        head_row: "flex",
        head_cell: "w-8 text-[0.8rem] text-gray-500",

        row: "flex w-full mt-2",
        cell: "text-center text-sm relative",

        day: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "h-8 w-8 p-0 font-normal"
        ),

        day_selected: "bg-blue-600 text-white",
        day_today: "bg-gray-200",
        day_outside: "text-gray-400",
        day_disabled: "opacity-40",

        ...classNames,
      }}

      components={{
        IconLeft: (props) => (
          <ChevronLeft className="h-4 w-4" {...props} />
        ),
        IconRight: (props) => (
          <ChevronRight className="h-4 w-4" {...props} />
        ),
      }}

      {...props}
    />
  );
}