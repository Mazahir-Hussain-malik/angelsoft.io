"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function PricingPlan() {
  const [activeTab, setActiveTab] = useState("ecommerce")

  const ecommercePlans = [
    {
      title: "BigCommerce Plan",
      price: "$3,000",
      description:
        "Get a BigCommerce website with up to 15 static pages. The plan comes with Standard or Plus hosting, free domain registration, and free maintenance for up to 3 months.",
      feature: "Free Domain & Web Hosting",
    },
    {
      title: "Shopify Plan",
      price: "$2,500",
      description:
        "Get a Shopify website with up to 15 static pages. The plan comes with Basic or Regular hosting and free domain registration, and free maintenance for up to 3 months.",
      feature: "Free Domain & Web Hosting",
    },
    {
      title: "WooCommerce Plan",
      price: "$2,000",
      description:
        "Get a WordPress website that allows you to sell products online. The plan comes with a free web hosting, free domain registration, and free maintenance for up to 3 months.",
      feature: "Free Domain & Web Hosting",
    },
  ]

  const wordpressPlans = [
    {
      title: "Economy WordPress Plan",
      price: "$1,500 ",
      description:
        "Get a WordPress website with up to 10 static pages. This is our most affordable plan, and it comes with a free web hosting and free domain registration. However, you will be in charge of maintaining and updating your site. This plan is renewable annually for $250.",
      feature: "Free Domain & Web Hosting",
    },
    {
      title: "Regular WordPress Plan",
      price: "$3,000 ",
      description:
        "Get a WordPress website with up to 20 static pages. The plan comes with a free web hosting, free domain registration, and free maintenance for up to 12 months. Within the next 12 months after launching your site, we will update your existing pages for free.",
      feature: "Free Domain & Web Hosting",
    },
    {
      title: "Premium WordPress Plan",
      price: "$4,500 ",
      description:
        "Get a WordPress website with up to 30 static pages. The plan comes with a free web hosting, free domain registration, and free maintenance for up to 24 months. Within the next 24 months after launching your site, we will update your existing pages for free.",
      feature: "Free Domain & Web Hosting",
    },
  ]

  const currentPlans = activeTab === "ecommerce" ? ecommercePlans : wordpressPlans

  return (
    <section className="relative min-h-screen bg-[#f7f7f7] py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-24 left-12 w-20 h-20 grid grid-cols-6 grid-rows-6 gap-2 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
        ))}
      </div>

      <div className="absolute top-20 right-32 w-48 h-48 rounded-full bg-gray-300/20" />

      <div className="absolute bottom-32 right-20 w-36 h-36 grid grid-cols-8 grid-rows-8 gap-2 opacity-20">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-[#937c39]">Choose The</span>
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-[#2c4a6f]">Pricing Plan</span>
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-[#937c39]">That Suits Your Needs</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("ecommerce")}
            className={`px-10 py-3.5 rounded-full text-base font-medium transition-all ${
              activeTab === "ecommerce"
                ? "bg-[#3d5a80] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Ecommerce Plans
          </button>

          <button
            onClick={() => setActiveTab("wordpress")}
            className={`px-10 py-3.5 rounded-full text-base font-medium transition-all ${
              activeTab === "wordpress"
                ? "bg-[#3d5a80] text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            WordPress Plans
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-3xl p-8  backdrop-blur-sm border-2 border-transparent hover:border-[#2c4a6f] flex flex-col relative transition-all duration-300  hover:-translate-y-2 group min-h-[520px] shadow-[rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px]
"
              style={{
                backgroundImage:'url("/homepage/price_bg_bg.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
              }}
            >
              {/* Decorative circles */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-200/40" />

              <div className="mb-6 flex-grow">
                <h3 className="text-[#937c39] text-xl font-semibold mb-4">{plan.title}</h3>
                <div className="text-[#2c4a6f] text-5xl font-bold mb-6">{plan.price}</div>
                <p className="text-gray-600 text-[15px] leading-relaxed">{plan.description}</p>
              </div>

              {/* Divider line */}
              <div className="w-full h-px bg-gray-300 mb-6" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-[#3d5a80] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <span className="text-[#937c39] text-[15px] font-medium">{plan.feature}</span>
              </div>

              <button className="w-full py-3.5 rounded-full text-[#937c39] font-medium text-base  transition-all duration-300 flex items-center justify-center gap-2  hover:text-[#264b78] shadow-sm">
                Read More
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
