"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ValuePoints() {
  // Update the floating elements configuration with more visible colors and proper z-index
  const floatingElements = [
    // Large gradient orbs
    {
      size: "w-64 h-64",
      color:
        "bg-gradient-to-br from-blue-400/30 via-indigo-500/25 to-purple-500/20",
      animation: "animate-float-slow",
      shape: "rounded-[60%_40%_50%_50%/40%_50%_60%_50%]",
      opacity: "opacity-80",
      blur: "blur-2xl",
      zIndex: -1,
    },
    // Animated rings
    {
      size: "w-32 h-32",
      color: "bg-transparent border-[3px] border-dashed border-blue-400/40",
      animation: "animate-spin-slow",
      shape: "rounded-full",
      opacity: "opacity-80",
      zIndex: -1,
    },
    // Glowing dots
    ...Array(8)
      .fill(null)
      .map(() => ({
        size: "w-3 h-3",
        color: "bg-blue-500/50",
        animation: "animate-pulse-glow",
        shape: "rounded-full",
        opacity: "opacity-80",
        blur: "blur-sm",
        zIndex: -1,
      })),
    // Floating code symbols
    {
      size: "w-12 h-12",
      content: "{ }",
      color: "text-blue-500/40",
      animation: "animate-float-alt",
      className: "font-mono text-xl font-bold",
      opacity: "opacity-80",
      zIndex: -1,
    },
    {
      size: "w-12 h-12",
      content: "</>",
      color: "text-purple-500/40",
      animation: "animate-float",
      className: "font-mono text-xl font-bold",
      opacity: "opacity-80",
      zIndex: -1,
    },
    // Decorative lines
    {
      size: "w-48 h-[2px]",
      color:
        "bg-gradient-to-r from-blue-400/50 via-indigo-500/40 to-transparent",
      animation: "animate-float-slow",
      rotate: "rotate-[30deg]",
      opacity: "opacity-80",
      zIndex: -1,
    },
    // Additional decorative elements
    {
      size: "w-20 h-20",
      color:
        "bg-gradient-to-tr from-purple-400/30 via-blue-500/25 to-indigo-500/20",
      animation: "animate-shape-morph",
      shape: "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
      opacity: "opacity-80",
      blur: "blur-md",
      zIndex: -1,
    },
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

    const interval = setInterval(() => {
      setElements(generateElements());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background Floating Elements Container */}
      <div className="absolute z-10 inset-0 pointer-events-none overflow-hidden">
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
              // Text content elements
              <div
                className={`
                  ${element.size}
                  ${element.color}
                  ${element.className || ""}
                  ${element.opacity || "opacity-80"}
                  flex items-center justify-center
                  transition-all duration-300
                  backdrop-blur-sm
                `}
              >
                {element.content}
              </div>
            ) : (
              // Shape elements
              <div
                className={`
                  ${element.size}
                  ${element.color}
                  ${element.rotate || ""}
                  ${element.shape || ""}
                  ${element.opacity || "opacity-80"}
                  ${element.blur || ""}
                  transition-all duration-300
                  backdrop-blur-sm
                `}
              />
            )}
          </div>
        ))}
      </div>

      {/* Enhanced gradient backgrounds */}
      <div className="absolute top-0 -left-4 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-transparent rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-100/40 via-blue-100/30 to-transparent rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-50/20 via-indigo-50/20 to-purple-50/20 rounded-full blur-[150px] -z-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 animate-pulse" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-100" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-200" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-300" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-400" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            SignalsHQ is
            <br />
            built for <span className="text-blue-600">Auditors.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Our platform is designed specifically for the unique needs of audit
            professionals, helping you work smarter and deliver better results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Streamline your work</h3>
            <p className="text-gray-600">
              Automate repetitive tasks like document vouching, test of details,
              and data collection. Focus on what matters most: providing
              insights and value to your clients.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Works with your favorite tools
            </h3>
            <p className="text-gray-600">
              Seamlessly integrates with your existing audit software and
              workflow. No need to change your processes—we enhance them.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Save hours every week</h3>
            <p className="text-gray-600">
              Our clients save an average of 15+ hours per week on documentation
              tasks. That's time you can reinvest in growing your practice or
              improving work-life balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
