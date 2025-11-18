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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
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
                <span className="text-amber-600">Why You Should</span>
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
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                        bg-gray-100 transition-all duration-300"
                      initial={false}
                      whileHover={{ 
                        backgroundColor: '#1e3a8a',
                        scale: 1.1
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-amber-600 transition-colors duration-300 group-hover:text-white"
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

                    {/* Content - no hover effects on list item */}
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-amber-600 mb-1 md:mb-2">
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
              className="mt-8 md:mt-12 px-6 md:px-8 py-3 bg-blue-900 text-white rounded-full font-semibold
                hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Get A Quote
            </motion.button>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full hidden lg:flex justify-center items-center"
            style={{ minHeight: '400px', maxHeight: '500px' }}
          >
            {/* Decorative circle - top right */}
            <div className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 border-4 md:border-8 border-blue-900 rounded-full opacity-40 z-10" />

            {/* Main container for layered images */}
            <motion.div 
              className="relative w-full h-full flex justify-center items-center px-4"
              whileHover="hover"
            >
              {/* Laptop image - left/center with higher z-index */}
              <motion.div className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 z-30">
                <Image
                  src="/homepage/laptop.png"
                  alt="Laptop with development code"
                  width={280}
                  height={320}
                  className="rounded-2xl shadow-2xl object-cover w-auto h-auto max-w-xs"
                />
              </motion.div>

              {/* Trophy image - right/center with lower z-index for overlap */}
              <motion.div className="absolute right-0 md:right-4 top-1/3 z-20">
                <Image
                  src="/homepage/trophy.png"
                  alt="Trophy award"
                  width={240}
                  height={340}
                  className="rounded-2xl shadow-2xl object-cover w-auto h-auto max-w-xs"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rounded-2xl pointer-events-none"
                initial={{ x: '-100%' }}
                variants={{
                  hover: {
                    x: '100%',
                    opacity: [0, 0.5, 0],
                    transition: {
                      duration: 0.8,
                      ease: 'easeInOut'
                    }
                  }
                }}
              />

              {/* Decorative dots - bottom left */}
              <div className="absolute -bottom-8 md:-bottom-12 left-4 md:left-0 flex gap-2 pointer-events-none">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              </div>

              {/* Decorative dots - top right */}
              <div className="absolute -top-8 md:-top-12 right-4 md:right-0 grid grid-cols-3 gap-2 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-300 rounded-full opacity-70" />
                ))}
              </div>
            </motion.div>

            {/* Decorative blue glow - bottom right */}
            <div className="absolute -bottom-8 -right-8 w-32 md:w-40 h-32 md:h-40 bg-blue-900 rounded-full opacity-5 blur-3xl pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:hidden relative w-full flex flex-col gap-6"
          >
            <div className="flex gap-4 justify-center items-start mx-auto max-w-sm">
              <Image
                src="/homepage/laptop.png"
                alt="Laptop with development code"
                width={200}
                height={240}
                className="rounded-2xl shadow-lg object-cover w-auto h-auto"
              />
              <Image
                src="/homepage/trophy.png"
                alt="Trophy award"
                width={160}
                height={240}
                className="rounded-2xl shadow-lg object-cover w-auto h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
