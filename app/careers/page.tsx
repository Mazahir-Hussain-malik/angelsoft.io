'use client';

import { Button } from "@/components/ui/button";
import { useState, MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CareerSection from "@/components/career-section";

interface Bubble {
  x: number;
  y: number;
  id: number;
  size: number;
}

interface Category {
  id: string;
  label: string;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
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

  const categories: Category[] = [
    { id: "all", label: "All" },
    { id: "game", label: "Game Character Design" },
    { id: "mobile", label: "Mobile App Development" },
    { id: "seo", label: "Search Engine Optimization" },
    { id: "social", label: "Social Media Marketing" },
    { id: "web", label: "Web Design & Development" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
  
      <div
        className="relative min-h-[65vh] flex items-center justify-center bg-gradient-to-r from-black/70 to-black/50 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
   
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/homepage/slide2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Bubbles */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ y: -50, opacity: 0, scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute rounded-full bg-white/50 pointer-events-none"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.x - bubble.size / 2,
              top: bubble.y - bubble.size / 2,
            }}
          />
        ))}

        <div className="relative z-10 text-center  rounded-md px-6 py-4">
          <h1 className="text-5xl font-bold mb-6 text-[#fff]">Careers</h1>
          <div className="flex items-center bg-white  py-3 rounded-full justify-center gap-2 text-sm text-[#2c4a6f]">
            <span className="bg-white text-[#937c39]  rounded-full">Home</span>
            <span className="text-[#264b78]">/</span>
            <span className="bg-white text-[#937c39]  rounded-full">Careers</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-[#f7f7f7] py-20 relative">
       <CareerSection />
      </main>
    </div>
  );
}
