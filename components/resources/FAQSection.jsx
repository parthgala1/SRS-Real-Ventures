"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What documents are required for a home loan?",
      answer:
        "You'll need identity proof (Aadhaar, PAN), address proof, income proof (salary slips, IT returns), bank statements for 6 months, property documents, and passport-size photographs.",
    },
    {
      id: 2,
      question: "How is the EMI calculated?",
      answer:
        "EMI is calculated using the formula: [P x R x (1+R)^N] / [(1+R)^N-1], where P is principal amount, R is monthly interest rate, and N is tenure in months.",
    },
    {
      id: 3,
      question: "What is the maximum loan amount I can get?",
      answer:
        "The loan amount depends on your income, credit score, and repayment capacity. Generally, banks offer up to 80-90% of the property value or 60 times your monthly income, whichever is lower.",
    },
    {
      id: 4,
      question: "Can I prepay my home loan?",
      answer:
        "Yes, most banks allow prepayment. For floating rate loans, there's usually no penalty. For fixed rate loans, some banks may charge a penalty of 2-3% on the outstanding amount.",
    },
    {
      id: 5,
      question: "What is stamp duty and registration?",
      answer:
        "Stamp duty is a tax paid to the state government for property registration. Registration charges are fees paid for legally registering the property in your name. Rates vary by state.",
    },
    {
      id: 6,
      question: "How long does the loan approval process take?",
      answer:
        "The home loan approval process typically takes 7-15 working days, depending on the completeness of your documentation and the bank's verification process.",
    },
    {
      id: 7,
      question:
        "What is the difference between fixed and floating interest rates?",
      answer:
        "Fixed rates remain constant throughout the loan tenure, while floating rates change with market conditions. Floating rates are generally lower initially but can fluctuate.",
    },
    {
      id: 8,
      question: "Can I transfer my home loan to another bank?",
      answer:
        "Yes, you can transfer your home loan through a balance transfer. This is beneficial if you find a better interest rate or service with another lender.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="bg-[#92C3DD] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#134B70] text-center mb-8 sm:mb-10 lg:mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq) => (
            <Collapsible
              key={faq.id}
              open={openFaq === faq.id}
              onOpenChange={() => toggleFaq(faq.id)}
            >
              <CollapsibleTrigger className="w-full">
                <Card className="cursor-pointer hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-3 p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-left text-[#134B70] text-sm sm:text-base lg:text-lg font-semibold pr-2">
                        {faq.question}
                      </CardTitle>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-[#134B70] transition-transform duration-200 flex-shrink-0 ${
                          openFaq === faq.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Card className="mt-2 border-t-0">
                  <CardContent className="pt-3 sm:pt-4 p-4 sm:p-6">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
