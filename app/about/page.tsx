"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import HeroTitle from "@/components/hero-title";
import Button from "@/components/ui/button";

const team = [
  {
    image: "/images/team-img1.png",
    name: "Fred",
    designation: "Chief Technology Officer",
    facebook: "https://www.facebook.com/fred",
    linkedin: "https://www.linkedin.com/in/fred/",
  },
  {
    image: "/images/female.png",
    name: "Karen",
    designation: "Chief Financial Officer",
    facebook: "https://www.facebook.com/karen",
    linkedin: "https://www.linkedin.com/in/karen/",
  },
  {
    image: "/images/team-img2.png",
    name: "Thine",
    designation: "HR / Payroll Manager",
    facebook: "https://www.facebook.com/thine",
    linkedin: "https://www.linkedin.com/in/thine/",
  },
  {
    image: "/images/team-img3.png",
    name: "Nahuel",
    designation: "Business Developer",
    facebook: "https://www.facebook.com/nahuel",
    linkedin: "https://www.linkedin.com/in/nahuel/",
  },
  {
    image: "/images/team-img4.png",
    name: "Joe",
    designation: "Full Stack Developer",
    facebook: "https://www.facebook.com/joe",
    linkedin: "https://www.linkedin.com/in/joe/",
  },
  {
    image: "/images/female.png",
    name: "Angel",
    designation: "Intern Developer",
    facebook: "https://www.facebook.com/angel",
    linkedin: "https://www.linkedin.com/in/angel/",
  },
  {
    image: "/images/female.png",
    name: "Freya",
    designation: "Intern Developer",
    facebook: "https://www.facebook.com/freya",
    linkedin: "https://www.linkedin.com/in/freya/",
  },
];

const AboutPage: React.FC = () => {
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroTitle title="About" leftText="Home" rightText="About" />

      <div className="px-4 relative sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 ">
        <div className="max-w-7xl mx-auto ">
          <motion.div
            animate={{
              y: [0, -20, 0],
              scaleY: [1, 1.1, 0.9, 1.05, 1],
              scaleX: [1, 0.95, 1.05, 0.98, 1],
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.4, 0.6, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          >
            <div className="text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <span className="inline-block bg-white shadow-lg text-[#264B78] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                About Angelsoft Solutions
              </span>
            </div>
          </motion.div>
          <p className="text-[#666666]">
            Angel Software Solutions is a digital solutions provider that
            offers a wide range of IT services from UI/UX design and branding,
            web and mobile application development, staff augmentation,
            recruitment process outsourcing, back-office support, translation
            services, accounting services, search engine optimization, social
            media marketing, business planning, enterprise analysis, and cloud
            hosting / deployment services.
          </p>

          {/* Decorative Circles */}
          <motion.div
            className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gray-300/20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 md:right-12 right-0 sm:grid hidden w-20 h-20  grid-cols-6 grid-rows-6 gap-2 opacity-70"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-black" />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:pb-0 pb-[10rem] sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto ">
          <Button text="Our Members" />
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#937C39] mb-6 sm:mb-8 tracking-tight">
            Meet Our Team Members
          </h1>
        </div>
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group transition-all duration-300 h-full flex flex-col items-center relative"
                onClick={() =>
                  setTouchedIndex(touchedIndex === index ? null : index)
                }
              >
                <div className="flex-shrink-0 sm:w-[390px] w-full h-[390px] relative overflow-hidden rounded-[10px]">
                  {/* IMAGE */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* GOLDEN OVERLAY */}
                  <div
                    className={`absolute inset-0 bg-[#937C39]/70 opacity-0 transition-opacity duration-500 
                    ${touchedIndex === index ? "opacity-100" : ""} 
                    md:group-hover:opacity-100`}
                  ></div>

                  {/* SOCIAL ICONS */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-500 
                    ${touchedIndex === index ? "opacity-100" : ""} 
                    md:group-hover:opacity-100`}
                  >
                    <a
                      href={member.facebook}
                      target="_blank"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#264b78] transition-transform"
                    >
                      <motion.div
                        whileHover={{ x: [0, -3, 3, -3, 3, 0] }}
                        transition={{ duration: 0.25, repeat: 0, ease: "easeInOut" }}
                      >
                        <Facebook className="text-[#937C39] hover:text-white w-6 h-6" />
                      </motion.div>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#264b78] transition-transform"
                    >
                      <motion.div
                        whileHover={{ x: [0, -3, 3, -3, 3, 0] }}
                        transition={{ duration: 0.25, repeat: 0, ease: "easeInOut" }}
                      >
                        <Linkedin className="text-[#937C39] hover:text-white w-6 h-6" />
                      </motion.div>
                    </a>
                  </div>
                </div>

                <div className="w-[70%] mx-auto bg-white shadow-sm -mt-12 py-5 z-10 rounded-lg flex flex-col">
                  <h3 className="text-[22px] font-extrabold text-[#937C39] mb-2 sm:mb-3 text-center">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-[16px] text-center">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10 pointer-events-none"></div>
      <div className="fixed top-1/2 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10 pointer-events-none"></div>
    </div>
  );
};

export default AboutPage;
