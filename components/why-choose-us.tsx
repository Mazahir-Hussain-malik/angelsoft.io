'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface WhyChooseItem {
  title: string
  description: string
}

const items: WhyChooseItem[] = [
  {
    title: 'High Standards',
    description: 'We produce clean, modern, high quality, user-friendly and engaging products that strengthen connections with your customers and infuses credibility into your company.'
  },
  {
    title: 'Experienced Engineers',
    description: 'Our engineers have many years of experience in their respective specialties. This ensures that the work we are doing for you is done using best practices.'
  },
  {
    title: 'Affordable Rates',
    description: 'Our goal is to reach out to as many clients as possible by offering more affordable rates than our competitors. Having experts based in Asia, we are able to make this possible.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="relative w-full py-12 md:py-20 px-4 md:px-6 lg:px-16 bg-[#f5f5f5] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-1/3 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-blue-50 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Heading */}
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                <span className="text-[#937c39]">Why You Should</span>
                <br />
                <span className="text-blue-900">Choose Us</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
                Here are just few reasons why you should choose us to develop your online presence.
              </p>
            </div>

            {/* List items */}
            <div className="space-y-4 md:space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex gap-3 md:gap-4 p-4 md:p-6 rounded-lg">
                    {/* Checkmark with hover background */}
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                        group-hover:bg-[#264b78] transition-all ease-in-out delay-150 duration-300"
                      initial={false}
                      whileHover={{ 
                        backgroundColor: '#1e3a8a',
                        scale: 1.1
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-[#264b78] transition-colors duration-300 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-2xl font-bold text-[#937c39] mb-1 md:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 md:mt-12 px-6 md:px-8 py-3 bg-[#264b78] text-white rounded-full font-semibold
                hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Get A Quote
            </motion.button>
          </motion.div>

          {/* Right side - Image Composition */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 h-[400px] md:h-[500px] mt-12 lg:mt-0">
            
            {/* Blue Arc Decoration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 md:w-40 md:h-20 border-t-[8px] border-l-[8px] border-r-[8px] border-blue-900 rounded-t-full border-b-0 z-0"
            />

            {/* Trophy Image (Background, Right) */}
            <motion.div 
              className="absolute top-8 right-0 w-[60%] h-[65%] z-10"
              initial={{ opacity: 0, x: 50, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/homepage/trophy.png"
                  alt="Award Trophy"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Laptop Image (Foreground, Left) */}
            <motion.div 
              className="absolute bottom-0 left-0 w-[65%] h-[70%] z-20"
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/homepage/laptop.png"
                  alt="Development Laptop"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Dots Pattern Left */}
            <motion.div 
              className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-2 z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
              ))}
            </motion.div>

            {/* Dots Pattern Bottom Right */}
            <motion.div 
              className="absolute right-4 -bottom-8 grid grid-cols-5 gap-2 z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
