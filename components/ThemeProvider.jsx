"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children, ...props }) {
  // next-themes' bootstrap script runs in the server-rendered HTML. On the
  // client, mark it as data so React 19 does not treat it as an executable
  // script rendered by a React component.
  const scriptProps =
    typeof window === "undefined" ? undefined : { type: "application/json" };

  return (
    <NextThemesProvider {...props} scriptProps={scriptProps}>
      {children}
    </NextThemesProvider>
  );
}
