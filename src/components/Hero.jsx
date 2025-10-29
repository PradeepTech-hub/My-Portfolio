import React from "react";
import { motion } from "framer-motion";
import myPic from '../assets/profile.png'; 
export default function Hero() {
  return (
    <section
      id="hero"
      className="mt-24  grid grid-cols-1 md:grid-cols-2 gap-10 items-center 
                 text-slate-800 dark:text-slate-200 transition-colors duration-500
                 relative overflow-hidden"
    >
      {/* Subtle gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/60 dark:via-slate-900/60 to-transparent pointer-events-none"></div>

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 relative z-10"
      >
        <h2 className="text-4xl  sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
            Pradeep M
          </span>
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed">
          I create engaging and accessible web experiences with a focus on modern development and creative design. I love transforming ideas into sleek, user-friendly digital products.{" "}
        
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-purple-500 
                       text-white font-semibold shadow-lg hover:scale-105 
                       active:scale-95 transition-all duration-300"
          >
            See my work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-400 dark:border-slate-700 
                       text-slate-700 dark:text-slate-200 hover:bg-slate-100/40 
                       dark:hover:bg-white/5 transition-all duration-300"
          >
            Contact me
          </a>
        </div>

        {/* Info Line */}
        <div className="mt-8 flex flex-wrap gap-4 items-center ml-3 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 animate-pulse"></div>
            <span>MCA Student at RVCE</span>
          </div>
          <div className="flex items-center gap-2 opacity-70">
            <span>•</span>
            <span>Bangalore, Karnataka</span>
          </div>
        </div>
      </motion.div>

      {/* Right Section - Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center md:justify-end relative z-10"
      >
        <div
          className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl 
                     border border-slate-300 dark:border-slate-800 
                     bg-white/70 dark:bg-slate-800/50 backdrop-blur-md
                     transition-all duration-500 hover:shadow-sky-200/50 
                     dark:hover:shadow-sky-500/20 hover:scale-[1.02]"
        >
          <img src={myPic} alt="Profile"
            className="w-full h-auto rounded-3xl object-cover object-top 
                       transition-transform duration-700 hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
}
