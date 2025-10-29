import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import robotData from "../assets/RobotSaludando.json";

export default function Robot() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // 🧠 Detect screen size and scroll position
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolledToBottom = scrollY + windowHeight >= fullHeight - 300;

      if (isMobile) {
        setIsVisible(scrolledToBottom);
      } else {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // 💫 Greeting trigger for mobile (tap)
  const handleRobotClick = () => {
    if (isMobile) {
      setShowGreeting(true);
      setTimeout(() => setShowGreeting(false), 2000); // hide after 2s
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 select-none transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      onMouseEnter={() => {
        if (!isMobile) {
          setIsHovered(true);
          document.body.classList.add("robot-glow");
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
          document.body.classList.remove("robot-glow");
        }
      }}
      onClick={handleRobotClick}
      style={{
        width: isMobile ? "90px" : "130px",
        transform:
          isHovered || showGreeting ? "translateY(-8px) scale(1.1)" : "translateY(0) scale(1)",
        cursor: "pointer",
      }}
    >
      {/* 💬 Greeting bubble */}
      {(isHovered || showGreeting) && (
        <div
          className={`absolute -top-6 right-1/2 translate-x-1/2 px-3 py-1 rounded-lg text-sm shadow-md
            border border-white/20 backdrop-blur-md whitespace-nowrap transition-all duration-500
            ${isMobile ? "bg-sky-500/20 text-white" : "bg-white/10 text-sky-300"}`}
        >
          {isMobile ? "Hi there! 😊" : "Hello there 👋"}
        </div>
      )}

      {/* 🤖 Robot animation */}
      <Lottie animationData={robotData} loop autoplay />
    </div>
  );
}
