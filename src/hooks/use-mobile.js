import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT}px)`
    );

    const handleChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mediaQuery.addEventListener("change", handleChange);
    handleChange();

    return () =>
      mediaQuery.removeEventListener("change", handleChange);

  }, []);

  return isMobile;
}