"use client";
import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
interface ToggleThemeProps {}

const ToggleTheme: React.FC<ToggleThemeProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-6 w-6"></div>;
  return (
    <Expand
      placeholder={""}
      onPointerEnterCapture={""}
      onPointerLeaveCapture={""}
      className="text-2xl"
      onToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
      toggled={theme === "dark"}
    />
  );
};

export default ToggleTheme;
