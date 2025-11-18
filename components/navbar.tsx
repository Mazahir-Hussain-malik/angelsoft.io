"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Careers", href: "#careers" },
  ];

  return (
    <nav
      className="fixed top-0  left-0 mt-[4rem] w-full z-50 px-6"
      aria-label="Primary"
    >
      <div className="max-w-7xl angelsoft-bg  mx-auto relative">
        {/* main white bar that matches screenshot */}
        <div
          className="flex items-center justify-between gap-0 rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.18)] overflow-visible"
          style={{ padding: "0px", alignItems: "center" }}
        >
          {/* Logo Box with right-to-left slanted edge */}
          <div className="relative mr-[-1.5rem]">
            <div className="bg-white relative shadow-xl py-4 pl-6 pr-14 relative z-10 clip-logo">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="logo" width={150} height={150} />
                
              </div>
            </div>

            {/* Blue left border line */}
            <div className="absolute z-50 left-0 top-0 h-full w-1 bg-[#1C438A]"></div>
          </div>

          {/* Center nav links - pill-like container so links are centered inside a long white box */}

          <div className="hidden bg-white py-[18px] border-b-2 border-[#264b78] lg:flex items-center justify-center flex-1 px-4">
            <div className="bg-white px-8  rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] flex items-center gap-8">
              {navItems.map((item, idx) => {
                const active = idx === 0; // Home active by default to match screenshot
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={
                      (active
                        ? "px-4 py-1 rounded-md bg-[#eef5fb] text-[#264b78] font-semibold"
                        : "text-[#1a1a1a] hover:text-[#D4AF37] transition-colors duration-200") +
                      " text-sm"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right area: search icon and CTA (keeps same sizes & colors as screenshot) */}
          <div className="hidden bg-white py-3 border-b-2 border-[#264b78] lg:flex items-center gap-4 flex-shrink-0 pr-[1rem]">
            <button
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-transparent hover:border-[#e6eef8] transition-all"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5 text-[#1a1a1a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button className="px-6 py-2.5 bg-[#264b78] text-white rounded-full font-semibold text-sm shadow-md hover:bg-[#1e3b63] transition-colors">
              Get In Touch
            </button>
          </div>

          {/* Mobile menu toggle (shows on small screens) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-white rounded-lg shadow-md text-[#1a1a1a]"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown (matches design and spacing) */}
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
                  <button className="w-full px-4 py-2 bg-[#264b78] text-white rounded-full font-semibold text-sm hover:bg-[#1e3b63] transition-colors">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
