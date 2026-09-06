"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Contact me", id: "about" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

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
    <header
      className={`sticky top-0 z-50 backdrop-blur transition-all duration-300 border-b
        ${scrolled ? "bg-white/90 border-yellow-100 shadow-sm" : "bg-white/70 border-transparent"}
      `}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 py-4">
        {/* LOGO */}
        <h2 className="text-xl font-bold text-neutral-900">
          Hani <span className="text-gradient-yellow">Boulos</span>
        </h2>

        {/* DESKTOP NAV */}
        <nav className="hidden sm:flex gap-2 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`relative px-4 py-1.5 rounded-full transition-all duration-300
                ${
                  active === link.id
                    ? "bg-primary text-neutral-900 shadow-md shadow-yellow-200"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-yellow-50"
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="sm:hidden text-neutral-900 w-9 h-9 flex items-center justify-center rounded-full hover:bg-yellow-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            initial={false}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.25 }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden bg-white/95 border-t border-yellow-100"
          >
            <div className="flex flex-col gap-2 px-6 py-4 text-sm font-semibold">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  onClick={() => {
                    setActive(link.id);
                    setMenuOpen(false);
                  }}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300
                    ${
                      active === link.id
                        ? "bg-primary text-neutral-900 shadow-md shadow-yellow-200"
                        : "text-neutral-500 hover:text-neutral-900 hover:bg-yellow-50"
                    }
                  `}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}