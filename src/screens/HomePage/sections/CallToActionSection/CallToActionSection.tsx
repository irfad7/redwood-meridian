import React from "react";
import { EmailForm } from "../../../../components/ui/EmailForm";
import { CheckCircle } from "lucide-react";

const bulletPoints = [
  "10–20+ Auto Accident Clients / Month – predictable case flow.",
  "ROI Clarity – track every dollar.",
  "Proven, Predictable, Scalable System – convert more leads into signed cases.",
];

export const CallToActionSection = (): JSX.Element => {
  const handleEmailSubmit = (email: string) => {
    // Email submission is handled by EmailForm component
    // UTM params are captured and webhook is sent automatically
    console.log('Hero form email submitted:', email);
  };

  return (
    <section className="relative w-full py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 pt-12 md:pt-16 lg:pt-20">
          {/* Main Headline */}
          {/* <h1 className="[font-family:'Inter',Helvetica] font-black text-[#0c0c0c] text-6xl md:text-7xl lg:text-8xl xl:text-[70px] text-center tracking-[-2.42px] leading-tight max-w-5xl">
            Generate 15+ <br />
            Car Accident Cases <br />
            Every Month Predictably
          </h1> */}
          <h1 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] 
  text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[104px]
  text-center tracking-[-0.5px] leading-tight max-w-6xl mx-auto px-2">
  Generate 15+ <br />
  Car Accident Cases <br />
  Every Month Predictably
</h1>

          {/* Description */}
          {/* <p className="[font-family:'Inter',Helvetica] font-normal text-[#0c0c0c] text-2xl md:text-3xl text-center leading-relaxed max-w-4xl mt-8">
            A proven client-generation system trusted by PI firms <br />
            to deliver high-value car accident cases consistently at trackable
            ROI.
          </p> */}
                      <p className="[font-family:'Playfair_Display',serif] font-normal text-[#0c0c0c] 
  text-[24px] md:text-[26px] lg:text-[28px] text-center leading-relaxed max-w-4xl mt-4 md:mt-6 mx-auto px-4">
  A proven done-for-you case-generation system trusted by PI firms <br />
  to deliver high-value car accident cases consistently at trackable ROI.
</p>

          {/* Email Form */}
          <EmailForm 
            className="mt-12"
            source="hero-form"
            onSubmit={handleEmailSubmit}
          />

          {/* Bullet Points */}
          {/* Mobile Layout */}
          <div className="flex flex-col items-center space-y-3 mt-4 mb-0 px-4 lg:hidden">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3 w-full max-w-md">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="[font-family:'Playfair_Display',serif] font-normal text-[#0c0c0c] text-[22px] leading-relaxed text-left">
                  {point}
                </span>
              </div>
            ))}
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col items-start space-y-4 mt-6 mb-0 px-4 w-full max-w-3xl">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3 w-full">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="[font-family:'Playfair_Display',serif] font-normal text-[#0c0c0c] text-[22px] leading-relaxed text-left">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
