import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/signalshq",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/youflow",
      icon: <FaTwitter className="w-5 h-5" />,
    },
  ];

  // Update the decorativeElements array with more varied and dynamic elements
  const decorativeElements = [
    // Floating diamonds around CTA
    {
      top: "15%",
      left: "8%",
      size: "w-6 h-6",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      rotate: "rotate-45",
      delay: "0s",
      animation: "animate-float-slow",
    },
    {
      top: "20%",
      right: "12%",
      size: "w-4 h-4",
      color: "bg-gradient-to-tr from-purple-400 to-pink-500",
      rotate: "rotate-12",
      delay: "0.5s",
      animation: "animate-float",
    },
    // Sparkle elements
    {
      top: "25%",
      left: "25%",
      size: "w-3 h-3",
      color: "bg-gradient-to-r from-yellow-300 to-yellow-500",
      rotate: "-rotate-12",
      delay: "0.8s",
      animation: "animate-sparkle",
    },
    // Circular elements
    {
      top: "30%",
      right: "28%",
      size: "w-8 h-8",
      color: "bg-gradient-to-bl from-green-300 to-green-500",
      rotate: "rotate-90",
      delay: "1.2s",
      animation: "animate-float-alt",
      shape: "rounded-full",
    },
    // Small fast-moving elements
    {
      top: "40%",
      left: "15%",
      size: "w-2 h-2",
      color: "bg-gradient-to-tr from-red-400 to-orange-500",
      rotate: "rotate-45",
      delay: "0.3s",
      animation: "animate-float-fast",
    },
    // Large slow-moving elements
    {
      top: "45%",
      right: "18%",
      size: "w-10 h-10",
      color: "bg-gradient-to-tl from-indigo-400 to-blue-600",
      rotate: "-rotate-45",
      delay: "1.5s",
      animation: "animate-float-slow",
      shape: "rounded-lg",
    },
    // Add more varied elements...
  ];

  return (
    <footer className="bg-[linear-gradient(to_bottom,white_0%,white_25%,#0A0F1C_25%,#0A0F1C_100%)] pt-20 relative overflow-hidden">
      {/* Decorative Elements Container */}
      <div className="absolute inset-0 pointer-events-none">
        {decorativeElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.animation}`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              animationDelay: element.delay,
              zIndex: 20,
            }}
          >
            <div
              className={`
                ${element.size}
                ${element.color}
                ${element.rotate}
                ${element.shape || "rounded-sm"}
                opacity-80
                backdrop-blur-sm
                shadow-lg
                shadow-current/20
                transition-all
                duration-300
              `}
            />
          </div>
        ))}
      </div>

      {/* Background Gradient Effects - Adjusted opacity */}
      <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] -z-10" />

      {/* CTA Section */}
      <div className="relative bg-[#2563EB] rounded-[40px] mx-8 lg:mx-16 mb-32">
        {/* Decorative Elements */}
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

        <div className="relative z-10 mx-auto max-w-7xl px-8 py-32">
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-white animate-pulse" />
            <div className="w-2 h-2 bg-white rotate-45 animate-pulse delay-100" />
            <div className="w-2 h-2 bg-white animate-pulse delay-200" />
            <div className="w-2 h-2 bg-white rotate-45 animate-pulse delay-300" />
            <div className="w-2 h-2 bg-white animate-pulse delay-400" />
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white">
              Start Your Journey Now
            </h2>
            <p className="mt-8 text-xl leading-8 text-gray-100">
              Customize your business journey effortlessly with SignalsHQ's,
              <br />
              Hyperscale your firmand grow your buisness
            </p>
            <div className="mt-12 flex items-center justify-center gap-6">
              <Link
                href="/pricing"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#2563EB] shadow-sm hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto max-w-7xl px-8 pb-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center justify-start w-14 h-14 bg-gradient-to-br from-gray-100 to-white rounded-full">
              <Image
                src="https://framerusercontent.com/images/zdRCe2FWpGK3G2FYOQhaN8mcKMY.png"
                alt="Youflow Logo"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-gray-400">
              Design better and spend less time without restricting tools
              creative freedom.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <p className="text-[15px] text-gray-400">
              Email: contact@signalsHQ.io
              <br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
