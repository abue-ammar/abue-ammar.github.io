"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children, ...props }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SessionProvider> {children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
