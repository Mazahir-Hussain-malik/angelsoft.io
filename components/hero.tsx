'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides = [
    {
      image: '/homepage/slide1.png',
      welcomeLabel: 'Welcome',
      welcomeText: 'We can help you grow your business',
      title: 'Focus Determines',
      subtitle: 'Your Success',
      description: 'Let us handle the technological aspect of your business so you can focus on making profit.',
    },
    {
      image: '/homepage/slide2.png',
      welcomeLabel: 'Welcome',
      welcomeText: 'We have the solution to your problem',
      title: 'You Have Problems',
      subtitle: 'We Have Solutions',
      description: 'Successful businesses are created with a business model around solving a problem for others. We\'ll help you solve your problem so you can help solve your customers\' problems.',
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

  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5 },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const arrowVariants = {
    hover: {
      scale: 1.15,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const indicatorVariants = {
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
    <section className="relative w-full h-screen overflow-hidden ">
      {/* Background Image with Slide Transition */}
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
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: ` linear-gradient(rgba(0 ,0 ,0 , 0.5) , rgba(0, 0, 0, 0.5)) , url('${current.image}')`,
          }}
        >
          {/* Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content with Staggered Animations */}
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
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-col items-center"
          >
            <motion.span
              className="text-[#00A9FF] text-lg font-bold block mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {current.welcomeLabel}
            </motion.span>
            <motion.p
              className="text-white/95 text-base font-normal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {current.welcomeText}
            </motion.p>
          </motion.div>

          {/* Main Heading with Line-by-Line Animation */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.h1
              className="text-7xl md:text-8xl font-black leading-tight text-white tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
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
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {current.description}
          </motion.p>

          {/* CTA Buttons with Stagger */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="px-8 py-3 bg-[#2C5282] text-white rounded-full font-semibold text-base transition-all duration-300"
              whileHover={{
                scale: 1.08,
                boxShadow: '0 20px 40px rgba(44, 82, 130, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-white text-[#D4AF37] rounded-full font-semibold text-base transition-all duration-300"
              whileHover={{
                scale: 1.08,
                boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow with Hover Animation */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 group"
        variants={arrowVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      {/* Right Arrow with Hover Animation */}
      <motion.button
        onClick={nextSlide}
        className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 group"
        variants={arrowVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Slide Indicators with Smooth Animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="h-2.5 rounded-full cursor-pointer"
            animate={currentSlide === index ? 'active' : 'inactive'}
            variants={indicatorVariants}
          />
        ))}

      </motion.div>
     

    </section>
  );
}
