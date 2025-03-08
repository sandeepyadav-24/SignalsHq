"use client";
import { useEffect, useState } from "react";
import Faq from "@/components/Faq";

interface FloatingElement {
  size: string;
  color: string;
  animation: string;
  shape?: string;
  blur?: string;
  rotate?: string;
  backdrop?: string;
  glow?: string;
}

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "26",
      yearlyPrice: "269",
      features: ["2 seats", "Simple support", "Simple onboarding features"],
    },
    {
      name: "Pro",
      price: "49",
      yearlyPrice: "499",
      features: [
        "5 seats",
        "Expert support",
        "Monthly payroll",
        "Third party integrations",
        "Advanced onboarding features",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "179",
      yearlyPrice: "1,799",
      features: [
        "Unlimited seats",
        "Priority 1–1 support",
        "Monthly payroll",
        "Third party integrations",
        "Advanced onboarding features",
        "Dedicated HR expert",
        "Custom admin permissions",
      ],
    },
  ];

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

  // Enhanced floating elements configuration
  const floatingElements: FloatingElement[] = [
    // Gradient orbs
    {
      size: "w-[600px] h-[600px]",
      color:
        "bg-gradient-to-br from-blue-400/30 via-indigo-500/20 to-purple-500/30",
      animation: "animate-float-slow",
      shape: "rounded-full",
      blur: "blur-[80px]",
    },
    {
      size: "w-[500px] h-[500px]",
      color:
        "bg-gradient-to-tr from-purple-400/30 via-blue-500/20 to-indigo-500/30",
      animation: "animate-float-alt",
      shape: "rounded-full",
      blur: "blur-[60px]",
    },
    // Decorative diamonds
    {
      size: "w-12 h-12",
      color: "bg-blue-500/40",
      animation: "animate-float",
      rotate: "rotate-45",
      backdrop: "backdrop-blur-sm",
    },
    {
      size: "w-10 h-10",
      color: "bg-purple-500/40",
      animation: "animate-float-alt",
      rotate: "-rotate-45",
      backdrop: "backdrop-blur-sm",
    },
    // Small particles
    ...Array(8)
      .fill(null)
      .map(() => ({
        size: "w-3 h-3",
        color: "bg-blue-400/50",
        animation: "animate-float-fast",
        shape: "rounded-full",
        glow: "animate-pulse",
      })),
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.animation}`}
            style={{
              top: `${Math.random() * 80 + 10}%`, // Keep elements away from edges
              left: `${Math.random() * 80 + 10}%`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              animationDelay: `${index * 0.3}s`,
              opacity: 0.8,
            }}
          >
            <div
              className={`
                ${element.size}
                ${element.color}
                ${element.shape || ""}
                ${element.rotate || ""}
                ${element.blur || ""}
                ${element.backdrop || ""}
                ${element.glow || ""}
                transition-all
                duration-300
              `}
            />
          </div>
        ))}
      </div>

      {/* Header Section with enhanced styling */}
      <div className="relative isolate pt-24 pb-12 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-blue-500 animate-pulse" />
              <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-100" />
              <div className="w-2 h-2 bg-blue-500 animate-pulse delay-200" />
              <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-300" />
              <div className="w-2 h-2 bg-blue-500 animate-pulse delay-400" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 bg-clip-text text-transparentbg-gradient-to-r from-blue-600 to-indigo-600 ">
              Transparent pricing for you and your team
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              Transparent pricing, with clear, accessible rates. Everyone can
              focus on what matters most — achieving your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards with enhanced styling */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white ring-4 ring-blue-600/20 shadow-xl shadow-blue-600/20"
                  : "bg-white/80 backdrop-blur-sm text-gray-900 shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  Popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">
                  ${plan.price}
                </span>
                <span
                  className={plan.popular ? "text-gray-100" : "text-gray-600"}
                >
                  /mo
                </span>
              </p>
              <p
                className={`text-sm ${
                  plan.popular ? "text-gray-100" : "text-gray-600"
                }`}
              >
                or ${plan.yearlyPrice} yearly
              </p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg
                      className={`h-6 w-6 flex-none ${
                        plan.popular ? "text-white" : "text-blue-600"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Trusted By Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 py-24 relative overflow-hidden rounded-[32px] mx-8 shadow-xl">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-4 -left-4">
            <div className="w-8 h-8 bg-white/20 rotate-45" />
          </div>
          <div className="absolute -top-4 -right-4">
            <div className="w-8 h-8 bg-white/20 rotate-45" />
          </div>
          <div className="absolute -bottom-4 -left-4">
            <div className="w-8 h-8 bg-white/20 rotate-45" />
          </div>
          <div className="absolute -bottom-4 -right-4">
            <div className="w-8 h-8 bg-white/20 rotate-45" />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center">
            {/* Decorative diamonds */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-white animate-pulse" />
              <div className="w-2 h-2 bg-white rotate-45 animate-pulse delay-100" />
              <div className="w-2 h-2 bg-white animate-pulse delay-200" />
              <div className="w-2 h-2 bg-white rotate-45 animate-pulse delay-300" />
              <div className="w-2 h-2 bg-white animate-pulse delay-400" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-16">
              Trusted By 8,000+ Leading Companies
            </h2>

            {/* Animated Logo Marquee */}
            <div className="w-full overflow-hidden relative">
              <div className="flex animate-marquee space-x-32 whitespace-nowrap">
                <span className="text-2xl font-serif font-bold text-white/90">
                  Accent
                </span>
                <span className="text-2xl font-sans font-extrabold tracking-wider text-white/90">
                  IRENE
                </span>
                <span className="text-2xl font-mono font-bold text-white/90">
                  n.a
                </span>
                <span className="text-2xl font-serif italic font-bold text-white/90">
                  Compose
                </span>
                <span className="text-2xl font-sans font-black text-white/90">
                  SOMEDAY
                </span>

                {/* Duplicate set for seamless loop */}
                <span className="text-2xl font-serif font-bold text-white/90">
                  Accent
                </span>
                <span className="text-2xl font-sans font-extrabold tracking-wider text-white/90">
                  IRENE
                </span>
                <span className="text-2xl font-mono font-bold text-white/90">
                  n.a
                </span>
                <span className="text-2xl font-serif italic font-bold text-white/90">
                  Compose
                </span>
                <span className="text-2xl font-sans font-black text-white/90">
                  SOMEDAY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
