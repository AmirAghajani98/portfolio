"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: { question: string; answer: string }[] = [
    {
      question: "How can I get started?",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
    },
    {
      question: "What is the pricing structure?",
      answer:
        "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24 w-full">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className=" mx-auto text-center">
          <h2 className="sm:text-4xl text-2xl sm:w-[50%] mx-auto sm:pb-10 pb-4 sm:mb-20 mb-10 font-bold border-b border-slate-500 dark:border-slate-600 dark:text-gray-200 text-gray-950 md:text-4xl font-sans">
            Explore Common Questions
          </h2>
        </div>
        <div className="w-3/6 mx-auto mt-8 space-y-4 md:mt-16">
          {faqItems.map((item, index: number) => (
            <div
              key={index}
              className="transition-all duration-200 bg-slate-400 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-60 border border-gray-200 dark:border-slate-600 shadow-lg cursor-pointer"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-slate-900 dark:text-slate-200 font-mono">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 font-sans">
                  <p className="text-gray-600 dark:text-gray-200">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 font-mono text-base mt-9">
          Still have questions?{" "}
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Contact our support
          </span>
        </p>
      </div>
    </section>
  );
}
