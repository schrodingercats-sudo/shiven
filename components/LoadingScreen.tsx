import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Trigger completion after animation duration (approx 2.5s drawing + 0.5s fade)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="relative w-64 h-32 md:w-96 md:h-48 flex items-center justify-center">
            <svg
              viewBox="0 0 400 150"
              className="w-full h-full"
            >
              {/* 
                Simulated Handwriting Effect using stroke-dasharray on text 
                Since we can't easily generate complex single-stroke paths dynamically without a library,
                we use a cursive font and animate the stroke to mimic the effect closely.
              */}
              <motion.text
                x="50%"
                y="65%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-cursive text-8xl md:text-9xl"
                fill="transparent"
                stroke="#000000"
                strokeWidth="1.5"
                initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                hello
              </motion.text>

              {/* Fade in fill after stroke completes */}
              <motion.text
                x="50%"
                y="65%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-cursive text-8xl md:text-9xl"
                fill="#000000"
                stroke="transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                hello
              </motion.text>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};