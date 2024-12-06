import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Only run this code on the client (browser)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Set initial size
      handleResize();

      // Add event listener for resize
      window.addEventListener("resize", handleResize);

      return () => {
        // Cleanup event listener
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowSize;
}
