import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const ServicesSection = (): JSX.Element => {
  const faqItems = [
    {
      id: "item-1",
      question: "Do I have to pay for updates?",
      answer: "No, all updates to the PI Track system are included in your subscription at no additional cost."
    },
    {
      id: "item-2",
      question: "Are my funnels secure?",
      answer: "Yes, we use enterprise-grade security measures to protect your data and client information."
    },
    {
      id: "item-3",
      question: "If I have questions, is there someone I can talk to?",
      answer: "Absolutely! You'll have access to our dedicated support team and your account manager."
    },
    {
      id: "item-4",
      question: "If I cancel my account, will I lose my data?",
      answer: "You'll have 30 days to export your data before account closure. We provide full data export tools."
    },
    {
      id: "item-5",
      question:
        "Can I integrate my existing CRM and tools?",
      answer: "Yes, PI Track integrates with most popular legal CRMs and practice management software."
    },
    {
      id: "item-6",
      question: "Do I have to install anything?",
      answer: "No installation required. PI Track is completely cloud-based and accessible from any device."
    },
    {
      id: "item-7",
      question: "How do I cancel if needed?",
      answer: "You can cancel anytime with 30 days notice. No long-term contracts or cancellation fees."
    },
    {
      id: "item-8",
      question: "Can you handle the load?",
      answer: "Yes, our infrastructure is built to handle high-volume campaigns and can scale with your growth."
    },
    {
      id: "item-9",
      question: "Who owns the data / content / subscribers?",
      answer: "You own all your data, leads, and content. We never claim ownership of your business assets."
    },
    {
      id: "item-10",
      question: "Can I host the pages myself?",
      answer: "The system is designed to work optimally on our platform, but we can discuss custom hosting solutions."
    },
  ];

  return (
    <section className="w-full py-5 px-4">
      <div className="max-w-[1147px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-[40.3px] tracking-[-0.5px] leading-[48.3px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-[1115px] mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-none"
              >
                <AccordionTrigger className="[font-family:'Playfair_Display',serif] font-bold text-[#0c0c0c] text-[20.1px] tracking-[0] leading-[24.2px] hover:no-underline py-6 px-0">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-gray-600 [font-family:'Playfair_Display',serif] text-[16px] leading-[24px]">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
