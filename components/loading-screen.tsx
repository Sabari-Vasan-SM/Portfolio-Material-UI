"use client";

import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  return (
    <StyledWrapper>
      <div>
        <div className="loader">
          <span>
            <span />
            <span />
            <span />
            <span />
          </span>
          <div className="base">
            <span />
            <div className="face" />
          </div>
        </div>
        <div className="longfazers">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    position: absolute;
    top: 50%;
    margin-left: -50px;
    left: 50%;
    animation: speeder 0.4s linear infinite;
  }
  .loader > span {
    height: 5px;
    width: 35px;
    background: #8b5cf6;
    position: absolute;
    top: -19px;
    left: 60px;
    border-radius: 2px 10px 1px 0;
  }
  .base span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid #8b5cf6;
    border-bottom: 6px solid transparent;
  }
  .base span:before {
    content: "";
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: #8b5cf6;
    position: absolute;
    right: -110px;
    top: -16px;
  }
  .base span:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-right: 55px solid #8b5cf6;
    border-bottom: 16px solid transparent;
    top: -16px;
    right: -98px;
  }
  .face {
    position: absolute;
    height: 12px;
    width: 20px;
    background: #8b5cf6;
    border-radius: 20px 20px 0 0;
    transform: rotate(-40deg);
    right: -125px;
    top: -15px;
  }
  .face:after {
    content: "";
    height: 12px;
    width: 12px;
    background: #8b5cf6;
    right: 4px;
    top: 7px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
    border-radius: 0 0 0 2px;
  }
  .loader > span > span:nth-child(1),
  .loader > span > span:nth-child(2),
  .loader > span > span:nth-child(3),
  .loader > span > span:nth-child(4) {
    width: 30px;
    height: 1px;
    background: #ec4899;
    position: absolute;
    animation: fazer1 0.2s linear infinite;
  }
  .loader > span > span:nth-child(2) {
    top: 3px;
    animation: fazer2 0.4s linear infinite;
  }
  .loader > span > span:nth-child(3) {
    top: 1px;
    animation: fazer3 0.4s linear infinite;
    animation-delay: -1s;
  }
  .loader > span > span:nth-child(4) {
    top: 4px;
    animation: fazer4 1s linear infinite;
    animation-delay: -1s;
  }
  @keyframes fazer1 {
    0% {
      left: 0;
    }
    100% {
      left: -80px;
      opacity: 0;
    }
  }
  @keyframes fazer2 {
    0% {
      left: 0;
    }
    100% {
      left: -100px;
      opacity: 0;
    }
  }
  @keyframes fazer3 {
    0% {
      left: 0;
    }
    100% {
      left: -50px;
      opacity: 0;
    }
  }
  @keyframes fazer4 {
    0% {
      left: 0;
    }
    100% {
      left: -150px;
      opacity: 0;
    }
  }
  @keyframes speeder {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -3px) rotate(-1deg);
    }
    20% {
      transform: translate(-2px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 3px) rotate(-1deg);
    }
    60% {
      transform: translate(-1px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-2px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
  .longfazers span {
    position: absolute;
    height: 2px;
    width: 20%;
    background: #06b6d4;
  }
  @keyframes lf {
    0% {
      left: 200%;
    }
    100% {
      left: -200%;
      opacity: 0;
    }
  }
`;

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [showLoader, setShowLoader] = useState(true);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [showGreetings, setShowGreetings] = useState(false);

  const greetings = ["Hello", "வணக்கம்", "नमस्ते", "Hola", "Bonjour", "Hallo", "こんにちは"];

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setShowGreetings(true);
    }, 1500);

    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    if (!showGreetings) return;

    if (currentGreetingIndex < greetings.length) {
      const greetingTimer = setTimeout(() => {
        setCurrentGreetingIndex((prev) => prev + 1);
      }, 800);

      return () => clearTimeout(greetingTimer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 300);

      return () => clearTimeout(completeTimer);
    }
  }, [showGreetings, currentGreetingIndex, greetings.length, onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-50">
      
      {/* 🔮 Floating Orbs */}
      <div className="orb orb-purple"></div>
      <div className="orb orb-pink"></div>
      <div className="orb orb-cyan"></div>

      {/* ✨ Gradient Lines */}
      <div className="gradient-line top-line"></div>
      <div className="gradient-line bottom-line"></div>

      {/* 🌟 Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <span key={i} className="particle"></span>
      ))}

      <div className="relative z-20">
        <AnimatePresence mode="wait">
          {showLoader && (
            <motion.div
              key="loader"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Loader />
              <div className="absolute top-full mt-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium animate-pulse">
                  Loading...
                </p>
              </div>
            </motion.div>
          )}

          {showGreetings && currentGreetingIndex < greetings.length && (
            <motion.div
              key={`greeting-${currentGreetingIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent whitespace-nowrap px-4">
                {greetings[currentGreetingIndex]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* === CSS for Background Effects === */}
      <style jsx global>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.45;
          animation: floatOrb 10s ease-in-out infinite alternate;
        }
        .orb-purple {
          width: 250px;
          height: 250px;
          background: #a855f7;
          top: 10%;
          left: 15%;
        }
        .orb-pink {
          width: 200px;
          height: 200px;
          background: #ec4899;
          bottom: 15%;
          right: 10%;
          animation-delay: 1.5s;
        }
        .orb-cyan {
          width: 180px;
          height: 180px;
          background: #06b6d4;
          top: 40%;
          right: 30%;
          animation-delay: 2.3s;
        }
        @keyframes floatOrb {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(-40px) translateX(30px); }
        }

        .gradient-line {
          position: absolute;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #a855f7, #ec4899, #06b6d4);
          opacity: 0.6;
          animation: moveLine 5s linear infinite;
        }
        .top-line { top: 0; }
        .bottom-line { bottom: 0; }
        @keyframes moveLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: floatUp 4s linear infinite;
          filter: blur(1px);
        }
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0.9; }
          100% { transform: translateY(-120px); opacity: 0; }
        }

        /* Particle random positions */
        .particle:nth-child(1) { left: 10%; bottom: 5%; animation-duration: 3.5s; }
        .particle:nth-child(2) { left: 25%; bottom: 10%; }
        .particle:nth-child(3) { left: 40%; bottom: 8%; animation-duration: 5s; }
        .particle:nth-child(4) { left: 55%; bottom: 12%; animation-duration: 4s; }
        .particle:nth-child(5) { left: 70%; bottom: 6%; }
        .particle:nth-child(6) { left: 85%; bottom: 15%; animation-duration: 6s; }
        .particle:nth-child(7) { left: 20%; bottom: 20%; }
        .particle:nth-child(8) { left: 35%; bottom: 5%; animation-duration: 3s; }
        .particle:nth-child(9) { left: 50%; bottom: 18%; }
        .particle:nth-child(10) { left: 65%; bottom: 8%; animation-duration: 4.8s; }
        .particle:nth-child(11) { left: 80%; bottom: 25%; }
        .particle:nth-child(12) { left: 90%; bottom: 3%; animation-duration: 3.8s; }
      `}</style>
    </div>
  );
}
