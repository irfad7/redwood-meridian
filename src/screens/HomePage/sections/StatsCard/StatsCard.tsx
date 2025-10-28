import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { formatCurrency } from "../../../../lib/utils";

const statisticsData = [
  {
    value: "15",
    label: "Average Signed",
    sublabel: "Cases Per Month",
  },
  {
    value: "$63,300",
    label: "Average",
    sublabel: "Monthly Revenue",
  },
  {
    value: "873%",
    label: "Average",
    sublabel: "ROI",
  },
];

export const StatsCard = (): JSX.Element => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({
    "15": 0,
    "$63,300": 0,
    "873%": 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedValues(prev => {
          const newValues = { ...prev };
          let allComplete = true;
          
          Object.keys(newValues).forEach(key => {
            const target = key === "$63,300" ? 63300 : key === "873%" ? 873 : 15;
            if (newValues[key] < target) {
              newValues[key] = Math.min(newValues[key] + Math.ceil(target / 20), target);
              allComplete = false;
            }
          });
          
          if (allComplete) {
            clearInterval(interval);
          }
          
          return newValues;
        });
      }, 100); // Increased from 50ms to 100ms
      
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatValue = (key: string, value: number) => {
    if (key === "$63,300") {
      const formattedValue = `$${Math.floor(value / 1000)},${(value % 1000).toString().padStart(3, '0')}`;
      return formatCurrency(formattedValue);
    }
    if (key === "873%") return `${value}%`;
    return value.toString();
  };

  return (
    <section className="w-full py-8 md:py-12 px-4 -mt-12">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full mx-auto bg-white rounded-[8.05px] shadow-[0px_0px_20.13px_#002c7a14] transition-shadow duration-300 hover:shadow-[0px_0px_30px_#002c7a25] hover:-translate-y-2 gpu-accelerated">
          <CardContent className="px-8 pt-4 pb-8 md:px-12 md:pt-6 md:pb-10">
            {/* Heading */}
            <h3 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mt-0 mb-6 md:mb-12 lg:mb-14 leading-tight px-2">
              Our members' consistent performance
            </h3>
            
            {/* Stats */}
            <div className="flex items-start gap-4 md:gap-8 lg:gap-12">
              {statisticsData.map((stat, index) => (
                <div key={index} className="flex-1 text-center group">
                  <div className="[font-family:'Playfair_Display',serif] font-normal text-[#0e823e] text-[32px] sm:text-[40px] md:text-[50px] lg:text-[70px] leading-tight mb-3 md:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#0d6e33]">
                    {stat.value === "$63,300" ? (
                      <span dangerouslySetInnerHTML={{ 
                        __html: formatValue(stat.value, animatedValues[stat.value]) 
                      }} />
                    ) : (
                      formatValue(stat.value, animatedValues[stat.value])
                    )}
                  </div>
                  <div className="space-y-0">
                    <div className="[font-family:'Playfair_Display',serif] font-normal text-[#0c0c0c] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] leading-relaxed transition-colors duration-300 group-hover:text-[#0e823e]">
                      {stat.label}
                    </div>
                    <div className="[font-family:'Playfair_Display',serif] font-bold text-[#0c0c0c] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] leading-relaxed transition-colors duration-300 group-hover:text-[#0e823e]">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
