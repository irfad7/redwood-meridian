import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Play } from "lucide-react";
import revenuce from '../../../../assets/images/revenue 2x.png';

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full pt-0 pb-4 sm:pt-0 sm:pb-6 lg:pt-0 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                              <div className="flex justify-center lg:justify-start">
                  <div className="w-full max-w-[550px] h-[300px] sm:h-[400px] lg:h-[450px] flex items-center justify-center">
                    <div className="text-center p-4 sm:p-6 lg:p-8 relative group cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=d2teDjJa2MU', '_blank')}>
                      <div className="relative">
                        <img src={revenuce} alt="Stephen A. Smith testimonial video thumbnail" className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105" draggable={false} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-3 sm:p-4 group-hover:bg-opacity-70 transition-all">
                            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="space-y-4 sm:space-y-6">
                <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-[40.3px] leading-tight lg:leading-[48.3px] tracking-[-0.81px] [font-family:'Playfair_Display',serif]">
                  <span className="font-black text-[#0c0c0c] tracking-[-0.32px]">
                    "I doubled my revenue in one year, I'm literally{" "}
                  </span>
                  <span className="font-black italic text-[#0e823e] tracking-[-0.32px]">
                    1 million dollars
                  </span>
                  <span className="font-black text-[#0c0c0c] tracking-[-0.32px]">
                    {" "}
                    in revenue in one year!!"
                  </span>
                </blockquote>

                <cite className="block text-sm sm:text-base lg:text-lg text-[#4d5256] [font-family:'Playfair_Display',serif] font-normal leading-relaxed lg:leading-[27.2px] not-italic">
                  – Stephen A. Smith, Esq., Personal Injury Lawyer, The Law
                  Offices of Stephen A. Smith
                </cite>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
