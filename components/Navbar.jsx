"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Contact me", id: "about" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-black/70 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between px-6 sm:px-10 py-4">
        {/* LOGO */}
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Hani Boulos
        </h2>

        {/* DESKTOP NAV */}
        <nav className="hidden sm:flex gap-4 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`relative px-3 py-1 rounded-full transition-colors duration-300
                ${active === link.id ? "bg-red-500 text-white" : "text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-red-100 dark:hover:bg-red-600/30"}
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="sm:hidden text-slate-900 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <nav className="sm:hidden flex flex-col gap-2 px-6 pb-4 text-sm font-semibold bg-white/90 dark:bg-black/80">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.id);
                setMenuOpen(false);
              }}
              className={`relative px-3 py-1 rounded-full transition-colors duration-300
                ${active === link.id ? "bg-red-500 text-white" : "text-slate-500 dark:text-slate-400 hover:text-primary hover:bg-red-100 dark:hover:bg-red-600/30"}
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
