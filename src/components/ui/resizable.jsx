import React from "react";
import * as ResizablePrimitive from "react-resizable-panels";
import { GripVertical } from "lucide-react";
import { cn } from "../../utils/cn";

export function ResizablePanelGroup({ className, ...props }) {
  return (
    <ResizablePrimitive.PanelGroup
      className={cn(
        "flex h-full w-full",
        className
      )}
      {...props}
    />
  );
}

export function ResizablePanel(props) {
  return <ResizablePrimitive.Panel {...props} />;
}

export function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      className={cn(
        "relative flex w-px items-center justify-center bg-gray-200",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="flex h-4 w-3 items-center justify-center rounded border bg-gray-200">
          <GripVertical className="h-2.5 w-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}