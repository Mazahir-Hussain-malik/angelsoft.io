"use client"

import { FaFacebookF } from "react-icons/fa"
import { IoLogoGoogleplus } from "react-icons/io"
import { FaTwitter } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import { MdHeadphones } from "react-icons/md"
import { type ReactNode, useState } from "react"
import { LiaAngleDoubleDownSolid } from "react-icons/lia";


interface IconWrapperProps {
  children: ReactNode
  to?: string
}

// Reusable Icon Wrapper
function IconWrapper({ children, to = "#" }: IconWrapperProps) {
  return (
    <div
      className="group md:w-[30px] md:h-[30px] w-[30px] h-[30px] rounded-full flex justify-center items-center
      bg-[#b89b5e]/10 md:bg-white/10 hover:bg-white transition-all duration-300 ease-out
      hover:shadow-[0px_0px_8px_rgba(255,255,255,0.6)] hover:scale-[1.15]
      cursor-pointer"
    >
      <a
        href={to}
        className="md:text-[14px] text-[14px] text-[#b89b5e] md:text-white group-hover:text-[#264b78]
        transition-all duration-300 ease-out group-hover:scale-[1.20]"
      >
        {children}
      </a>
    </div>
  )
}

const social_icons = [
  { id: 1, icon: <FaFacebookF />, to: "#" },
  { id: 2, icon: <IoLogoGoogleplus />, to: "#" },
  { id: 3, icon: <FaTwitter />, to: "#" },
  { id: 4, icon: <FaLinkedinIn />, to: "#" },
  { id: 5, icon: <FaTiktok />, to: "#" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`
      w-full z-50 font-sans transition-colors duration-500 ease-in-out
      md:absolute md:top-0 md:bg-transparent md:py-2 md:px-6 
      ${isOpen ? "bg-white relative" : " absolute bg-transparent  top-0"}
    `}
    >
      {/* Desktop Container / Mobile Content Wrapper */}
      <div
        className={`
          grid transition-[grid-template-rows] duration-500 ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
          md:grid-rows-[1fr] md:block
        `}
      >
        <div className="overflow-hidden">
          <div
            className={`
            max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between 
            gap-4 md:gap-0 text-xs
            pb-6 md:pb-0
          `}
          >
            {/* Left Section - Social Icons */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 pt-6 md:pt-0">
              <span className="font-medium text-[#b89b5e] md:text-white/80 text-sm md:text-xs">Follow Us:</span>

              <div className="flex gap-[0.5rem]">
                {social_icons.map(({ id, icon, to }) => (
                  <IconWrapper key={id} to={to}>
                    {icon}
                  </IconWrapper>
                ))}
              </div>
            </div>

            {/* Right Section - Contact */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 w-full md:w-auto">
              {/* Email */}
              <div className="flex items-center gap-2 md:gap-1.5">
                <IconWrapper>
                  <IoMail className="text-[#264b78]" />
                </IconWrapper>
                <span className="whitespace-nowrap text-[#b89b5e] md:text-white/90 font-medium md:font-normal text-sm md:text-xs">
                  Email: contact@angelsoft.io
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 md:gap-1.5">
                <IconWrapper>
                  <MdHeadphones className="text-[#264b78]" />
                </IconWrapper>
                <span className="whitespace-nowrap text-[#b89b5e] md:text-white/90 font-medium md:font-normal text-sm md:text-xs">
                  Call: +1 646 752 4410
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Bar (Visible only on Mobile/Tablet) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full bg-[#1e3a5f] py-2 flex justify-center items-center cursor-pointer relative z-10"
      >
        <div
          className={`w-8 h-8 rounded-full border bg-white border-[#937c39] flex items-center justify-center bg-transparent transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <LiaAngleDoubleDownSolid className="text-[#937c39] text-lg" />
        </div>
      </div>
    </div>
  )
}
