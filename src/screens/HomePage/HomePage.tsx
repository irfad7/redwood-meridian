import React from "react";
import { useState, useEffect } from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeaturedCasesSection } from "./sections/FeaturedCasesSection/FeaturedCasesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";

import { StatsCard } from "./sections/StatsCard/StatsCard";
import { TeamSection } from "./sections/TeamSection/TeamSection";

import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { EmailPopup } from "../../components/ui/EmailPopup";
import { trackPageView } from "../../utils/analytics";


export const HomePage = (): JSX.Element => {
  const [showBanner, setShowBanner] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('PI Track Landing Page');
  }, []);

  const handleEmailSubmit = (email: string) => {
    // Here you could log the email or send it to your analytics
    console.log('Email submitted:', email);
    setShowEmailPopup(false);
    // Redirect to JotForm
    window.open('https://form.jotform.com/252374559938069', '_blank');
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-[#d7e3f3]/60 to-white scroll-optimized">
      {showBanner && (
        <div className="w-full bg-[#0e823e] border-b border-[#e6edf2] relative">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-center relative">
              <div className="[font-family:'Playfair_Display',serif] font-normal text-white text-sm md:text-[15.1px] text-center">
                February 12th - 15th, 2025 | Claim Your Ticket To The LAST DANCE Of Funnel Hacking Live Here →
              </div>
             
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col">
        <div className="w-full relative">
          <CallToActionSection />
          <div className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-10 pb-8 md:pb-12 lg:pb-16">
            <div className="flex items-center">
              <h1 className="[font-family:'Playfair_Display',serif] font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
                <span className="text-[#0c0c0c]">Redwood</span>{' '}
                <span className="text-[#0e823e]">Meridian</span>
              </h1>
            </div>
          </div>
        </div>

        <StatsCard />

        <AboutUsSection onShowEmailPopup={() => setShowEmailPopup(true)} />

        <FeaturedCasesSection />

        <TestimonialsSection />

        <FooterSection />

        <div className="w-full relative">
          <TeamSection />
        </div>

        <HeroSection onShowEmailPopup={() => setShowEmailPopup(true)} />

        <FAQSection onShowEmailPopup={() => setShowEmailPopup(true)} />

        
        <div className="w-full border-t border-[#ebecef] flex flex-col items-center gap-6 py-8">

          {/* Logo */}
          <div>
            <h2 className="[font-family:'Playfair_Display',serif] text-[#0e823e] font-bold text-2xl md:text-3xl tracking-tight">
              Redwood Meridian
            </h2>
          </div>

          {/* Address */}
          <div className="text-center text-[#4d5256] text-sm leading-[19.6px]">
            10880 Wilshire Blvd Suite 2000, <br />
            Los Angeles, CA 90024
          </div>

          {/* Links to Privacy Policy and Terms */}
          <div className="flex items-center gap-4">
            <a 
              href="/privacy-policy" 
              className="[font-family:'Playfair_Display',serif] text-[#4d5256] hover:text-[#0e823e] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-[#4d5256]">|</span>
            <a 
              href="/terms-of-service" 
              className="[font-family:'Playfair_Display',serif] text-[#4d5256] hover:text-[#0e823e] text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-center max-w-4xl mx-auto px-4">
            <p className="[font-family:'Playfair_Display',serif] font-normal italic text-[#60606b] text-[14.1px] leading-[19.7px]">
              This program is subject to Redwood Meridian&apos;s prerequisites and process
              adherence. Spaces are limited. No guarantees of specific case
              outcomes. Compliance with State Bar guidelines required.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/mylegalacademyofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4d5256] hover:text-[#0e823e] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/mylegalacademy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4d5256] hover:text-[#0e823e] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@mylegalacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4d5256] hover:text-[#0e823e] transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/company/mylegalacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4d5256] hover:text-[#0e823e] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Email Popup */}
      <EmailPopup
        isOpen={showEmailPopup}
        onClose={() => setShowEmailPopup(false)}
        onSubmit={handleEmailSubmit}
      />
    </div>
  );
};
