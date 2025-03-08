"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Feature() {
  // Floating elements configuration
  const floatingElements = [
    // Large gradient orbs
    {
      size: "w-64 h-64",
      color:
        "bg-gradient-to-bl from-blue-400/25 via-indigo-500/20 to-purple-500/15",
      animation: "animate-float-slow",
      shape: "rounded-full",
      opacity: "opacity-60",
      blur: "blur-3xl",
    },
    {
      size: "w-72 h-72",
      color:
        "bg-gradient-to-tr from-purple-300/20 via-blue-400/15 to-indigo-400/10",
      animation: "animate-float-alt",
      shape: "rounded-full",
      opacity: "opacity-50",
      blur: "blur-3xl",
    },
    // Medium decorative shapes
    {
      size: "w-24 h-24",
      color:
        "bg-gradient-to-bl from-blue-400/25 via-indigo-500/20 to-purple-500/15",
      animation: "animate-float",
      shape: "rounded-xl",
      opacity: "opacity-60",
      rotate: "rotate-45",
    },
    {
      size: "w-20 h-20",
      color:
        "bg-gradient-to-tr from-purple-400/25 via-blue-500/20 to-indigo-500/15",
      animation: "animate-float-alt",
      shape: "rounded-xl",
      opacity: "opacity-50",
      rotate: "-rotate-12",
    },
    // Diamond shapes
    {
      size: "w-12 h-12",
      color:
        "bg-gradient-to-r from-blue-500/30 via-indigo-600/25 to-purple-600/20",
      animation: "animate-float-fast",
      rotate: "rotate-45",
      opacity: "opacity-70",
    },
    {
      size: "w-8 h-8",
      color:
        "bg-gradient-to-r from-purple-500/30 via-blue-600/25 to-indigo-600/20",
      animation: "animate-enhanced-sparkle",
      rotate: "rotate-45",
      opacity: "opacity-60",
    },
    // Small particles
    ...Array(12)
      .fill(null)
      .map(() => ({
        size: "w-2 h-2",
        color: "bg-gradient-to-br from-blue-400/50 to-purple-500/50",
        animation: "animate-float-fast",
        rotate: "rotate-45",
        opacity: "opacity-70",
      })),
    // Line elements
    {
      size: "w-32 h-[1px]",
      color:
        "bg-gradient-to-r from-blue-400/50 via-indigo-500/40 to-transparent",
      animation: "animate-float-slow",
      opacity: "opacity-70",
      rotate: "rotate-[30deg]",
    },
    {
      size: "w-24 h-[1px]",
      color:
        "bg-gradient-to-r from-purple-400/50 via-blue-500/40 to-transparent",
      animation: "animate-float-alt",
      opacity: "opacity-60",
      rotate: "-rotate-[60deg]",
    },
    // Circle rings
    {
      size: "w-16 h-16",
      color: "bg-transparent border-2 border-blue-400/40",
      animation: "animate-float-slow",
      shape: "rounded-full",
      opacity: "opacity-70",
    },
    {
      size: "w-12 h-12",
      color: "bg-transparent border-2 border-purple-400/40",
      animation: "animate-float-alt",
      shape: "rounded-full",
      opacity: "opacity-60",
    },
    // Dot clusters
    ...Array(3)
      .fill(null)
      .map(() => ({
        size: "w-1 h-1",
        color: "bg-blue-500/60",
        animation: "animate-float-fast",
        shape: "rounded-full",
        opacity: "opacity-80",
      })),
    ...Array(3)
      .fill(null)
      .map(() => ({
        size: "w-1 h-1",
        color: "bg-purple-500/60",
        animation: "animate-enhanced-sparkle",
        shape: "rounded-full",
        opacity: "opacity-80",
      })),
  ];

  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const generateElements = () => {
      return floatingElements.map((base, i) => ({
        ...base,
        id: i,
        left: `${Math.random() * 85 + 5}%`,
        top: `${Math.random() * 85 + 5}%`,
        delay: `${Math.random() * 8}s`,
        scale: Math.random() * 0.5 + 0.75,
        zIndex: Math.floor(Math.random() * 20) - 10, // Random z-index for depth
      }));
    };

    setElements(generateElements());

    const interval = setInterval(() => {
      setElements(generateElements());
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
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
              zIndex: element.zIndex,
            }}
          >
            <div
              className={`
                ${element.size}
                ${element.color}
                ${element.rotate || ""}
                ${element.shape || ""}
                ${element.opacity || "opacity-50"}
                ${element.blur || ""}
                backdrop-blur-[1px]
                transition-all
                duration-300
                mix-blend-multiply
              `}
            />
          </div>
        ))}
      </div>

      {/* Background Gradient Effects */}
      <div className="absolute top-0 -left-4 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-transparent rounded-full blur-[130px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-100/40 via-blue-100/30 to-transparent rounded-full blur-[130px] -z-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-100/20 via-indigo-100/20 to-purple-100/20 rounded-full blur-[150px] -z-10" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-24">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 animate-pulse" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-100" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-200" />
            <div className="w-2 h-2 bg-blue-500 rotate-45 animate-pulse delay-300" />
            <div className="w-2 h-2 bg-blue-500 animate-pulse delay-400" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Experience The Full Range of
            <br />
            Our <span className="text-blue-600">Remarkable Tools</span>
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Streamline your audit process with our comprehensive suite of tools
            designed to enhance efficiency and accuracy
          </p>
        </div>

        {/* Feature 1: Smart Automation - Text left, Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          {/* Left Content - Text */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 font-medium">
                Smart Automation
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Boost the efficiency of your audit staff
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Say goodbye to manual vouching and test of details, and let your
              staff focus on real risk identification in forming a true and fair
              view
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors group"
              >
                Get Started
                <svg
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
              <Image
                src="https://framerusercontent.com/images/LiIz7yCgIXd4jik9Jp4niUnwMHg.png"
                alt="Smart Automation Dashboard"
                width={1000}
                height={800}
                className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-50 rounded-xl rotate-12 -z-10" />
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-50 rounded-xl -rotate-12 -z-10" />
          </div>
        </div>

        {/* Feature 2: Risk & Compliance - Image left, Text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-green-500/10" />
              <Image
                src="https://framerusercontent.com/images/98CzsUUGmmK6oyoDzgW6OdrfVGk.png"
                alt="Risk & Compliance Dashboard"
                width={1000}
                height={800}
                className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-50 rounded-xl rotate-12 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-50 rounded-xl -rotate-12 -z-10" />
          </div>

          {/* Right Content - Text */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 font-medium">
                Risk & Compliance
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Be compliant with Auditing Standards
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Minimize human error in audits by leveraging the latest
              technologies to assist your team in ground work. Ensure accuracy
              with clear citations and audit trails
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors group"
              >
                Learn More
                <svg
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Feature 3: Collaboration - Text left, Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 font-medium">Collaboration</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Drive collaboration with clients
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Centralize your document management and ensure clear communication
              with clients. Maintain proper control and trail for all PBC data
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors group"
              >
                Get Started
                <svg
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10" />
              <Image
                src="https://framerusercontent.com/images/OiYjGz6hB7ikya9u9pgQXre0PM4.jpeg"
                alt="Collaboration Features"
                width={1000}
                height={800}
                className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-50 rounded-xl rotate-12 -z-10" />
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-50 rounded-xl -rotate-12 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
