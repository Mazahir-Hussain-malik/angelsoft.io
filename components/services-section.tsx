"use client";

import { motion } from "framer-motion";
import { ServicesCard } from "./services-card";
import Image from "next/image";
const services = [
  {
    id: 1,
    icon: "💻",
    title: "Web Design & Development",
    description:
      "We design and develop clean, modern, engaging and search engine-friendly websites using popular CMS like WordPress, etc.",
  },
  {
    id: 2,
    icon: "🏪",
    title: "E-commerce Development",
    description:
      "We develop online stores using today's most popular platforms like BigCommerce, WooCommerce, Magento and Shopify.",
  },
  {
    id: 3,
    icon: "📱",
    title: "Mobile App Development",
    description:
      "We create high quality and high performance mobile apps using today's most popular technologies such as React Native and Flutter.",
  },
  {
    id: 4,
    icon: "🎨",
    title: "UI/UX Design & Branding",
    description:
      "We create beautiful and engaging UI/UX designs and branding that provide better user experience and deliver tangible business results.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative px-4 py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <div className=" animate-bounce-vertical inline-block px-6 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8">
              <span className="text-sm font-medium text-[#264b78]">
                Our Services
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl max-w-4xl  mx-auto md:text-5xl lg:text-6xl font-bold text-[#9b8b47] mb-8 leading-tight"
          >
            We offer practical and cost-effective solutions.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#6b7280] max-w-3xl mx-auto leading-relaxed"
          >
            Angelsoft Solutions offers a wide range of IT services from UI/UX
            design, web and mobile applications development, staff augmentation,
            back-office support, and cloud hosting/deployment services.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServicesCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute top-0 animate-bg-float-1">
        <Image
          src="/homepage/svg1.svg"
          width={400}
          height={400}
          alt="Background animate-bg-wave-slow"
        />
      </div>
      {/* <div className="absolute top-0 animate-bg-wave-slow ">
  <Image src="/homepage/svg1.svg" width={400} height={400} alt="Background rotate-45 decoration 1" />
</div>
<div className="absolute top-0 animate-bg-wave-fast ">
  <Image src="/homepage/svg2.svg" width={400} height={400} alt="Background rotate-90 decoration 2" />
</div> */}
    </section>
  );
}
