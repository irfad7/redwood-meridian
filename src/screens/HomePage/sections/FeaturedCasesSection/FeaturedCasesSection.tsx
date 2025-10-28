import React from "react"
import { Card, CardContent } from "../../../../components/ui/card";

const benefitsList = [
  {
    title: "Speed to execution",
    description: "→ Calls returned in under 60 seconds = higher signed cases.",
  },
  {
    title: "AI-enhanced Followup That Doesn't Quit",
    description: "→ 15 touchpoints in 7 days closes more clients.",
  },
  {
    title: "Transparent ROI",
    description: "→ Know exactly what it costs to generate every signed case.",
  },
  {
    title: "All Proven Ad Creatives",
    description: "→ Lean on proven results based on 5 years of research and testing.",
  },
  {
    title: "Scalable Cash-Flow Model",
    description: "→ Control the speed and direction of your growth.",
  },
];

export const FeaturedCasesSection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="w-full mx-auto bg-white rounded-[8.05px] shadow-[0px_0px_20.13px_#002c7a14] transition-shadow duration-300 hover:shadow-[0px_0px_30px_#002c7a25] hover:-translate-y-2">
          <CardContent className="px-8 pt-8 pb-8 md:px-12 md:pt-12 md:pb-12">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8 md:space-y-12 px-4 md:px-16 lg:px-20">
                <header>
                  <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] tracking-[-0.5px] leading-tight text-center px-2">
                    Proven. Predictable. Scalable.
                  </h2>
                </header>

                <div className="space-y-6 md:space-y-8 [font-family:'Playfair_Display',serif] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-relaxed max-w-3xl mx-auto">
                  {benefitsList.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 md:gap-6 lg:gap-8 group hover:scale-[1.02] transition-transform duration-300 hover:bg-gray-50/50 rounded-lg p-4 -m-4 cursor-pointer">
                      <div className="flex-shrink-0">
                        <span className="[font-family:'Playfair_Display',serif] font-light text-[#0c0c0c] text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-none transition-colors duration-300 group-hover:text-[#0e823e] group-hover:scale-110">
                          {index + 1}.
                        </span>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="font-bold text-[#0c0c0c] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] transition-colors duration-300 group-hover:text-[#0e823e]">
                          {benefit.title}
                        </div>
                        <div className="text-[#0c0c0c] transition-colors duration-300 group-hover:text-[#4d5256]">{benefit.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
