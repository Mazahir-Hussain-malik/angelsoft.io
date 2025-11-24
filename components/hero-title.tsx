"use client";
import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import Image from "next/image";
import React from "react";

interface HeroTitleProps {
  title: string;
  leftText: string;
  rightText: string;
}

interface Bubble {
  x: number;
  y: number;
  id: number;
  size: number;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  title,
  leftText,
  rightText,
}) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const newBubble: Bubble = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      id: Date.now(),
      size: Math.random() * 20 + 10,
    };
    setBubbles((prev) => [...prev, newBubble]);

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 2000);
  };

  return (
    <div
      className="relative w-full sm:min-h-[65vh] h-[40vh]  flex items-end justify-center bg-gradient-to-r from-black/70 to-black/50 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{
          scale: 1.4,
          x: [-40, 40],
          y: [-20, 20],
        }}
        transition={{
          scale: { duration: 10, ease: "easeOut" },
          x: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          },
          y: {
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url(/homepage/slide2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ y: -50, opacity: 0, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute rounded-full bg-white/50 pointer-events-none"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.x - bubble.size / 2,
            top: bubble.y - bubble.size / 2,
          }}
        />
      ))}
    
      
      {/* Text */}
      <div className="relative z-10 text-center rounded-md px-6 py-4 mb-16">
        <h1 className="sm:text-[58px] text-[40px] font-extrabold mb-3 text-white">{title}</h1>

        <div className="flex items-center bg-white sm:w-auto w-[200px] py-1 rounded-full justify-center gap-2 text-sm text-[#2c4a6f]">
          <span className="bg-white text-[#937c39]/80 font-bold px-1 py-2 rounded-full">
            {leftText}
          </span>
          <span className="text-[#264b78]">/</span>
          <span className="bg-white text-[#937c39]/80 font-bold px-1 py-2 rounded-full">
            {rightText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
