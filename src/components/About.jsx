import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

export default function About() {
  const technologies = [
    { name: "React.js", icon: <FaReact className="text-sky-400 text-3xl sm:text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl sm:text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500 text-3xl sm:text-4xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-3xl sm:text-4xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl sm:text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl sm:text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl sm:text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400 text-3xl sm:text-4xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-3xl sm:text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl sm:text-4xl" /> },
  ];

  const mid = Math.ceil(technologies.length / 2);
  const topRow = technologies.slice(0, mid);
  const bottomRow = technologies.slice(mid);
  const topRowLoop = [...topRow, ...topRow];
  const bottomRowLoop = [...bottomRow, ...bottomRow];

  return (
    <section id="about" className="mt-20 text-slate-800 dark:text-slate-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-8">
        <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
          About Me
        </h3>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto text-center text-sm sm:text-base">
          I'm a full-stack developer passionate about crafting clean, efficient, and responsive
          web applications using modern tools and frameworks. I completed my{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            BCA at JSS Science and Technology University, Mysuru
          </span>{" "}
          and I'm currently pursuing my{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            MCA at RV College of Engineering (RVCE), Bengaluru
          </span>.
          <br />
          <br />
          I enjoy designing and developing intuitive digital experiences while continuously learning
          new technologies. I’m skilled in teamwork, problem-solving, and collaboration, and love
          turning creative ideas into user-friendly and impactful web solutions.
        </p>

        <div className="mt-12 text-center overflow-hidden">
          <h4 className="text-xl font-semibold mb-8 text-slate-900 dark:text-white">
            Technologies I Use
          </h4>

          {/* Top row */}
          <div className="relative w-full overflow-hidden">
            <div className="flex whitespace-nowrap animate-scrollLeft">
              {topRowLoop.map((tech, i) => (
                <div
                  key={`top-${i}`}
                  className="w-28 sm:w-36 flex-shrink-0 mx-3 sm:mx-4 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700
                             bg-white/70 dark:bg-slate-800/70 shadow-md hover:scale-105 transition-transform duration-300
                             flex flex-col items-center justify-center text-center"
                >
                  {tech.icon}
                  <p className="mt-2 sm:mt-3 font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row (increased top margin) */}
          <div className="relative w-full overflow-hidden mt-10 sm:mt-12">
            <div className="flex whitespace-nowrap animate-scrollRight">
              {bottomRowLoop.map((tech, i) => (
                <div
                  key={`bottom-${i}`}
                  className="w-28 sm:w-36 flex-shrink-0 mx-3 sm:mx-4 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700
                             bg-white/70 dark:bg-slate-800/70 shadow-md hover:scale-105 transition-transform duration-300
                             flex flex-col items-center justify-center text-center"
                >
                  {tech.icon}
                  <p className="mt-2 sm:mt-3 font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
