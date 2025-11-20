'use client';

import { useState, MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CareerSection from "@/components/career-section";
import HeroTitle from "@/components/hero-title";

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
  
       <HeroTitle
  title="Careers"
  leftText="Home"
  rightText="careers"
/>

      {/* Main Content */}
      <main className="flex-1 bg-[#f7f7f7] py-20 relative">
       <CareerSection />
      </main>
    </div>
  );
}
