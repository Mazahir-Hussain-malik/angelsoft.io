"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
  ]

  return (
    <>
      <motion.nav
        className={` ${isScrolled ? "fixed" : ""}   sm:fixed top-0 left-0 w-full md:px-6 px-0 z-50`}
        initial={{ marginTop: "4rem" }}
        animate={{ marginTop: isScrolled ? "0rem" : "2.9rem" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        aria-label="Primary"
      >
        <div className="max-w-7xl angelsoft-bg mx-auto relative md:px-0 px-4">
          <div
            className="flex items-center justify-between gap-0 rounded-2xl sm:shadow-[0_6px_24px_rgba(0,0,0,0.18)] overflow-hidden"
            style={{ padding: "0px", alignItems: "center" }}
          >
            <div className="relative md:mr-[-1.5rem] mr-0">
              <div className="sm:bg-white relative shadow-xl py-4 md:pl-6 pl-3 md:pr-14 pr-3 z-10 clip-logo">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className=" md:w-full sm:w-[100px] w-[80px]"
                  />
                </div>
              </div>
              <div className="absolute z-50 left-0 top-0 h-full w-1 bg-[#1C438A]"></div>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden  bg-white py-[18px] border-b-2 border-[#264b78] lg:flex items-center justify-center flex-1 px-4">
              <div className="bg-white px-8 rounded-2xl flex items-center gap-8">
                {navItems.map((item, idx) => {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={
                        (pathname == item.href
                          ? "px-4 py-2 rounded-md bg-[#264b78]/10 text-[#264b78] font-semibold"
                          : "text-[#937c39] px-4 py-2 rounded-md hover:bg-[#264b78]/15 hover:text-[#264b78] transition-colors duration-200") +
                        " text-sm"
                      }
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="hidden bg-white py-4 border-b-2 border-[#264b78] lg:flex items-center gap-4 flex-shrink-0 pr-[1rem] relative ">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-transparent hover:border-[#e6eef8] transition-all z-50"
                aria-label="Search"
              >
                <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <Link href={"/contact"}>
                <button className="px-6 py-2.5 bg-[#264b78] text-white rounded-full font-semibold text-sm shadow-md hover:bg-[#1e3b63] transition-colors">
                  Get In Touch
                </button>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-white rounded-lg shadow-md text-[#1a1a1a]"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {isOpen && (
            <div className="lg:hidden mt-3">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-[#1a1a1a] hover:text-[#264b78] hover:bg-[#f8f8f8] rounded transition-colors duration-200 text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2">
                    <Link href={"contact"}>
                      <button className="w-full px-4 py-2 bg-[#264b78] text-white rounded-full font-semibold text-sm hover:bg-[#1e3b63] transition-colors">
                        Get In Touch
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="w-12 h-12 rounded-full bg-[#264b78] flex items-center justify-center shadow-lg hover:bg-[#1e3b63] transition-colors"
                  aria-label="Close search"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>

              {/* Search input with button */}
              <div className="flex items-center gap-0 shadow-2xl rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Search Here"
                  autoFocus
                  className="flex-1 py-4 px-6 text-base bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none"
                />
                <button
                  className="px-8 py-4 bg-[#264b78] hover:bg-[#1e3b63] transition-colors flex items-center justify-center"
                  aria-label="Submit search"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
