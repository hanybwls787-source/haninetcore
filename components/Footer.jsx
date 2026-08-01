"use client";

// app/components/Footer.jsx
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="border-t border-slate-200 dark:border-slate-800 py-10 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-6 justify-between items-center text-center sm:text-left">

        {/* Text */}
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © 2026 <span className="font-semibold">Hani Boulos</span>.  
          All Rights Reserved...
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:hanubullus456@gmail.com"
            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-500 transition"
          >
            <Mail size={18} />
          
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/hanybwls787-source"
            target="_blank"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition"
          >
            <Github size={20} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/hani-bullus-77a913304/"
            target="_blank"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition"
          >
            <Linkedin size={20} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
