import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  // Animate form when it appears
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yjc3v1n", // ✅ Your Service ID
        "template_qyd7ne8", // ✅ Your Template ID
        form.current,
        "mBev9XB1LYFHbqKmx" // ✅ Your Public Key
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });
  };

  return (
    <section
      id="contact"
      className={`mt-20 relative z-10 transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">
        Get in Touch
      </h3>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto space-y-4 p-8 rounded-xl border border-slate-300 dark:border-slate-800 shadow-xl
                   bg-white/70 dark:bg-slate-900/70 backdrop-blur-md
                   hover:shadow-lg transition-all duration-500 relative"
      >
        {/* ✅ Success checkmark animation */}
        {success && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 dark:bg-black/60 rounded-xl">
            <div className="flex flex-col items-center gap-2 animate-fadeIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-green-400 animate-bounce-slow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-green-400 font-semibold text-lg">Sent!</span>
            </div>
          </div>
        )}

        <div>
          <input
            name="name"
            placeholder="Your name"
            className="w-full rounded-md p-3 bg-transparent border border-slate-300 dark:border-slate-700
                       focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 focus:border-indigo-400
                       placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-800 dark:text-slate-100
                       transition-all"
            required
          />
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-md p-3 bg-transparent border border-slate-300 dark:border-slate-700
                       focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 focus:border-indigo-400
                       placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-800 dark:text-slate-100
                       transition-all"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            rows="4"
            placeholder="How can I help?"
            className="w-full rounded-md p-3 bg-transparent border border-slate-300 dark:border-slate-700
                       focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 focus:border-indigo-400
                       placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-800 dark:text-slate-100
                       transition-all"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-semibold tracking-wide 
                     shadow-md hover:shadow-indigo-400/40 active:scale-[0.98] transition-all duration-300"
        >
          ✉️ Send Message
        </button>
      </form>
    </section>
  );
}
