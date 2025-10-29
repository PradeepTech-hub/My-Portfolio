import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction → hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Highlight active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div
          className="flex items-center justify-between p-3 rounded-2xl 
                     bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl
                     border border-slate-200 dark:border-slate-800
                     shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Logo Section */}
          <div className="flex items-center gap-3 select-none">
            <div
              className="h-10 w-10 rounded-full bg-gradient-to-r 
                         from-sky-400 to-purple-500 flex items-center justify-center 
                         font-bold text-white text-lg shadow-md"
            >
              PM
            </div>
            <div className="hidden sm:block leading-tight">
              <h1 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                Pradeep M
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Software Enthusiast
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-sky-500 dark:text-sky-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1DncUL0xko5ROa4AV31TI1TPOIFpF-WcC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-gradient-to-r from-sky-400 to-purple-500 
                         text-white font-semibold shadow-sm hover:shadow-md hover:scale-105 
                         transition-all duration-300"
            >
              Resume
            </a>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md bg-white/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 hover:scale-105 transition-all"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 
                       backdrop-blur-xl border border-slate-200 dark:border-slate-800 
                       shadow-md space-y-3 text-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-sky-500 dark:text-sky-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1DncUL0xko5ROa4AV31TI1TPOIFpF-WcC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-3 py-1.5 rounded-md 
                         bg-gradient-to-r from-sky-400 to-purple-500 
                         text-white font-semibold hover:scale-105 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
