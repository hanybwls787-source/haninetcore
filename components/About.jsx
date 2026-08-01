"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function About() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  /* 👀 مراقبة ظهور السكشن */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_o7g5go5",
        "template_2nooyeh",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "5qwuzvlbpQbUIySyD"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("error");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-black text-white px-4 py-20"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* ABOUT */}
        <div className="bg-slate-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>

          <p className="text-slate-400 leading-relaxed mb-6">
            Hello! I'm <span className="font-semibold">Hani Boulos</span>, a
            Full-Stack Developer specializing in
            <span className="text-primary"> ASP.NET Core & React</span>.
          </p>

          {/* SKILLS */}
          <div className="space-y-4">
            <Skill name="HTML" percent={96} color="bg-orange-500" animate={animate} />
            <Skill name="CSS" percent={95} color="bg-blue-500" animate={animate} />
            <Skill name="JavaScript" percent={85} color="bg-yellow-500" animate={animate} />
            <Skill name="React" percent={80} color="bg-cyan-500" animate={animate} />
            <Skill name="ASP.NET Core" percent={80} color="bg-purple-600" animate={animate} />
            <Skill name="JWT" percent={86} color="bg-indigo-500" animate={animate} />
            <Skill name="Authentication" percent={75} color="bg-green-500" animate={animate} />
            <Skill name="Authorization" percent={80} color="bg-pink-500" animate={animate} />
          </div>

          {/* DOWNLOAD CV */}
          <a
            href="/cv-hani.pdf"
            download
            className="
              mt-8 inline-block w-full text-center
              bg-gradient-to-r from-purple-600 to-indigo-600
              text-white py-3 rounded-xl
              font-bold text-lg
              hover:scale-105 hover:shadow-xl
              transition
            "
          >
            Get my CV 📄
          </a>
        </div>

        {/* CONTACT + CERTIFICATE */}
        <div className="space-y-6">

          {/* CONTACT FORM */}
          <div className="bg-slate-900 p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

            <form
              onSubmit={sendEmail}
              className="space-y-4 border border-slate-700 rounded-xl p-5 bg-slate-800"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white"
                required
              />

              <button
                disabled={loading}
                className="
                  w-full
                  bg-gradient-to-r from-indigo-600 to-purple-600
                  text-white py-3 rounded-xl
                  font-bold text-lg
                  border border-indigo-400
                  hover:scale-105 hover:shadow-xl
                  transition
                "
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center mt-2">
                  Message sent successfully ✅
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-center mt-2">
                  Something went wrong ❌
                </p>
              )}
            </form>
          </div>

          {/* CERTIFICATE */}
          <div className="bg-slate-900 p-6 rounded-2xl shadow-xl text-center">
            <img
              src="/haaaan.png"
              alt="My Certificate"
              className="mx-auto mb-4 w-48 h-auto rounded-lg shadow-md"
            />

            <a
              href="/haaaan.png"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-gradient-to-r from-green-500 to-emerald-600
                text-white px-6 py-3 rounded-xl
                font-bold
                border border-green-400
                hover:scale-105 hover:shadow-xl
                transition
              "
            >
              View Certificate 📜
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* SKILL BAR */
function Skill({ name, percent, color, animate }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-slate-400">{percent}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full transition-all duration-1000`}
          style={{ width: animate ? `${percent}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}
