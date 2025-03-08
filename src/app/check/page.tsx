"use client";
// components/HeroSection.jsx
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Check() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimationComplete(true);
    }, 500);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen w-full overflow-hidden relative">
      {/* Background curved shape */}
      <div className="absolute inset-0 z-0">
        <div className="w-[140%] h-[140%] rounded-full bg-blue-50 absolute -top-[20%] -right-[20%] opacity-70" />
      </div>

      {/* Navigation Bar */}
      <nav className="container mx-auto flex items-center justify-between py-6 px-4 relative z-10">
        <div className="flex items-center">
          <Image
            src="/amply-logo.svg"
            alt="Amply Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <div className="hidden md:flex space-x-8">
          <div className="relative group">
            <button className="flex items-center text-gray-800 font-medium">
              Features
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
          <button className="text-gray-800 font-medium">Pricing</button>
          <button className="text-gray-800 font-medium">Company</button>
          <button className="text-gray-800 font-medium">Resources</button>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/login"
            className="text-gray-800 font-medium px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Log in
          </Link>
          <Link
            href="/get-started"
            className="bg-white text-gray-800 font-medium px-6 py-2 rounded shadow-sm hover:shadow-md transition border border-gray-200"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Diamond symbol */}
          <div className="mb-6 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">♦</span>
              <span className="text-blue-600">♦</span>
              <span className="text-blue-700">♦</span>
              <span className="text-blue-600">♦</span>
              <span className="text-blue-500">♦</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Amplifying The Reach & Impact of{" "}
            <span className="text-blue-500">Your Campaigns</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl">
            Customize your business journey effortlessly with Amply dashboard,
            backed by a suite of powerful tools.
          </p>

          {/* CTA Button */}
          <Link
            href="/get-started"
            className="bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition shadow-lg flex items-center group"
          >
            Get Started
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Feature icons with labels */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <div
          className={`flex flex-col space-y-8 transition-all duration-1000 ${
            animationComplete
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="bg-blue-100 text-blue-600 px-6 py-3 rounded-r-full flex items-center space-x-2 shadow-sm">
            <span className="text-lg">♦</span>
            <span className="font-medium">ACCOUNT</span>
            <span className="text-lg">♦</span>
          </div>
          <div className="bg-blue-50 text-blue-600 px-6 py-3 rounded-r-full flex items-center space-x-2">
            <span className="text-lg">♦</span>
            <span className="font-medium">SAVING</span>
            <span className="text-lg">♦</span>
          </div>
          <div className="bg-blue-50 text-blue-600 px-6 py-3 rounded-r-full flex items-center space-x-2">
            <span className="text-lg">♦</span>
            <span className="font-medium">PAYMENT</span>
            <span className="text-lg">♦</span>
          </div>
          <div className="bg-blue-100 text-blue-600 px-6 py-3 rounded-r-full flex items-center space-x-2 shadow-sm">
            <span className="text-lg">♦</span>
            <span className="font-medium">CARDS</span>
            <span className="text-lg">♦</span>
          </div>
        </div>
      </div>

      {/* Right side feature icons */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <div
          className={`flex flex-col space-y-8 transition-all duration-1000 ${
            animationComplete
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
          }`}
        >
          <div className="bg-blue-100 text-blue-600 px-6 py-3 rounded-l-full flex items-center space-x-2 shadow-sm">
            <span className="text-lg">♦</span>
            <span className="font-medium">EMAIL</span>
            <span className="text-lg">♦</span>
          </div>
          <div className="bg-blue-600 text-white px-6 py-3 rounded-l-full flex items-center space-x-2 shadow-sm">
            <span className="text-lg">♦</span>
            <span className="font-medium">MARKETING</span>
            <span className="text-lg">♦</span>
          </div>
          <div className="bg-blue-600 text-white px-6 py-3 rounded-l-full flex items-center space-x-2 shadow-sm">
            <span className="text-lg">♦</span>
            <span className="font-medium">B2B</span>
            <span className="text-lg">♦</span>
          </div>
          <div className="bg-blue-100 text-blue-600 px-6 py-3 rounded-l-full flex items-center space-x-2 shadow-sm">
            <span className="text-lg">♦</span>
            <span className="font-medium">CREDIT</span>
            <span className="text-lg">♦</span>
          </div>
        </div>
      </div>

      {/* Connection lines */}
      <div
        className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-1500 ${
          animationComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 400 C350 400, 350 530, 700 530 L700 530 C1050 530, 1050 400, 1200 400"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200 300 C350 300, 500 250, 700 250 L700 250 C900 250, 1050 300, 1200 300"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="700" cy="530" r="4" fill="#3B82F6" />
          <circle cx="700" cy="250" r="4" fill="#3B82F6" />
        </svg>
      </div>
    </div>
  );
}
