// app/components/ProjectCard.jsx
"use client";

import { Download } from "lucide-react";

export default function ProjectCard({ title, desc, tech, img }) {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-lg border border-yellow-100
        overflow-hidden p-6
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-200 hover:border-primary
        transition-all duration-300
      "
    >
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{desc}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-yellow-50 text-primary-hover text-xs font-semibold px-3 py-1 rounded-full border border-yellow-200"
          >
            {t}
          </span>
        ))}
      </div>

      {/* زرار تحميل المشروع */}
      <a
        href={img}
        download={title}
        className="
          inline-flex items-center gap-2
          bg-primary hover:bg-primary-hover
          text-neutral-900 font-semibold px-4 py-2.5 rounded-lg
          transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-200
        "
      >
        <Download size={16} />
        Download Project
      </a>
    </div>
  );
}