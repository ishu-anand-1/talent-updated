import React, { createContext, useContext, useState } from "react";
import { PanelLeft } from "lucide-react";
import { cn } from "../../utils/cn";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{ open, setOpen, toggleSidebar }}
    >
      <div className="flex min-h-screen w-full">
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}

export function Sidebar({ className, children }) {
  const { open } = useSidebar();

  return (
    <aside
      className={cn(
        "bg-gray-900 text-white transition-all duration-300",
        open ? "w-64" : "w-16",
        className
      )}
    >
      {children}
    </aside>
  );
}

export function SidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="p-2"
    >
      <PanelLeft />
    </button>
  );
}

export function SidebarContent({ children }) {
  return (
    <div className="flex flex-col gap-2 p-4">
      {children}
    </div>
  );
}

export function SidebarMenu({ children }) {
  return (
    <ul className="flex flex-col gap-2">
      {children}
    </ul>
  );
}

export function SidebarMenuItem({ children }) {
  return (
    <li className="cursor-pointer rounded p-2 hover:bg-gray-800">
      {children}
    </li>
  );
}