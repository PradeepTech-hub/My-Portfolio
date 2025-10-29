import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Check saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-full border border-slate-300 dark:border-slate-700
                 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md
                 hover:bg-slate-100 dark:hover:bg-slate-700/80
                 shadow-sm hover:shadow-md active:scale-95
                 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun
          size={20}
          className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.4)] transition-all"
        />
      ) : (
        <Moon
          size={20}
          className="text-indigo-600 drop-shadow-[0_0_6px_rgba(79,70,229,0.4)] transition-all"
        />
      )}
    </button>
  );
}
