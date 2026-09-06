// app/components/Skills.jsx
"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiDotnet,
  SiSharp,
} from "react-icons/si";
import { Webhook, Database, Palette, Server } from "lucide-react";

const frontend = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
];

const backend = [
  { name: "ASP.NET Core", icon: <SiDotnet /> },
  { name: "C#", icon: <SiSharp /> },
  { name: "SQL Server", icon: <Database size={18} /> },
  { name: "REST APIs", icon: <Webhook size={18} /> },
  { name: "Entity Framework", icon: <Database size={18} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-white">
      {/* TITLE */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold mb-2 text-neutral-900">
          Technical <span className="text-gradient-yellow">Skills</span>
        </h2>
        <p className="text-neutral-500">
          Technologies I use to build modern web applications
        </p>
      </motion.div>

      {/* SKILLS GRID */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* FRONTEND */}
        <motion.div
          className="group bg-white p-8 rounded-2xl
                     border border-yellow-100
                     hover:border-primary hover:shadow-xl hover:shadow-yellow-100
                     transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-neutral-900">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-50 text-primary-hover">
              <Palette size={20} />
            </span>
            Front-End
          </h3>

          <ul className="grid grid-cols-2 gap-4">
            {frontend.map(({ name, icon }, i) => (
              <motion.li
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-neutral-50
                           border border-transparent
                           px-4 py-2.5 rounded-lg text-sm font-medium
                           text-neutral-800 justify-center
                           group-hover:border-yellow-200
                           hover:scale-105 hover:bg-yellow-50 hover:!border-primary
                           transition-all duration-300"
              >
                <span className="text-primary-hover text-base">{icon}</span>
                {name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          className="group bg-white p-8 rounded-2xl
                     border border-yellow-100
                     hover:border-primary hover:shadow-xl hover:shadow-yellow-100
                     transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-neutral-900">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-50 text-primary-hover">
              <Server size={20} />
            </span>
            Back-End
          </h3>

          <ul className="grid grid-cols-2 gap-4">
            {backend.map(({ name, icon }, i) => (
              <motion.li
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-neutral-50
                           border border-transparent
                           px-4 py-2.5 rounded-lg text-sm font-medium
                           text-neutral-800 justify-center
                           group-hover:border-yellow-200
                           hover:scale-105 hover:bg-yellow-50 hover:!border-primary
                           transition-all duration-300"
              >
                <span className="text-primary-hover text-base">{icon}</span>
                {name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}