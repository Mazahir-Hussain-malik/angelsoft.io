"use client"
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import ProfessionalCards from '@/components/Proffesionalcards';
import { ServicesSection } from '@/components/services-section';
import { WhyChooseUs } from '@/components/why-choose-us';
export default function Home() {
  return (
    <div className=' '>
      <Header />
      <Navbar />
      <Hero />
      <ProfessionalCards />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <path
            d="M100 800 Q 300 600, 500 700 T 900 600"
            stroke="#d4cfc9"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M1340 100 Q 1200 300, 1000 200 T 600 400"
            stroke="#d4cfc9"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ServicesSection />
      </div>
      <div>
        <WhyChooseUs />
        
      </div>
      <Footer />
     
    </div>
  );
}
