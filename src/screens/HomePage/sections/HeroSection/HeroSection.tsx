import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ArrowRight, Play } from "lucide-react";
import imagev1 from '../../../../assets/images/image-v1.png';
import imagev2 from '../../../../assets/images/image-v2.png';
import imagev3 from '../../../../assets/images/image-v3.png';
import imagev4 from '../../../../assets/images/image-v4.png';
import imagev5 from '../../../../assets/images/image-v5.png';
import imagev6 from '../../../../assets/images/image-v6.png';

interface HeroSectionProps {
  onShowEmailPopup: () => void;
}

const testimonialData = [
  {
    name: "Brittani Glidden-Alhasoon, Esq.",
    category: "How This Lawyer Signed 15 Clients From Just 67 Leads at $65 Per Lead",
    image: imagev1,
    link: "https://www.youtube.com/watch?v=QdsosUhDcwc&authuser=0",
  },
  {
    name: "Demarcus Ward, Esq.",
    category: "How This Lawyer Signed 63 Clients and Achieved Nearly 700% ROI While Reclaiming His Quality of Life",
    image: imagev2,
    link: "https://www.youtube.com/watch?v=G3ebWMr8wyo&authuser=0",
  },
  {
    name: "Dewnya Bazzi, Esq.",
    category: "How This Lawyer Generated 800 Leads and Closed 30 Clients in Just 45 Days",
    image: imagev3,
    link: "https://www.youtube.com/watch?v=cRpr598QDKM",
  },
  {
    name: "Kweku Dafoor, Esq.",
    category: "How This Lawyer Doubled His Revenue, Built a 10-Person Team, and Stepped Away From His Firm",
    image: imagev4,
    link: "https://www.youtube.com/watch?v=2LMKLoTQJM0",
  },
  {
    name: "Moises Aguilar, Esq.",
    category: "How This Lawyer Reached His Dream Life and Built a Firm That Runs Without Him",
    image: imagev5,
    link: "https://www.youtube.com/watch?v=aHM6EwqHelg&authuser=0",
  },
  {
    name: "Paul Campson, Esq.",
    category: "How This Lawyer Sealed His Firm to 70+ Clients and Cuts His Cost Per Lead to just $30",
    image: imagev6,
    link: "https://www.youtube.com/watch?v=Q1xWvb8nyUc",
  },
];

export const HeroSection = ({ onShowEmailPopup }: HeroSectionProps): JSX.Element => {
  return (
    <section className="w-full relative">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-12">
            <div className="mb-4">
              <h1 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] tracking-[-0.5px] leading-tight">
                More of Our Members' Voices
              </h1>
            </div>
          </header>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[21px] mb-12">
            {testimonialData.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="relative">
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer group"
                    >
                      <div className="relative w-full h-[201px] rounded-[8.05px] mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg overflow-hidden">
                        <div
                          className="w-full h-full"
                          style={{
                            backgroundImage: `url(${testimonial.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "50% 50%",
                          }}
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
                          <div className="bg-white bg-opacity-90 rounded-full p-3 group-hover:bg-opacity-100 transition-all duration-300">
                            <Play className="w-6 h-6 text-[#0e823e] fill-[#0e823e]" />
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="text-center">
                      <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] text-[16.1px] leading-[22.5px]">
                        {testimonial.category}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mb-8">
            <Button 
              onClick={onShowEmailPopup}
              className="h-14 md:h-16 lg:h-18 bg-[#0e823e] hover:bg-[#0e823e]/90 text-white text-[35.2px] leading-[48.3px] px-8 py-6 rounded-[3.02px] border border-[#00000021] shadow-[0px_4.03px_8.05px_#001c3826] [font-family:'Playfair_Display',serif] font-medium mb-4"
            >
              <span className="mr-4">See If You Qualify</span>
              <ArrowRight className="w-6 h-6" />
            </Button>
            <p className="[font-family:'Playfair_Display',serif] font-medium text-[#4d5256] text-[14.1px] leading-[19.7px] -mt-0.5">
              Completely Done-For-You Case-Generation System
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};