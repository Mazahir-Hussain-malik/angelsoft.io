'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface ServicesCardProps {
  service: {
    id: number
    icon: string
    title: string
    description: string
  }
  index: number
}

export function ServicesCard({ service, index }: ServicesCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Background images for each service - will show on hover with dark overlay
  const backgroundImages: Record<number, string> = {
    1: 'linear-gradient(rgba(0 ,0 ,0 ,0.3) , rgba(0 ,0 ,0 ,0.3)),url("/homepage/costEffective.png")',
    2: 'linear-gradient(rgba(0 ,0 ,0 ,0.3) , rgba(0 ,0 ,0 ,0.3)),url("/homepage/goalOriented.png")',
    3: 'linear-gradient(rgba(0 ,0 ,0 ,0.3) , rgba(0 ,0 ,0 ,0.3)),url("/homepage/qualitydriven.png")',
    4: 'linear-gradient(rgba(0 ,0 ,0 ,0.3) , rgba(0 ,0 ,0 ,0.3)),url("/homepage/strongsygenry.png")',
  }

  const icons: Record<string, ReactNode> = {
    '💻': <LaptopIcon />,
    '🏪': <ShopIcon />,
    '📱': <PhoneIcon />,
    '🎨': <PaletteIcon />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full rounded-lg overflow-hidden group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: backgroundImages[service.id],
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.6 : 0,
        }}
      />

      <div
        className="absolute  inset-0 border-2 rounded-lg transition-opacity duration-500"
        style={{
          borderStyle: 'dashed',
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content container */}
      <div
        className="relative  bg-white rounded-lg p-3  transition-all duration-500 h-full flex flex-col"
        style={{
          backgroundColor: isHovered ? 'transparent' : 'white',
          backdropFilter: isHovered ? 'blur(0px)' : 'none',
        }}
      >
        <div className='  border-2 border-dashed border-white p-8'>
        {/* Icon Container */}
        <div className="mb-6">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: isHovered ? 'rgba(100, 150, 200, 0.3)' : '#f0f9ff',
            }}
          >
            <div className="text-2xl transition-all duration-500" style={{
              color: isHovered ? '#90CAF9' : '#003366',
              filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
            }}>
              {icons[service.icon]}
            </div>
          </motion.div>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold mb-4 transition-colors duration-500"
          style={{
            color: isHovered ? 'white' : '#9b8b47',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6 flex-grow transition-colors duration-500"
          style={{
            color: isHovered ? 'rgba(255, 255, 255, 0.85)' : '#6b7280',
          }}
        >
          {service.description}
        </p>

        {/* Read More Link with Bounce Animation */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <button
            className="font-semibold text-sm transition-colors duration-500 cursor-pointer"
            style={{
              color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#9b8b47',
            }}
          >
            Read more
          </button>
        </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Icon Components - Blue color #003366
function LaptopIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M2 17h20" />
      <path d="M6 21h12" />
    </svg>
  )
}

function ShopIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l1.65 9.9a2 2 0 0 0 2 1.6h10.7a2 2 0 0 0 2-1.6L20 9" />
      <path d="M3 9h18" />
      <path d="M7 3h10" />
      <circle cx="9" cy="3" r="0.5" />
      <circle cx="15" cy="3" r="0.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function PaletteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="8" r="2" fill="currentColor" />
      <circle cx="16" cy="14" r="2" fill="currentColor" />
      <circle cx="8" cy="14" r="2" fill="currentColor" />
      <circle cx="12" cy="16" r="2" fill="currentColor" />
    </svg>
  )
}
