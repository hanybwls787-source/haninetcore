"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    desc: "A full-featured e-commerce system with shopping cart, user authentication, and order management.",
    tech: ["ASP.NET Core", "React", "SQL Server", "Tailwind CSS"],
    img: "nor.png",
  },
  {
    title: "Word guessing game",
    desc: "A task management tool to track projects, deadlines, and team collaboration efficiently.",
    tech: ["C#", "SQL Server", "Entity Framework", "Bootstrap"],
    img: "poto2.jpg",
  },
  {
    title: "Mina The Artist Platform",
    desc: "A modern portfolio platform for artists to showcase their work with responsive UI and animations.",
    tech: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    img: "poto4.jpg",
  },
  {
    title: "Clothing marketing website",
    desc: "Interactive data dashboard showing real-time metrics with dynamic charts and filters.",
    tech: ["React", "Chart.js", "REST API", "Tailwind CSS"],
    img: "num.png",
  },
  {
    title: "Restaurant orders",
    desc: "Basic charts and analytics for learning visualization techniques in JavaScript.",
    tech: ["JavaScript", "HTML", "CSS", "Chart.js"],
    img: "level1.png",
  },
  {
    title: "Restaurant food",
    desc: "Advanced charts with animations, filtering, and dynamic UI interactions.",
    tech: ["JavaScript", "D3.js", "CSS Animations", "HTML"],
    img: "level2.png",
  },
];

// helper to create moving circles
const circles = [
  { size: 20, top: "10%", left: "5%", duration: 10 },
  { size: 40, top: "30%", left: "80%", duration: 15 },
  { size: 25, top: "70%", left: "20%", duration: 12 },
  { size: 35, top: "50%", left: "50%", duration: 20 },
  { size: 15, top: "80%", left: "70%", duration: 18 },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 py-24 bg-slate-50 dark:bg-black overflow-hidden"
    >
      {/* Animated background circles */}
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-bold-400 opacity-20"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
          }}
          animate={{
            y: ["20%", "20%", "20%"],
            x: ["20%", "15%", "-10%", "20%"],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* TITLE */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white dark:text-white">
          Achievements & Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A selection of projects that demonstrate my skills in
          full-stack web development and modern UI design.
        </p>
      </motion.div>

      {/* PROJECTS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
