"use client";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  // Dynamic floating elements configuration
  const floatingElements = [
    // Small squares
    {
      size: "w-3 h-3",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      animation: "animate-float-slow",
    },
    {
      size: "w-4 h-4",
      color: "bg-gradient-to-tr from-purple-400 to-pink-500",
      animation: "animate-float",
    },
    {
      size: "w-2 h-2",
      color: "bg-gradient-to-r from-yellow-300 to-yellow-500",
      animation: "animate-float-fast",
    },
    // Circles
    {
      size: "w-6 h-6",
      color: "bg-gradient-to-bl from-green-300 to-green-500",
      animation: "animate-float-alt",
      shape: "rounded-full",
    },
    {
      size: "w-8 h-8",
      color: "bg-gradient-to-tl from-indigo-400 to-blue-600",
      animation: "animate-float-slow",
      shape: "rounded-full",
    },
    // Diamonds
    {
      size: "w-5 h-5",
      color: "bg-gradient-to-tr from-red-400 to-orange-500",
      animation: "animate-float",
      rotate: "rotate-45",
    },
    {
      size: "w-4 h-4",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      animation: "animate-float-fast",
      rotate: "-rotate-45",
    },
    // Add more varied elements for better distribution
    {
      size: "w-12 h-12",
      color: "bg-gradient-to-br from-blue-300 to-purple-500",
      animation: "animate-float-slow",
      shape: "rounded-full",
      opacity: "opacity-40",
    },
    {
      size: "w-16 h-16",
      color: "bg-gradient-to-tr from-green-200 to-blue-400",
      animation: "animate-float-alt",
      shape: "rounded-full",
      opacity: "opacity-30",
    },
    {
      size: "w-8 h-8",
      color: "bg-gradient-to-bl from-yellow-200 to-orange-400",
      animation: "animate-enhanced-sparkle",
      rotate: "rotate-45",
      opacity: "opacity-50",
    },
    // Bottom section specific elements
    {
      size: "w-20 h-20",
      color: "bg-gradient-to-r from-purple-200/40 to-pink-300/40",
      animation: "animate-float-slow",
      shape: "rounded-full",
      opacity: "opacity-30",
    },
    {
      size: "w-10 h-10",
      color: "bg-gradient-to-tl from-blue-300/50 to-green-300/50",
      animation: "animate-float",
      rotate: "-rotate-12",
      opacity: "opacity-60",
    },
    // Add more small elements for visual interest
    ...Array(5)
      .fill(null)
      .map(() => ({
        size: "w-2 h-2",
        color: "bg-gradient-to-br from-blue-400 to-indigo-500",
        animation: "animate-float-fast",
        rotate: "rotate-45",
        opacity: "opacity-70",
      })),
  ];

  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    // Generate random positions for floating elements
    const generateElements = () => {
      const pageHeight =
        typeof window !== "undefined" ? document.body.scrollHeight : 5000;
      const sections = 5; // Divide page into sections for better distribution

      return floatingElements.map((base, i) => {
        const sectionHeight = pageHeight / sections;
        const sectionIndex = i % sections;
        const topMin = sectionHeight * sectionIndex;
        const topMax = sectionHeight * (sectionIndex + 1);

        return {
          ...base,
          id: i,
          left: `${Math.random() * 85 + 5}%`, // Keep elements away from edges
          top: `${
            ((topMin + Math.random() * (topMax - topMin)) / pageHeight) * 100
          }%`,
          delay: `${Math.random() * 3}s`,
          scale: Math.random() * 0.5 + 0.5,
        };
      });
    };

    setElements(generateElements());

    // Update on scroll (debounced)
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setElements(generateElements());
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      setElements(generateElements());
    });

    // Periodic updates
    const interval = setInterval(() => {
      setElements(generateElements());
    }, 15000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {
        setElements(generateElements());
      });
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-visible min-h-screen">
        {elements.map((element) => (
          <div
            key={element.id}
            className={`fixed ${element.animation}`}
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              transform: `scale(${element.scale})`,
              zIndex: 0,
            }}
          >
            <div
              className={`
                ${element.size}
                ${element.color}
                ${element.rotate || ""}
                ${element.shape || "rounded-sm"}
                ${element.opacity || "opacity-70"}
                shadow-lg
                shadow-current/20
                backdrop-blur-sm
                transition-all
                duration-300
              `}
            />
          </div>
        ))}
      </div>

      {/* Background Gradient Effects */}
      <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-[120px] -z-10" />

      {/* Content */}
      <div className="relative">
        {/* Header Section */}
        <div className="relative isolate overflow-hidden pt-24 pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center gap-2 mb-6">
                <div className="w-2 h-2 bg-blue-500" />
                <div className="w-2 h-2 bg-blue-500 rotate-45" />
                <div className="w-2 h-2 bg-blue-500" />
                <div className="w-2 h-2 bg-blue-500 rotate-45" />
                <div className="w-2 h-2 bg-blue-500" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-12">
              {/* Introduction */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    1. Introduction
                  </h2>
                  <p className="text-gray-600">
                    This Privacy Policy describes how SignalsHQ collects, uses,
                    protects, and handles your personal information when you use
                    our SaaS product.
                  </p>
                </div>
              </section>

              {/* Information Collection */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    2. Information Collection
                  </h2>
                  <p className="text-gray-600">
                    We collect the following personal information during
                    registration:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Account credentials</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 mt-4">
                    We do not collect or store payment information directly.
                    Payment processing is handled securely by Stripe.
                  </p>
                </div>
              </section>

              {/* Purpose of Information Collection */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    3. Purpose of Information Collection
                  </h2>
                  <p className="text-gray-600">
                    We use your personal information to:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Provide and maintain our SaaS product</li>
                      <li>Communicate product updates and important notices</li>
                      <li>Improve our service offerings</li>
                      <li>Respond to customer support requests</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    4. Data Security
                  </h2>
                  <p className="text-gray-600">
                    We implement robust security measures to protect your
                    personal information:
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Encrypted data storage</li>
                      <li>Secure access controls</li>
                      <li>Regular security audits</li>
                      <li>
                        Compliance with industry-standard security protocols
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Continue with sections 5-13 */}
              {/* Data Retention */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    5. Data Retention
                  </h2>
                  <p className="text-gray-600">
                    We retain your personal information only for as long as
                    necessary to provide our services and fulfill the purposes
                    outlined in this policy. Users can request data deletion at
                    any time.
                  </p>
                </div>
              </section>

              {/* User Rights */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    6. User Rights
                  </h2>
                  <p className="text-gray-600">You have the right to:</p>
                  <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate data</li>
                      <li>
                        Request deletion of your account and associated data
                      </li>
                      <li>Withdraw consent for data processing</li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* Cookies & Tracking ... */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    7. Cookies & Tracking
                  </h2>
                  <p className="text-gray-600">
                    We use cookies to enhance user experience and site
                    functionality. Users can manage cookie preferences through
                    their browser settings.
                  </p>
                </div>
              </section>
              {/* Children's Privacy... */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    8. Children's Privacy
                  </h2>
                  <p className="text-gray-600">
                    Our service is not intended for individuals under 18. We do
                    not knowingly collect personal information from minors.
                  </p>
                </div>
              </section>

              {/* International Data Transfers... */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    9. International Data Transfers
                  </h2>
                  <p className="text-gray-600">
                    As a Bangalore-based company, we ensure that all data
                    processing complies with Indian data protection regulations.
                  </p>
                </div>
              </section>

              {/* International Data Transfers... */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    10. Third-Party Services
                  </h2>
                  <p className="text-gray-600">
                    {" "}
                    We use third-party services like Stripe for payment
                    processing. These services have their own privacy policies
                    and data handling practices.
                  </p>
                </div>
              </section>

              {/* International Data Transfers... */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    11. Changes to Privacy Policy
                  </h2>
                  <p className="text-gray-600">
                    {" "}
                    We may update this policy periodically. Users will be
                    notified of significant changes via email or in-app
                    notification.
                  </p>
                </div>
              </section>

              {/* Remaining sections... */}
              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    12. Contact Information
                  </h2>
                  <p className="text-gray-600">
                    For privacy-related inquiries, please contact:
                  </p>
                  <div className="bg-blue-50 rounded-2xl p-6 mt-4">
                    <p className="text-blue-900">
                      Email: contact@signalshq.com
                    </p>
                  </div>
                </div>
              </section>

              <section className="prose prose-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-blue-100/20 border border-blue-50">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    13. Consent
                  </h2>
                  <p className="text-gray-600">
                    By using SignalsHQ's services, you consent to the terms
                    outlined in this privacy policy.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
