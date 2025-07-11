// src/components/FluidCursor.js
import { useEffect } from "react";

export default function FluidCursor() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/nitin42/animate-cursor@latest/fluid-cursor.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
