"use client";

import { useState, useEffect } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete(); // Notify parent when loading is complete
    }, 3000); // Display for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="loader">
        <span className="loader-text">Loading</span>
        <span className="load"></span>
      </div>
      <style jsx>{`
        .loader {
          width: 80px;
          height: 50px;
          position: relative;
        }

        .loader-text {
          position: absolute;
          top: 0;
          padding: 0;
          margin: 0;
          color: #57409b;
          animation: text_713 1.5s ease both infinite;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }

        .load {
          background-color: #9a79ff;
          border-radius: 50px;
          display: block;
          height: 16px;
          width: 16px;
          bottom: 0;
          position: absolute;
          transform: translateX(64px);
          animation: loading_713 1.5s ease both infinite;
        }

        .load::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background-color: #d1c2ff;
          border-radius: inherit;
          animation: loading2_713 1.5s ease both infinite;
        }

        @keyframes text_713 {
          0% {
            letter-spacing: 1px;
            transform: translateX(0px);
          }

          40% {
            letter-spacing: 2px;
            transform: translateX(26px);
          }

          80% {
            letter-spacing: 1px;
            transform: translateX(32px);
          }

          90% {
            letter-spacing: 2px;
            transform: translateX(0px);
          }

          100% {
            letter-spacing: 1px;
            transform: translateX(0px);
          }
        }

        @keyframes loading_713 {
          0% {
            width: 16px;
            transform: translateX(0px);
          }

          40% {
            width: 100%;
            transform: translateX(0px);
          }

          80% {
            width: 16px;
            transform: translateX(64px);
          }

          90% {
            width: 100%;
            transform: translateX(0px);
          }

          100% {
            width: 16px;
            transform: translateX(0px);
          }
        }

        @keyframes loading2_713 {
          0% {
            transform: translateX(0px);
            width: 16px;
          }

          40% {
            transform: translateX(0%);
            width: 80%;
          }

          80% {
            width: 100%;
            transform: translateX(0px);
          }

          90% {
            width: 80%;
            transform: translateX(15px);
          }

          100% {
            transform: translateX(0px);
            width: 16px;
          }
        }
      `}</style>
    </div>
  );
}
