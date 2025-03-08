"use client";
import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "How does SignalsHQ work?",
      answer:
        "SignalsHQ is like your extended team. It brings all your data management in one place, where you can request PBC from clients, standardize the data, analyse flux and finally conduct test of details for relevant transactions. All of this is done in one place with complete audit trails",
    },
    {
      question: "Is my data secure?",
      answer:
        "Rest assured, we take your data security seriously. Our robust measures ensure that your information is kept safe and secure at all times.",
    },
    {
      question: "What use cases does SignalsHQ work for?",
      answer:
        "SignalsHQ is built for financial auditors. Whether you are in external audit, internal audit, government audit or non-profit audits, SignalsHQ can help automate a chunk of your fieldwork.",
    },
    {
      question: "How do I get started?",
      answer:
        "Just write to us on contact@signalsHQ.io and we shall get in touch with you",
    },
  ];

  // Decorative elements configuration
  const decorativeElements = [
    // Top section
    {
      top: "-20%",
      left: "10%",
      size: "w-2 h-2",
      color: "bg-yellow-400",
      rotate: "rotate-45",
    },
    {
      top: "-15%",
      right: "15%",
      size: "w-3 h-3",
      color: "bg-blue-500",
      rotate: "rotate-12",
    },
    {
      top: "-25%",
      left: "30%",
      size: "w-2 h-2",
      color: "bg-green-400",
      rotate: "rotate-45",
    },
    {
      top: "-10%",
      right: "40%",
      size: "w-2 h-2",
      color: "bg-red-400",
      rotate: "-rotate-12",
    },

    // Middle section
    {
      top: "30%",
      left: "5%",
      size: "w-3 h-3",
      color: "bg-blue-400",
      rotate: "rotate-45",
    },
    {
      top: "45%",
      right: "8%",
      size: "w-2 h-2",
      color: "bg-yellow-500",
      rotate: "-rotate-12",
    },
    {
      top: "35%",
      left: "25%",
      size: "w-2 h-2",
      color: "bg-green-500",
      rotate: "rotate-90",
    },
    {
      top: "50%",
      right: "25%",
      size: "w-3 h-3",
      color: "bg-red-500",
      rotate: "rotate-45",
    },

    // Bottom section
    {
      top: "75%",
      left: "15%",
      size: "w-2 h-2",
      color: "bg-blue-500",
      rotate: "-rotate-45",
    },
    {
      top: "85%",
      right: "20%",
      size: "w-3 h-3",
      color: "bg-yellow-400",
      rotate: "rotate-12",
    },
    {
      top: "90%",
      left: "40%",
      size: "w-2 h-2",
      color: "bg-green-400",
      rotate: "rotate-90",
    },
    {
      top: "80%",
      right: "35%",
      size: "w-2 h-2",
      color: "bg-red-400",
      rotate: "-rotate-12",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Elements Container */}
      <div className="absolute inset-0 pointer-events-none">
        {decorativeElements.map((element, index) => (
          <div
            key={index}
            className={`absolute animate-float`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div
              className={`${element.size} ${element.color} ${element.rotate} opacity-70`}
            />
          </div>
        ))}
      </div>

      {/* Background Gradient Effects */}
      <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 animate-pulse" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-100" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-200" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-300" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-400" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Have questions about SignalsHQ? We've got answers.
            <br />
            For anything else, email us at{" "}
            <a
              href="mailto:contact@signalsHQ.io"
              className="text-blue-600 hover:text-blue-700"
            >
              contact@signalsHQ.io
            </a>
          </p>
        </div>

        <div className="mx-auto max-w-3xl mt-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl transition-all duration-200 hover:bg-gray-100"
              >
                <button
                  className="flex justify-between items-center w-full text-left px-8 py-6 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <div
                    className={`ml-6 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="h-px bg-gray-200 mb-6" />
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
