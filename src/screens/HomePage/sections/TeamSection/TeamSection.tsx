import React from "react";
import { TestimonialCard } from "./TestimonialCard";
import mckinny from '../../../../assets/images/mckinny.png';
import dallas from '../../../../assets/images/dallas.png';
import bridgette from '../../../../assets/images/bridgette.png';
import jamie from '../../../../assets/images/jamie.png';
import tim from '../../../../assets/images/tim.png';
import malik from '../../../../assets/images/malik.png';
import brittani from '../../../../assets/images/Brittani.png';
import byron from '../../../../assets/images/Byron.png';

const testimonialData = [
  {
    name: "Demarcus Ward, Esq.",
    location: "McKinney, Texas",
    achievement: "$2,700,000 in 12 months",
    quote:
      "This program and group have changed the course of my entire practice. Its impact has been felt throughout my entire office. It is simply the best investment that we have ever made. We are forever grateful.",
    timeFrame: "12 Months",
    signedClients: "540",
    revenue: "$2,700,000",
    costPerAcquisition: "$685",
    roi: "630%",
    imagePosition: "right" as const,
    imageSrc: mckinny,
    caseStudyCategory: "Personal injury, criminal defense, business",
  },
  {
    name: "Bridgette Williams, Esq.",
    location: "Dallas, Texas",
    achievement: "$240,000 in 5 months",
    quote:
      "My experience with Redwood Meridian has been fantastic. They have been absolutely wonderful with running our ads and giving me continuous updates and recommendations. They are dedicated to making sure my firm grows.",
    timeFrame: "5 Months",
    signedClients: "40",
    revenue: "$240,000",
    costPerAcquisition: "$856",
    roi: "600%",
    imagePosition: "left" as const,
    imageSrc: bridgette,
    caseStudyCategory: "Personal injury, car accidents, slip and falls",
  },
  {
    name: "Jose Escobar, Esq.",
    location: "Dallas, Texas",
    achievement: "$150,000 in 5 months",
    quote:
      "Our firm hired Redwood Meridian to help with our firm's Facebook advertising, and the results have been outstanding. Their team is knowledgeable, responsive, and truly understands the legal industry.",
    timeFrame: "5 Months",
    signedClients: "25",
    revenue: "$150,000",
    costPerAcquisition: "$993",
    roi: "504%",
    imagePosition: "right" as const,
    imageSrc: dallas,
    caseStudyCategory: "Wrongful death, car accident, and more",
  },
  {
    name: "Jamie Alvarez, Esq.",
    location: "Miramar, Florida",
    achievement: "$100,000 in 3 months",
    quote:
      "Sam and the rest of the team are wonderful. The program has really taught us how to work strategies effectively. They help us find the problems and solutions. We are very happy with what they are teaching us.",
    timeFrame: "3 Months",
    signedClients: "15",
    revenue: "$100,000",
    costPerAcquisition: "$1,466",
    roi: "354%",
    imagePosition: "left" as const,
    imageSrc: jamie,
    caseStudyCategory: "Property insurance and personal injury claims",
  },
  {
    name: "Tim Dominguez, Esq.",
    location: "Irvine, California",
    achievement: "9 new cases in 30 days",
    quote:
      "Precision beats guesswork - 9 signed cases in 30 days, generating a 789% ROI. That's the power of phased execution. It's not about spending more - it's about spending smart.",
    timeFrame: "30 Days",
    signedClients: "9",
    revenue: "$72,000",
    costPerAcquisition: "$900",
    roi: "789%",
    imagePosition: "right" as const,
    imageSrc: tim,
    caseStudyCategory: "Personal injury, car, truck, rideshare",
  },
  {
    name: "Brittani Glidden, Esq.",
    location: "Denver, Colorado",
    achievement: "15 new cases in 4 weeks",
    quote:
      "Stopped guessing and started following the process. Only 4 short weeks later, 15 clients had already signed up — proof the systems were finally doing the heavy lifting.",
    timeFrame: "4 Weeks",
    signedClients: "15",
    costPerAcquisition: "$291",
    imagePosition: "left" as const,
    imageSrc: brittani,
    caseStudyCategory: "Personal injury, criminal, family, immigration",
  },
  {
    name: "Malik Hannah, Esq.",
    location: "Rowlett, Texas",
    achievement: "3 new cases in 10 days",
    quote:
      "Success isn't about doing everything at once - it's about doing the right things in the right order. Turning $843 into 3 signed cases in under 30 days. That's not luck, that's strategy.",
    timeFrame: "10 Days",
    signedClients: "3",
    revenue: "$15,000",
    costPerAcquisition: "$281",
    roi: "1,679%",
    imagePosition: "right" as const,
    imageSrc: malik,
    caseStudyCategory: "Personal injury, car accidents",
  },
  {
    name: "Byron Bailey, Esq.",
    location: "Dallas-Fort Worth, Texas",
    achievement: "$60,000 in 60 days",
    quote:
      "Signed 15 new cases in just 4 weeks. Once the systems were in place, the growth came fast. First the CRM setup was completed and then came ads and proper tracking. In 60 days, firm worked like a well oiled machine.",
    timeFrame: "60 Days",
    signedClients: "15",
    revenue: "$60,000",
    costPerAcquisition: "$307",
    roi: "1,204%",
    imagePosition: "left" as const,
    imageSrc: byron,
    caseStudyCategory: "Personal injury, car, truck, rideshare, slips, bites",
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-4 pb-16">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-10">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-${index}`}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
