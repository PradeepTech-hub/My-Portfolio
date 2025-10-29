import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Robot from "./components/Robot"; // 👈 Make sure this file exists

export default function App() {
  useEffect(() => {
    // 🌟 Create small subtle glitter particles
    const createGlitter = (x, y) => {
      const glitter = document.createElement("div");
      glitter.className = "glitter";
      glitter.style.left = `${x}px`;
      glitter.style.top = `${y}px`;
      document.body.appendChild(glitter);

      // Remove after animation
      setTimeout(() => glitter.remove(), 1200);
    };

    const handleMove = (e) => {
      for (let i = 0; i < 3; i++) {
        const offsetX = e.clientX + Math.random() * 12 - 6;
        const offsetY = e.clientY + Math.random() * 12 - 6;
        createGlitter(offsetX, offsetY);
      }
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col bg-bgLight text-textLight 
                 dark:bg-[#0f172a] dark:text-white transition-colors duration-500
                 relative overflow-hidden"
    >
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-10 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Robot /> {/* 🤖 Robot walking/waving at the bottom */}
    </div>
  );
}
