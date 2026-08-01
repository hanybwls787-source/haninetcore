import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Hani Boulos - Full Stack Developer",
  description: ".NET & React Developer Portfolio",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="light">
      <body className="bg-black text-white m-0 p-0 flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="w-full bg-black/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">Hani Boulos</h1>
            <ul className="flex gap-6">
              <li><a href="#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-black/90 text-slate-400 text-center py-6 mt-auto">
          &copy; {new Date().getFullYear()} Hani Boulos. All rights reserved.
        </footer>
      </body>
    </html>
  );
}