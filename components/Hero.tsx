"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const fullName = "Hani Boulos";

  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(fullName.slice(0, index + 1));
        setIndex(index + 1);

        if (index === fullName.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(fullName.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullName]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative container mx-auto px-6 text-center z-10">
        {/* IMAGE */}
        <motion.img
          src="/sele.png"
          alt="Hani Boulos"
          className="mx-auto mb-8 w-52 h-52 md:w-64 md:h-64 object-cover rounded-2xl border-4 border-primary shadow-lg"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* NAME + SOCIAL */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black">
            {text}
            <span className="ml-1 animate-pulse">|</span>
          </h1>

          <div className="flex gap-5 text-3xl">
            <a
              href="https://www.linkedin.com/in/hani-bullus-77a913304/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-primary transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/hanybwls787-source"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-primary transition"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:hanubullus456@gmail.com"
              className="text-slate-200 hover:text-primary transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          className="text-primary text-xl md:text-2xl font-semibold mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Full-Stack Developer | ASP.NET Core & React
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className="text-slate-200 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          I build modern, scalable, and high-performance web applications
          with clean architecture, secure backend systems, and user-focused
          front-end experiences.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex flex-wrap gap-5 justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl border-2 border-white/30 hover:scale-105 transition"
          >
            View My Work
          </a>

          <a
            href="#about"
            className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg border-2 border-primary hover:bg-primary hover:text-white hover:scale-105 transition"
          >
            Contact Me
          </a>

          <a
            href="/cv-hani.pdf"
            download
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
