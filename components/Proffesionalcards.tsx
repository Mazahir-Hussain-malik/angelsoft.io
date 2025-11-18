"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    id: "goal",
    title: "Goal Oriented",
    description:
      "We work closely with clients to track business objectives and ensure everything leads to a clear ROI.",
    image: "/homepage/goalOriented.png",
  },
  {
    id: "synergy",
    title: "Strong Synergy",
    description:
      "We stay connected through transparent communication channels across all time zones.",
    image: "/homepage/strongsygenry.png",
  },
  {
    id: "cost",
    title: "Cost Effective",
    description:
      "Our global team allows us to provide affordable yet high-quality services.",
    image: "/public/costEffective.png",
  },
  {
    id: "creative",
    title: "Creative Team",
    description:
      "Our designers and developers bring unique solutions that help your brand stand out.",
    image: "/homepage/goalOriented.png",
  },
  {
    id: "support",
    title: "24/7 Support",
    description:
      "We are always available to assist clients with friendly and reliable support.",
    image: "/homepage/strongsygenry.png",
  },
];

export default function ProfessionalCards() {
  const [hovered, setHovered] = useState<string | null>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToShow: 3, // show 3
    slidesToScroll: 1, // slide 1
    rtl: true, // slide → LEFT
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  return (
    <div className="w-full py-16 mt-[-10rem] relative bg-transparent z-50">
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id}>
              <div
                className="relative w-full h-[350px] group overflow-hidden shadow-lg cursor-pointer"
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                {/* Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#264b78] to-transparent" />

                {/* Title strip */}
                <motion.div
                  className="absolute left-5 bottom-[50px] bg-white w-[300px] shadow-xl h-[60px] rounded-lg flex items-center justify-center group-hover:hidden z-50"
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#937c39] text-xl font-semibold">
                    {card.title}
                  </p>
                </motion.div>

                {/* Hover Content */}
                <motion.div
                  className="absolute inset-3 m-4 bg-[#264b78] px-4 py-4 rounded-2xl text-white flex flex-col justify-center items-center text-center z-30"
                  initial={{ y: "100%" }}
                  animate={{ y: hovered === card.id ? 0 : "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-bold mb-3 tracking-wide">
                    {card.title}
                  </h3>

                  <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-5">
                    {card.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* FIX SPACING — SLICK OVERRIDE */}
      <style jsx global>{`
        .slick-slide > div {
          margin: 0 10px !important; /* control spacing */
        }
        .slick-list {
          margin: 0 -10px !important;
        }
      `}</style>
    </div>
  );
}
