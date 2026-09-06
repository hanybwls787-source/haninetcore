"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiDotnet,
} from "react-icons/si";
import { KeyRound, ShieldCheck, LockKeyhole } from "lucide-react";

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
      className="bg-white text-neutral-900 px-4 py-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* ABOUT */}
        <div
          className={`bg-white p-6 rounded-2xl shadow-xl border border-yellow-100 ${
            animate ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">
            About <span className="text-gradient-yellow">Me</span>
          </h2>

          <p className="text-neutral-600 leading-relaxed mb-6">
            Hello! I'm <span className="font-semibold text-neutral-900">Hani Boulos</span>, a
            Full-Stack Developer specializing in{" "}
            <span className="text-primary font-semibold">ASP.NET Core & React</span>.
          </p>

          {/* SKILLS */}
          <div className="space-y-5">
            <Skill icon={<SiHtml5 />} name="HTML" percent={96} animate={animate} delay={0} />
            <Skill icon={<SiCss />} name="CSS" percent={95} animate={animate} delay={80} />
            <Skill icon={<SiJavascript />} name="JavaScript" percent={85} animate={animate} delay={160} />
            <Skill icon={<SiReact />} name="React" percent={80} animate={animate} delay={240} />
            <Skill icon={<SiDotnet />} name="ASP.NET Core" percent={80} animate={animate} delay={320} />
            <Skill icon={<KeyRound size={18} />} name="JWT" percent={86} animate={animate} delay={400} />
            <Skill icon={<ShieldCheck size={18} />} name="Authentication" percent={75} animate={animate} delay={480} />
            <Skill icon={<LockKeyhole size={18} />} name="Authorization" percent={80} animate={animate} delay={560} />
          </div>

          {/* DOWNLOAD CV */}
          <a
            href="/cv-hani.pdf"
            download
            className="
              mt-8 inline-flex items-center justify-center gap-2 w-full text-center
              bg-primary hover:bg-primary-hover
              text-neutral-900 py-3 rounded-xl
              font-bold text-lg
              transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-200
            "
          >
            Get my CV 📄
          </a>
        </div>

        {/* CONTACT + CERTIFICATE */}
        <div className="space-y-6">
          {/* CONTACT FORM */}
          <div
            className={`bg-white p-6 rounded-2xl shadow-xl border border-yellow-100 ${
              animate ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "150ms" }}
          >
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

            <form
              onSubmit={sendEmail}
              className="space-y-4 border border-neutral-200 rounded-xl p-5 bg-neutral-50"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-yellow-200 transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-yellow-200 transition"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-yellow-200 transition"
                required
              />

              <button
                disabled={loading}
                className="
                  w-full
                  bg-primary hover:bg-primary-hover
                  text-neutral-900 py-3 rounded-xl
                  font-bold text-lg
                  transition-all duration-300
                  hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-200
                  disabled:opacity-60 disabled:hover:scale-100
                "
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center mt-2 animate-fade-in">
                  Message sent successfully ✅
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-center mt-2 animate-fade-in">
                  Something went wrong ❌
                </p>
              )}
            </form>
          </div>

          {/* CERTIFICATE */}
          <div
            className={`bg-white p-6 rounded-2xl shadow-xl border border-yellow-100 text-center ${
              animate ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <img
              src="/haaaan.png"
              alt="My Certificate"
              className="mx-auto mb-4 w-48 h-auto rounded-lg shadow-md animate-float"
            />

            <a
              href="/haaaan.png"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-primary hover:bg-primary-hover
                text-neutral-900 px-6 py-3 rounded-xl
                font-bold
                transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-yellow-200
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

/* SKILL BAR مع أيقونة */
function Skill({ icon, name, percent, animate, delay = 0 }) {
  return (
    <div
      className={animate ? "animate-fade-in-up" : "opacity-0"}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 font-medium text-neutral-800">
          <span className="text-primary-hover flex items-center justify-center w-6 h-6 rounded-md bg-yellow-50">
            {icon}
          </span>
          {name}
        </span>
        <span className="text-sm text-neutral-500">{percent}%</span>
      </div>
      <div className="w-full bg-neutral-100 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-1000 ease-out"
          style={{ width: animate ? `${percent}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};