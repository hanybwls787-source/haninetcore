// app/page.js
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col gap-20">
        <Hero />
        <Projects />
        <Skills />
        <About />
      <Footer />
      </main>
    </div>
  );
}
