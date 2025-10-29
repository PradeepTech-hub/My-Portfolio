import React from "react";

const projects = [
  {
    id: 1,
    title: "Prescripto",
    desc: "Prescripto is a modern healthcare appointment management system that simplifies booking, tracking, and managing doctor consultations. It allows patients to schedule appointments online, receive digital prescriptions, and stay connected with healthcare professionals through a secure and user-friendly interface.",
    tags: ["React", "MongoDB", "Tailwind"],
  },
  {
    id: 2,
    title: "Fire Detection System",
    desc: "The Fire Detection System is an IoT-based safety project that uses an IR sensor with an ESP32 microcontroller to detect fire or heat sources. When a fire is detected, the system instantly sends an automated email alert to the user through a webhook integration. This project provides a reliable and affordable early warning solution for homes, offices, and industrial environments.",
    tags: ["IoTProject", "Automation", "C++"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-20 px-6 md:px-10 lg:px-20">
      <h3 className="text-3xl font-bold text-slate-800 dark:text-white text-center">
        Selected Projects
      </h3>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="relative group rounded-2xl p-6 bg-white/60 dark:bg-slate-800/60
                       backdrop-blur-xl border border-slate-200 dark:border-slate-700
                       shadow-lg hover:shadow-sky-400/30 dark:hover:shadow-sky-500/20
                       transition-all duration-500 hover:-translate-y-1"
          >
            <div className="flex flex-col h-full justify-between">
              {/* Project Title */}
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors duration-300">
                {p.title}
              </h4>

              {/* Project Description */}
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1 rounded-full 
                               bg-gradient-to-r from-sky-400/20 to-purple-400/20
                               text-sky-600 dark:text-sky-300 border border-sky-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Optional Buttons */}
              {/* 
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 
                             text-white font-semibold shadow hover:shadow-lg hover:scale-105 
                             transition-all duration-300"
                >
                  Live
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm rounded-lg border border-slate-400 dark:border-slate-600 
                             text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 
                             dark:hover:bg-white/10 transition-all duration-300"
                >
                  Source
                </a>
              </div>
              */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
