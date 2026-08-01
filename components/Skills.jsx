// app/components/Skills.jsx
"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-20 bg-slate-50 dark:bg-black"
    >
      {/* TITLE */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold mb-2">
          Technical Skills
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Technologies I use to build modern web applications
        </p>
      </motion.div>

      {/* SKILLS GRID */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* FRONTEND */}
        <motion.div
          className="group bg-white dark:bg-slate-900/60 p-8 rounded-2xl
                     border border-slate-200 dark:border-slate-800
                     hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary text-2xl">🎨</span>
            Front-End
          </h3>

          <ul className="grid grid-cols-2 gap-4">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
              (skill) => (
                <li
                  key={skill}
                  className="bg-slate-100 dark:bg-slate-800
                             px-4 py-2 rounded-lg text-sm font-medium
                             text-center group-hover:scale-105 transition"
                >
                  {skill}
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          className="group bg-white dark:bg-slate-900/60 p-8 rounded-2xl
                     border border-slate-200 dark:border-slate-800
                     hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="text-primary text-2xl">⚙️</span>
            Back-End
          </h3>

          <ul className="grid grid-cols-2 gap-4">
            {[
              "ASP.NET Core",
              "C#",
              "SQL Server",
              "REST APIs",
              "Entity Framework",
            ].map((skill) => (
              <li
                key={skill}
                className="bg-slate-100 dark:bg-slate-800
                           px-4 py-2 rounded-lg text-sm font-medium
                           text-center group-hover:scale-105 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
