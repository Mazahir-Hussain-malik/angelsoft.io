"use client"

import { useState, useEffect } from "react"
import ServiceCard from "@/components/servicecard"
import { motion, AnimatePresence } from "framer-motion"
import HeroTitle from "@/components/hero-title"
import  Button  from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { FaLaptop } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa6";


const ServicesPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    {
      image: <FaLaptop />,
      title: "Web Design & Development",
      description:
        "We design and develop modern, clean, engaging, user-friendly and SEO-friendly websites using popular CMS like WordPress, Joomla, Drupal, and Umbraco. We also develop custom websites and REST APIs.",
    },
    {
      image: <FaStore />,
      title: "E-commerce Development",
      description:
        "We develop online stores using today's most popular platforms like BigCommerce, WooCommerce, Magento, Shopify and Prestashop. We also develop custom e-commerce sites and apps.",
    },
    {
      image: <FaMobileScreenButton />,
      title: "Mobile App Development",
      description:
        "We develop high quality and high performance mobile apps using today's most popular technologies such as React Native and Flutter. We can also deploy your apps to the app stores.",
    },
    {
      image: <FaCubes />,
      title: "Corporation Branding",
      description:
        "We conceptualize strategies that effectively promote your brand. We can design your brand's logo, letterhead, and calling cards. We can also help you outline your company values, mission and vision.",
    },
    {
      image: <FaPeopleGroup />,
      title: "Recruitment Outsourcing",
      description:
        "Reduce costs by letting us handle your recruitment process. Our recruitment team has broad connections and technical knowledge to find the perfect candidates for your requirement.",
    },
    {
      image: <FaPersonCirclePlus />,
      title: "Staff Augmentation",
      description:
        "Looking for temporary staff to quickly fill short-term job positions within your company? We have a pool of developers who are skilled and experienced in today's most popular technologies.",
    },
    {
      image: <FaPersonCirclePlus />,
      title: "UI/UX Design",
      description:
        "We create beautiful and engaging UI/UX designs that provide better experience to your users, and deliver tangible business results.",
    },
    {
      image: <FaPalette />,
      title: "Business Planning",
      description:
        "We provide business planning services by helping you define your business goals, conducting market research, identifying resources, and developing strategies.",
    },
    {
      image: <FaLightbulb />,
      title: "Enterprise Analysis",
      description:
        "We can help you identify business opportunities, develop and maintain a business architecture, and determine optimum project investments.",
    },
    {
      image: <FaChartLine />,
      title: "Translation Services",
      description:
        "We can translate from English to Chinese, Russian, Spanish, Romanian, Portuguese, Filipino, Korean, Japanese and vice versa.",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#f2f2f2] relative overflow-hidden">
        {/* Hero Section */}
        <HeroTitle title="Services" leftText="Home" rightText="Services" />

        {/* Services Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex justify-center mb-16">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Button text={"Our Services"} />
              </motion.div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-[8rem]">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  index={index}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10 pointer-events-none"></div>
        <div className="fixed top-1/2 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10 pointer-events-none"></div>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 p-3 bg-white border-2 border-[#1e3a8a] rounded-full shadow-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="relative w-6 h-6">
                {/* Using a simple SVG or Icon to match the circle arrow in the image */}
                <div className="absolute inset-0 border-2 border-[#1e3a8a] rounded-full border-t-transparent animate-spin opacity-0 group-hover:opacity-100"></div>
                <ArrowUp className="w-6 h-6 text-[#1e3a8a]" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default ServicesPage
