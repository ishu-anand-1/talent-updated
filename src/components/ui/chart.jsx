import React, { createContext, useContext, useMemo } from "react";
import * as Recharts from "recharts";
import { cn } from "../../utils/cn";

const ChartContext = createContext(null);

export function useChart() {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used inside ChartContainer");
  }
  return context;
}

export function ChartContainer({
  id,
  className,
  children,
  config = {},
  ...props
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <Recharts.ResponsiveContainer>
          {children}
        </Recharts.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

export const ChartTooltip = Recharts.Tooltip;
export const ChartLegend = Recharts.Legend;