"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  // Floating elements configuration
  const floatingElements = [
    // Large gradient orbs
    {
      size: "w-[600px] h-[600px]",
      color:
        "bg-gradient-to-br from-blue-400/20 via-indigo-500/15 to-purple-500/10",
      animation: "animate-float-slow",
      shape: "rounded-full",
      opacity: "opacity-70",
      blur: "blur-[80px]",
      zIndex: -1,
    },
    {
      size: "w-[500px] h-[500px]",
      color:
        "bg-gradient-to-tr from-purple-400/20 via-blue-500/15 to-indigo-500/10",
      animation: "animate-float-alt",
      shape: "rounded-full",
      opacity: "opacity-60",
      blur: "blur-[100px]",
      zIndex: -1,
    },
    // Animated rings
    {
      size: "w-40 h-40",
      color: "bg-transparent border-[2px] border-dashed border-blue-400/30",
      animation: "animate-spin-slow",
      shape: "rounded-full",
      opacity: "opacity-70",
      zIndex: -1,
    },
    // Code symbols
    {
      size: "w-16 h-16",
      content: "</>",
      color: "text-blue-500/30",
      animation: "animate-float-alt",
      className: "font-mono text-2xl font-bold",
      opacity: "opacity-70",
      zIndex: -1,
    },
    // Decorative dots
    ...Array(12)
      .fill(null)
      .map(() => ({
        size: "w-2 h-2",
        color: "bg-blue-400/40",
        animation: "animate-pulse-glow",
        shape: "rounded-full",
        opacity: "opacity-60",
        blur: "blur-sm",
        zIndex: -1,
      })),
  ];

  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const generateElements = () => {
      return floatingElements.map((base, i) => ({
        ...base,
        id: i,
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        delay: `${Math.random() * 5}s`,
        scale: Math.random() * 0.3 + 0.7,
      }));
    };

    setElements(generateElements());
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {elements.map((element) => (
          <div
            key={element.id}
            className={`absolute ${element.animation}`}
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              transform: `scale(${element.scale})`,
              zIndex: element.zIndex || -1,
            }}
          >
            {element.content ? (
              <div
                className={`
                ${element.size}
                ${element.color}
                ${element.className || ""}
                ${element.opacity || "opacity-70"}
                flex items-center justify-center
                transition-all duration-300
              `}
              >
                {element.content}
              </div>
            ) : (
              <div
                className={`
                ${element.size}
                ${element.color}
                ${element.rotate || ""}
                ${element.shape || ""}
                ${element.opacity || "opacity-70"}
                ${element.blur || ""}
                transition-all duration-300
              `}
              />
            )}
          </div>
        ))}
      </div>

      {/* Enhanced gradient backgrounds */}
      <div className="absolute top-0 -left-4 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-transparent rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-100/30 via-blue-100/20 to-transparent rounded-full blur-[120px] -z-10" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 animate-pulse" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-100" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-200" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-300" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-blue-600">Connect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your audit process? Get in touch with our team
            and discover how we can help streamline your workflow.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-gray-600">contact@signalsHQ.io</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Schedule a Demo</h3>
                  <p className="text-gray-600">See SignalsHQ in action</p>
                </div>
              </div>
              <button className="w-full px-4 py-2 mt-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                Book a Time
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
              <p className="mb-4 opacity-90">
                Transform your audit workflow with our cutting-edge solutions.
              </p>
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
