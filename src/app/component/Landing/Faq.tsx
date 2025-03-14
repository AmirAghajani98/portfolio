"use client";

import Link from "next/link";
import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: { question: string; answer: string }[] = [
    {
      question: "How can I get started with AghaTech ?",
      answer:
        "Getting started is easy! Simply reach out to us through our contact form or schedule a free consultation. We’ll discuss your goals, assess your needs, and create a customized plan to help your business grow.",
    },
    {
      question: "What services does AghaTech offer ?",
      answer:
        "AghaTech offers a wide range of digital marketing services, including **website design and development**, **SEO optimization**, **social media management**, **digital advertising**, and **strategic marketing planning**. We tailor our services to meet your unique business needs.",
    },
    {
      question: "What is the pricing for AghaTech's services ?",
      answer:
        "Our pricing is flexible and depends on the scope of your project, the services you require, and your specific goals. We offer both one-time project fees and ongoing monthly plans to suit your budget. Contact us for a detailed quote!",
    },
    {
      question: "What kind of support does AghaTech provide ?",
      answer:
        "We provide comprehensive support to ensure your success. Our team is available via email, chat, and phone to answer your questions, troubleshoot issues, and provide guidance. We also offer a detailed knowledge base for self-help resources.",
    },
    {
      question: "How long does it take to see results from SEO ?",
      answer:
        "The timeline for seeing results varies depending on factors like your industry, competition, and the strategies we implement. Typically, SEO results can take 3-6 months to show significant improvements, while digital advertising campaigns can yield quicker results. We’ll keep you updated on progress every step of the way.",
    },
    {
      question: "Does AghaTech work with small businesses ?",
      answer:
        "Absolutely! We specialize in helping small and medium-sized businesses grow their online presence. Our services are scalable and designed to fit businesses of all sizes.",
    },
    {
      question: "Do you offer free consultations ?",
      answer:
        "Yes, we offer free consultations to discuss your goals, challenges, and how we can help. It’s a no-obligation opportunity to learn more about our services and see if we’re the right fit for your business.",
    },
    {
      question: "What makes AghaTech different from others ?",
      answer:
        "At AghaTech, we focus on delivering **personalized strategies and design**, **transparent communication**, and **measurable results**. Our team of experts is dedicated to your success, and we pride ourselves on building long-term partnerships with our clients.",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24 w-full">
      <div className="px-2 mx-auto sm:px-6 lg:px-8">
        <div className=" mx-auto text-center">
          <h2 className="sm:text-4xl text-2xl sm:w-[50%] mx-auto sm:pb-10 pb-4 sm:mb-20 mb-10 font-bold border-b border-slate-500 dark:border-slate-600 dark:text-gray-200 text-gray-950 md:text-4xl font-sans">
            FAQ{" "}
          </h2>
        </div>
        <div className="sm:w-3/6 w-full mx-auto mt-8 space-y-4 md:mt-16">
          {faqItems.map((item, index: number) => (
            <div
              key={index}
              className="transition-all duration-200 bg-slate-400 dark:bg-slate-800 bg-opacity-40 dark:bg-opacity-60 border border-gray-200 dark:border-slate-600 shadow-lg cursor-pointer rounded-lg"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex sm:text-lg text-left font-semibold text-slate-900 dark:text-slate-200 font-sans">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 dark:text-gray-400 text-gray-900 transition-transform duration-200 ${
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
                  <p className="text-gray-800 dark:text-gray-200">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto w-full text-center mt-10">
          <Link
            className="text-center sm:flex flex flex-col text-gray-800 dark:text-gray-300 font-mono text-lg mt-9 hover:underline"
            href={"mailto:hi@aghatech.ir"}
          >
            Still have questions?{" "}
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
              Contact our support
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
