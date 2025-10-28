import React from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import downicon from '../../../../assets/images/downicon.png';

const requirementsList = [
  "$10–15K ad budget",
  "7-day intake coverage",
  "Speed-to-lead within 60 seconds",
  "CRM + call tracking in place (or ready to set up)",
  "Commitment to proven process",
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full relative pb-0">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] tracking-[-0.5px] leading-tight">
          Built for PI Firms Serious About Scaling
        </h2>

        {/* New Requirements Section */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-8 mb-8">
          <div className="text-center mb-6">
            <p className="[font-family:'Playfair_Display',serif] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-relaxed text-[#4d5256] max-w-3xl mx-auto">
              This isn't for every PI attorney. We only partner with firms ready to execute fast and follow the system and who meet these requirements:
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {requirementsList.map((requirement, index) => (
              <div key={index} className="flex items-center justify-center gap-4 group hover:scale-[1.02] transition-transform duration-300 hover:bg-gray-50/50 rounded-lg p-3 -m-3 cursor-pointer">
                <Check className="w-6 h-6 text-[#0e823e] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-relaxed text-center transition-colors duration-300 group-hover:text-[#0e823e]">
                  {requirement}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 mb-2">
          <div className="flex justify-center items-center gap-4">
           
               <div className="pt-2">
                 <img src={downicon} alt="" draggable={false} />
               </div>
          </div>
          {/* <span className="text-gray-600 font-medium">Completely Done-For-You Case Generation System</span> */}
        </div>

        <h1 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] tracking-[-0.5px] leading-tight max-w-6xl mb-0">
          Real Lawyers, Real Results
        </h1>
      </div>
    </section>
  );
};
