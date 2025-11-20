'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';

interface Slide {
  image: string;
  welcomeLabel: string;
  welcomeText: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides: Slide[] = [
    {
      image: '/homepage/slide1.png',
      welcomeLabel: 'Welcome',
      welcomeText: 'We can help you grow your business',
      title: 'Focus Determines',
      subtitle: 'Your Success',
      description:
        'Let us handle the technological aspect of your business so you can focus on making profit.',
    },
    {
      image: '/homepage/slide2.png',
      welcomeLabel: 'Welcome',
      welcomeText: 'We have the solution to your problem',
      title: 'You Have Problems',
      subtitle: 'We Have Solutions',
      description:
        "Successful businesses are created with a business model around solving a problem for others. We'll help you solve your problem so you can help solve your customers' problems.",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!isClient) return null;

  const current = slides[currentSlide];

  const transition: Transition = {
    duration: 0.8,
    ease: [0.4, 0, 0.2, 1], // fixed: cubic-bezier instead of string
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition, // use the fixed transition
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 1.05,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      scale: 0.95,
      x: direction > 0 ? -100 : 100,
    }),
  };

  const arrowVariants: Variants = {
    hover: {
      scale: 1.15,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const indicatorVariants: Variants = {
    inactive: {
      width: 10,
      opacity: 0.3,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      transition: { duration: 0.3 },
    },
    active: {
      width: 32,
      opacity: 1,
      backgroundColor: '#00A9FF',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            x: { type: 'spring', stiffness: 300, damping: 30 },
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${current.image}')`,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${currentSlide}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6"
        >
          {/* Welcome Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-col items-center">
            <motion.span
              className="text-[#00A9FF] text-lg font-bold block mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {current.welcomeLabel}
            </motion.span>
            <motion.p
              className="text-white/95 text-base font-normal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              {current.welcomeText}
            </motion.p>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              className="text-7xl md:text-8xl font-black leading-tight text-white tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              {current.title}
              <br />
              {current.subtitle}
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-white/90 text-lg max-w-2xl mb-12 leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {current.description}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
