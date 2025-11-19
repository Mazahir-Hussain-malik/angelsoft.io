'use client'

import { useState } from 'react'
import { Check, Calendar, User } from 'lucide-react'
import { motion } from "framer-motion";





export default function PricingPlan() {
  const [activeTab, setActiveTab] = useState('ecommerce')

  const ecommercePlans = [
    {
      title: 'BigCommerce Plan',
      price: '$3,000',
      description:
        'Get a BigCommerce website with up to 15 static pages. The plan comes with Standard or Plus hosting, free domain registration, and free maintenance for up to 3 months.',
      feature: 'Free Domain & Web Hosting',
    },
    {
      title: 'Shopify Plan',
      price: '$2,500',
      description:
        'Get a Shopify website with up to 15 static pages. The plan comes with Basic or Regular hosting, free domain registration, and free maintenance for up to 3 months.',
      feature: 'Free Domain & Web Hosting',
    },
    {
      title: 'WooCommerce Plan',
      price: '$2,000',
      description:
        'Get a WordPress website that allows you to sell products online. Comes with free hosting, free domain registration and 3 months free maintenance.',
      feature: 'Free Domain & Web Hosting',
    },
  ]

  return (
    <>
      {/* PRICING SECTION */}
      <section className="relative min-h-screen bg-[#f5f5f7] py-20 px-4 overflow-hidden">

        {/* DOT PATTERNS + SHAPES */}
        <div className="absolute top-24 left-12 w-16 h-16 grid grid-cols-6 grid-rows-6 gap-1.5 opacity-20">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-400" />
          ))}
        </div>

        <div className="absolute top-20 right-32 w-40 h-40 rounded-full bg-gray-300/30" />

        <div className="absolute bottom-32 right-20 w-32 h-32 grid grid-cols-8 grid-rows-8 gap-1.5 opacity-20">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-400" />
          ))}
        </div>

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-2">
              <span className="text-[#b8975a]">Choose The</span>
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold mb-2">
              <span className="text-[#2c4a6f]">Pricing Plan</span>
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-[#b8975a]">That Suits Your Needs</span>
            </h2>
          </div>

          {/* TABS */}
          <div className="flex justify-center gap-3 mb-16">
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`px-8 py-3 rounded-full text-base font-medium transition-all ${
                activeTab === 'ecommerce'
                  ? 'bg-[#3d5a80] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Ecommerce Plans
            </button>

            <button
              onClick={() => setActiveTab('wordpress')}
              className={`px-8 py-3 rounded-full text-base font-medium transition-all ${
                activeTab === 'wordpress'
                  ? 'bg-[#3d5a80] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              WordPress Plans
            </button>
          </div>

          {/* PRICING CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ecommercePlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 flex flex-col relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="mb-6">
                  <h3 className="text-[#b8975a] text-xl font-semibold mb-4">{plan.title}</h3>
                  <div className="text-[#2c4a6f] text-5xl font-bold mb-6">{plan.price}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex items-center gap-3 mb-8 mt-auto">
                  <div className="w-6 h-6 rounded-full bg-[#3d5a80] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#b8975a] text-sm font-medium">{plan.feature}</span>
                </div>

                <button className="w-full py-3.5 rounded-full text-[#b8975a] font-medium text-base bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group-hover:bg-[#b8975a] group-hover:text-white">
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* floating shapes */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 opacity-50" />
                <div className="absolute bottom-6 left-6 w-8 h-8 rounded-full bg-gray-100 opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="relative bg-[#f5f5f7] py-20 px-4 overflow-hidden">

        {/* vertical lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="w-px h-full bg-gray-200/50 mx-[16.66%]"></div>
          <div className="w-px h-full bg-gray-200/50 mx-[16.66%]"></div>
          <div className="w-px h-full bg-gray-200/50 mx-[16.66%]"></div>
        </div>
      </section>
    </>
  )
}
