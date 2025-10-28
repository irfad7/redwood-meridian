import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowRight } from "lucide-react";
import starIcon from "../../../../assets/icons/star.png";
import Profile1 from "../../../../assets/images/william.png";
import Profile2 from "../../../../assets/images/mois.png";
import Profile3 from "../../../../assets/images/Paul.png";

interface AboutUsSectionProps {
  onShowEmailPopup: () => void;
}

const testimonialsData = [
  {
    name: "William McMahon, Esq.",
    location: "Chicago, Illinois",
    quote:
      "Redwood Meridian pushed us to modernise fast. Launched Facebook leads with coordinator support, and now we're hiring 2 attorneys and a closer to handle demand.",
    image: Profile1,
  },
  {
    name: "Moises Anguilar, Esq.",
    location: "Santa Ana, California",
    quote:
      "Our straightforward acquisition system signed 35 clients at a 6% conversion rate while keeping CPA under $700!",
    image: Profile2,
  },
  {
    name: "Paul Campson, Esq.",
    location: "White Plains, New York",
    quote:
      "Embracing Redwood Meridian's system end-to-end was a game-changer. Full implementation clicked across the practice. The approach is tried and true, and when you follow it wholeheartedly, it delivers real growth!",
    image: Profile3,
  },
];

export const AboutUsSection = ({ onShowEmailPopup }: AboutUsSectionProps): JSX.Element => {
  return (
    <section className="w-full px-0 py-0 mt-0 mb-0 relative">
      <div className="mx-auto max-w-7xl relative">
        {/* Stars + badge */}
        <div className="text-center mb-4 md:mb-6">
          <div className="mb-3 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={starIcon} alt="" className="w-[26px] object-contain" draggable={false} />
            ))}
          </div>


        </div>

        {/* Heading */}
                  <div className="text-center mb-4 md:mb-6">
            <h2 className="text-center text-[48px] sm:text-[52px] md:text-[56px] lg:text-[64px] font-medium leading-tight tracking-[-0.5px] text-[#0c0c0c] [font-family:'Playfair_Display',serif] pb-1">
              Top Personal Injury Firms <br />
              Trust Redwood Meridian
            </h2>
          </div>

        {/* Testimonials */}
        <div className="relative mt-6 mb-8 md:mt-8 md:mb-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 lg:gap-6">
            {testimonialsData.map((t, index) => (
              <Card
                key={t.name}
                className={`relative overflow-visible rounded-xl bg-white shadow-[0px_0px_40.25px_#002c7a21] transition-all duration-300 hover:shadow-[0px_0px_50px_#002c7a30] hover:-translate-y-2 ${index === 1 ? "origin-bottom md:scale-[0.98]" : ""}`}
              >
                <CardContent className={`relative flex h-full flex-col items-center px-4 sm:px-6 md:px-10 lg:px-16 pt-32 sm:pt-36 md:pt-40 lg:pt-48 ${index === 1 ? "pb-0" : "pb-4 sm:pb-6 md:pb-8"}`}>
                  {/* headshot */}
                  <div className="absolute -top-2 sm:-top-4 md:-top-8 lg:-top-12 left-1/2 -translate-x-1/2 z-10">
                    <img
                      src={t.image}
                      alt={`${t.name} headshot`}
                      className="h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-56 lg:w-56 object-cover rounded-full"
                      style={{ objectPosition: 'center 30%' }}
                      draggable={false}
                    />
                  </div>

                  {/* name + location */}
                  <h4 className="[font-family:'Playfair_Display',serif] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-[#0c0c0c] text-center mt-2 sm:mt-0">
                    {t.name}
                  </h4>
                  <p className="[font-family:'Playfair_Display',serif] mt-1 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed text-[#4d5256] text-center">
                    {t.location}
                  </p>

                  {/* quote */}
                  <blockquote className="[font-family:'Playfair_Display',serif] mx-auto mt-4 sm:mt-6 flex-1 text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#4d5256]">
                    &ldquo;
                    {t.quote.includes("35 clients") ? (
                      <>
                        Our straightforward acquisition system signed{" "}
                        <span className="font-bold">35 clients</span> at a 6% conversion rate while keeping{" "}
                        <span className="font-bold">CPA under $700!</span>
                      </>
                    ) : t.quote.includes("tried and true") ? (
                      <>
                        Embracing Redwood Meridian&apos;s system end-to-end was a game-changer. Full implementation
                        clicked across the practice. <span className="font-bold">The approach is tried and true</span>, and when you follow it wholeheartedly, it delivers{" "}
                        <span className="font-bold">real growth!</span>
                      </>
                    ) : (
                      <>
                        {t.quote.split("we're hiring")[0]}
                        <span className="font-bold">
                          we&apos;re hiring 2 attorneys and a closer to handle demand.
                        </span>
                      </>
                    )}
                    &rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <Button 
            onClick={onShowEmailPopup}
            className="h-14 md:h-16 lg:h-18 rounded-[3.02px] border border-[#00000021] bg-[#0e823e] px-8 py-6 shadow-[0px_4.03px_8.05px_#001c3826] text-white hover:bg-[#0e823e]/90"
          >
            <span className="mr-2 text-[35.2px] font-medium leading-[48.3px] [font-family:'Playfair_Display',serif]">
              See If You Qualify
            </span>
            <ArrowRight className="h-6 w-6" />
          </Button>
          <p className="mt-2 text-[14.1px] font-medium leading-relaxed text-[#60606b] [font-family:'Playfair_Display',serif]">
            Completely Done-For-You Case-Generation System
          </p>
        </div>
      </div>
    </section>
  );
};
