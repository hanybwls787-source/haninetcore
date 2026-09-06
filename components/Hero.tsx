// app/components/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiReact,
  SiDotnet,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
} from "react-icons/si";

const orbitIcons = [
  { icon: <SiReact />, color: "#61DAFB" },
  { icon: <SiDotnet />, color: "#512BD4" },
  { icon: <SiJavascript />, color: "#F7DF1E" },
  { icon: <SiHtml5 />, color: "#E34F26" },
  { icon: <SiCss />, color: "#1572B6" },
  { icon: <SiTailwindcss />, color: "#38BDF8" },
];

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "2+", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Hero() {
  const fullName = "Hani Boulos";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: TEXT + BUTTONS */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* TITLE */}
            <motion.h2
              className="text-primary text-xl md:text-2xl font-semibold mb-6"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Full-Stack Developer | ASP.NET Core & React
            </motion.h2>

            {/* EXPANDED ABOUT / PITCH */}
            <motion.div
              className="space-y-4"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-neutral-200 text-lg leading-relaxed">
                I'm a passionate Full-Stack Developer who turns ideas into
                fast, reliable, and beautifully designed web applications.
                With hands-on experience across{" "}
                <span className="text-primary font-semibold">
                  ASP.NET Core, React, and SQL Server
                </span>
                , I build products that don't just work — they feel great to use.
              </p>

              <p className="text-neutral-400 leading-relaxed">
                From secure authentication systems and clean REST APIs to
                pixel-perfect, animated front-ends, I care about every detail:
                performance, scalability, and a smooth experience for your users.
                I've delivered e-commerce platforms, interactive games,
                dashboards, and portfolio sites for clients who needed more
                than just code — they needed a partner who understands their
                vision and ships it on time.
              </p>

              <p className="text-neutral-400 leading-relaxed">
                Whether you have a full product in mind or just an idea on
                paper, I'm always excited to collaborate, solve real problems,
                and build something people actually enjoy using. If you're
                looking for a developer who's reliable, communicates clearly,
                and genuinely cares about your project's success —{" "}
                <span className="text-primary font-semibold">
                  let's work together.
                </span>
              </p>
            </motion.div>

            {/* STATS */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-neutral-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              className="flex flex-wrap gap-5 justify-center md:justify-start mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href="#projects"
                className="bg-primary hover:bg-primary-hover text-neutral-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-yellow-500/20 hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>

              <a
                href="#about"
                className="bg-transparent text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-primary hover:bg-primary hover:text-neutral-900 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* RIGHT: IMAGE + NAME */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            {/* IMAGE + ORBITING TECH ICONS */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto mb-6">
              <motion.img
                src="/sele.png"
                alt="Hani Boulos"
                className="absolute inset-0 m-auto w-44 h-44 md:w-52 md:h-52 object-cover rounded-2xl border-4 border-primary shadow-2xl shadow-yellow-500/30 animate-float"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Glow ring behind the image */}
              <div className="absolute inset-0 m-auto w-44 h-44 md:w-52 md:h-52 rounded-2xl animate-glow-pulse pointer-events-none" />

              {/* Rotating orbit */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                {orbitIcons.map((tech, i) => {
                  const angle = (360 / orbitIcons.length) * i;
                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translate(125px) rotate(-${angle}deg)`,
                      }}
                    >
                      <motion.div
                        className="w-11 h-11 -mt-[22px] -ml-[22px] flex items-center justify-center bg-white rounded-full shadow-lg text-xl"
                        style={{ color: tech.color }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                      >
                        {tech.icon}
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* NAME + SOCIAL (below the image) */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-black">
                {text}
                <span className="ml-1 text-primary animate-pulse">|</span>
              </h1>

              <div className="flex gap-5 text-3xl">
                <a
                  href="https://www.linkedin.com/in/hani-bullus-19b03b354/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/hanybwls787-source"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:hanubullus456@gmail.com"
                  className="text-neutral-300 hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <FaEnvelope />
                </a>
              </div>

              <a
                href="/cv-hani.pdf"
                download
                className="mt-2 bg-white/10 text-white px-6 py-2.5 rounded-xl font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}