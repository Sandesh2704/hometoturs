import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
    const text = "MEDLINEMEDIA"; // Text you want to animate
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-theme5">
      <h1 className="flex text-3xl md:text-5xl font-sans">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            animate={{
              fontWeight: [50, 700, 50],  // Breathing effect for font weight
               color: ['#FFFFFF', '#2B31B6', '#FFFFFF'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse", // Goes back and forth
              delay: index * 0.1, // Each letter animates slightly after the previous one
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}