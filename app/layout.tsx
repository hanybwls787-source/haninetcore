import "./globals.css";
import type { ReactNode } from "react";
import ThemeProvider from "../components/ThemeProvider";

export const metadata = {
  title: "Hani Boulos - Full Stack Developer",
  description: ".NET & React Developer Portfolio",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground m-0 p-0 flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="w-full bg-surface text-slate-600 dark:text-slate-400 text-center py-6 mt-auto border-t border-border">
            &copy; {new Date().getFullYear()} Hani Boulos. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
