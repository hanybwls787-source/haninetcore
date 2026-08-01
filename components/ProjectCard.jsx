// app/components/ProjectCard.jsx
"use client";

export default function ProjectCard({ title, desc, tech, img }) {
  return (
    <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl shadow-lg overflow-hidden p-6 hover:scale-105 transition-transform duration-300">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-48 object-cover rounded-xl mb-4" 
      />

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-100 mb-4">{desc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span key={i} className="bg-blue-400 text-white text-sm px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>

      {/* زرار تحميل المشروع */}
      <a
        href={img}          // رابط الصورة نفسها
        download={title}    // الاسم الافتراضي للصورة عند التحميل
        className="inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
      >
        Download progect
      </a>
    </div>
  );
}

