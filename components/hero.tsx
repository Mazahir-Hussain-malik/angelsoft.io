"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";




interface Slide {
  image: string;
  welcomeLabel: string;
  welcomeText: string;
  title: string;
  subtitle: string;
  description: string;
  alignment: "left" | "center" | "right";
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      image: "/homepage/slide1.png",
      welcomeLabel: "Welcome!",
      welcomeText: "We can turn your ideas into reality",
      title: "We Make Ideas",
      subtitle: "Happen",
      description:
        "An idea can only become a reality once it is broken down into organized, actionable elements. Contact us today so we can help you bring your ideas to life.",
      alignment: "left",
    },
    {
      image: "/homepage/slide2.png",
      welcomeLabel: "Welcome!",
      welcomeText: "We have the solution to your problem",
      title: "You Have Problems",
      subtitle: "We Have Solutions",
      description:
        "Successful businesses are created with a business model around solving a problem for others. We'll help you solve your problem so you can help solve your customers' problems.",
      alignment: "center",
    },
    {
      image: "/homepage/slide3.png",
      welcomeLabel: "Welcome!",
      welcomeText: "We can help you grow your business",
      title: "Focus Determines",
      subtitle: "Your Success",
      description:
        "Let us handle the technological aspect of your business so you can focus on making profit.",
      alignment: "center",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[currentSlide];

  const getContentAlignment = () => {
    if (current.alignment === "left") {
      return "items-start text-left";
    }
    return "items-center text-center";
  };

  const getButtonsAlignment = () => {
    if (current.alignment === "left") {
      return "justify-start";
    }
    return "justify-center";
  };

  return (
    <section className="relative w-full  overflow-hidden">
      
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{
            opacity: 1,
            scale: 1.4,
            x: [-30, 30],
            y: [-10, 10],
          }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 8, ease: "easeOut" },
            x: {
              duration: 18,
              ease: "linear",
              repeat: Infinity,
              repeatType: "mirror",
            },
            y: {
              duration: 24,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat mobile-bg-fix"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url('${current.image}')`,
              transform: "translate3d(0,0,0)",
              willChange: "transform",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 isolate container mx-auto px-6 md:px-12 lg:px-24 h-[60vh] sm:min-h-[calc(140vh-80px)] flex items-center sm:py-20 pb-20 pt-6 md:mt-0 my-[2rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`w-full flex flex-col ${getContentAlignment()} max-w-7xl mx-auto`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <span className="text-[#4A90E2] font-bold text-md ">
                {current.welcomeLabel}
              </span>
              <span className="text-white/90 font-bold text-md ml-2">
                {current.welcomeText}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-6xl lg:text-4xl xl:text-6xl font-black text-white mb-6 leading-[1.1]"
            >
              {current.title}
              <br />
              {current.subtitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`text-white text-base md:text-lg leading-relaxed mb-10 ${
                current.alignment === "left" ? "max-w-2xl" : "max-w-3xl"
              }`}
            >
              {current.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={`flex gap-4 mt-[-2rem] flex-wrap ${getButtonsAlignment()}`}
            >
              <button className="bg-[#264b78] text-white px-4 md:px-10 py-2 md:py-4 rounded-full text-xs sm:text-base font-semibold hover:bg-[#264b78d7] transition-all duration-300 hover:shadow-lg hover:scale-105">
                Get Started
              </button>
              <button className="bg-white text-[#8B6E3C] px-4 md:px-10 py-2 md:py-4 rounded-full text-xs sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm hidden sm:flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm hidden sm:flex items-center justify-center hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>
    </section>
  );
}
