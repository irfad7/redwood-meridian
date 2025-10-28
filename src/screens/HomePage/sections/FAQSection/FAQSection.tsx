import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface FAQSectionProps {
  onShowEmailPopup: () => void;
}

const faqData = [
  {
    question: "What is PI Track?",
    answer: "A done-for-you case-generation system for personal injury firms that delivers car accident cases with trackable ROI."
  },
  {
    question: "How many cases can we expect per month?",
    answer: "Most qualified firms aim for 10 to 20+ auto accident clients per month. Results vary by market, offer, and intake speed."
  },
  {
    question: "How fast can we launch?",
    answer: "Typically 7 to 14 days from green light to live ads, assuming we have access to ad accounts, call tracking, and your intake calendar."
  },
  {
    question: "What do you need from us to start?",
    answer: "Ad account access, CRM or call tracking, intake availability, approved creative, and a point of contact who can make decisions fast."
  },
  {
    question: "What budget do we need?",
    answer: "Plan on $10k to $15k per month in ad spend. Some markets need more. We scale only when your signed-case economics are proven."
  },
  {
    question: "Are the leads exclusive?",
    answer: "Yes. We generate demand only for your firm in your target geos. No lead reselling."
  },
  {
    question: "How do you track ROI?",
    answer: "Every touch is tracked from click to signed case. We connect ads, call tracking, and CRM so cost per signed case and ROI are visible."
  },
  {
    question: "What if our intake is slow?",
    answer: "We help you tighten routing, hours, and scripts. Speed to lead is critical. We target under 60 seconds. If response time slips, signed cases drop."
  },
  {
    question: "Do you set up follow-up?",
    answer: "Yes. We install AI-assisted follow-up with up to 15 touchpoints in 7 days across phone, SMS, and email, aligned with your state rules."
  },
  {
    question: "Can you work with our existing CRM?",
    answer: "Yes. We integrate with GoHighLevel, HubSpot, and virtually every other CRM. If you do not have a CRM, we'll set one up with call tracking."
  },
  {
    question: "How do you qualify prospects?",
    answer: "We use geo, liability, injury, and coverage filters at the ad and form level. Disposition reasons are logged so we can improve targeting."
  },
  {
    question: "What about compliance and bar rules?",
    answer: "All creatives and follow-ups are reviewed for advertising and solicitation rules in your state. TCPA consent and opt-out language are standard."
  },
  {
    question: "What counts as success?",
    answer: "Signed cases at or below your target cost per signed case. We align on that number before launch and report to it weekly."
  },
  {
    question: "Do you guarantee results?",
    answer: "With over five years of experience generating high-volume PI cases across US markets, we've designed and perfected a system that delivers proven, predictable and scalable results. The success of our partnership with your firm highly depends on your qualification. We operate on measurable KPIs, fast iteration, and clear stop-loss rules. If economics are not working, we fix or pause."
  },
  {
    question: "How fast until we see signed cases?",
    answer: "Many firms see the first signed cases in the first 2 to 4 weeks after go-live. Bigger markets or new firms may take longer."
  },
  {
    question: "Who owns the data and ad accounts?",
    answer: "You do. All campaigns, audiences, and CRM data live in your accounts."
  },
  {
    question: "Can you scale beyond 20 cases per month?",
    answer: "Yes, if your signed-case economics hold. We scale in phases to protect ROI and cash flow."
  },
  {
    question: "Do you support nights and weekends?",
    answer: "We recommend 7-day intake coverage. If you cannot staff it, we add overflow routing and after-hours automations."
  },
  {
    question: "What intake scripts do you provide?",
    answer: "Short discovery, qualification, and objection-handling scripts that match your practice and local norms."
  },
  {
    question: "Can you target specific case values?",
    answer: "We can bias toward higher-value injuries with creative, copy, form logic, and audience exclusions. True case value depends on facts and venue."
  },
  {
    question: "What if we already run ads?",
    answer: "We audit your current setup and keep what works. Then we plug in our creatives, tracking, and follow-up stack."
  },
  {
    question: "How do we get started?",
    answer: "Hit \"See If You Qualify,\" share your market and budget, and we'll confirm fit, economics, and a launch plan."
  }
];

export const FAQSection = ({ onShowEmailPopup }: FAQSectionProps): JSX.Element => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full px-4 pb-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] tracking-[-0.5px] leading-tight mb-8">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 mb-16">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-[8.05px] shadow-[0px_0px_40.25px_#002c7a1a] border-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="[font-family:'Playfair_Display',serif] font-bold text-[#0c0c0c] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] tracking-[0] leading-[1.4] pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-[#4d5256] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#4d5256] flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="[font-family:'Playfair_Display',serif] font-normal text-[#4d5256] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] tracking-[0] leading-[1.5]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={onShowEmailPopup}
            className="h-14 md:h-16 lg:h-18 bg-[#0e823e] hover:bg-[#0c7235] text-white rounded-[3.02px] border border-[#00000021] shadow-[0px_4.03px_8.05px_#001c3826] px-8 py-6"
          >
            <span className="[font-family:'Playfair_Display',serif] font-medium text-[35.2px] tracking-[0] leading-[48.3px] flex items-center gap-2">
              See If You Qualify
              <ArrowRight className="w-6 h-6" />
            </span>
          </Button>

          <p className="text-[#60606b] [font-family:'Playfair_Display',serif] font-medium text-[14.1px] tracking-[0] leading-[19.7px] mt-2">
            Completely Done-For-You Case-Generation System
          </p>
        </div>
      </div>
    </section>
  );
};