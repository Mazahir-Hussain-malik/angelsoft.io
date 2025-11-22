"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface ServiceCardProps {
  image: string
  title: string
  description: string
  index?: number
}

const ServiceCard = ({ image, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-[#4b4b4b] rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-center -z-0"></div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-20 h-20 rounded-full bg-[#e8f0ff] flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-500">
          <div className="relative w-10 h-10">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              
              width={150}
              height={150}
              className="object-contain transition-all duration-500"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#b8975a] mb-4 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#666666] text-[15px] leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default ServiceCard
