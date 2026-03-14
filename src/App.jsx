import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Enable dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <RouterProvider router={router} />
  );
}