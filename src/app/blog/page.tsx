"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  // Floating elements configuration
  const floatingElements = [
    // Large gradient orbs
    {
      size: "w-96 h-96",
      color:
        "bg-gradient-to-br from-blue-400/20 via-indigo-500/15 to-purple-500/10",
      animation: "animate-float-slow",
      shape: "rounded-full",
      opacity: "opacity-70",
      blur: "blur-3xl",
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

  const blogPosts = [
    {
      id: 1,
      title: "Evolution of Substantive Testing",
      date: "May 15, 2024",
      image:
        "https://framerusercontent.com/images/8ZiBDyiPD6GNZ6gPthTSec7L14.jpg?scale-down-to=1024",
      excerpt:
        "Explore actionable strategies and top tools to foster seamless collaboration among remote teams. From communication to project management.",
      slug: "future-of-ai-in-audit",
      readTime: "3 min read",
      category: "Tips and tricks",
    },
  ];

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
            Insights for Modern <span className="text-blue-600">Auditors</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest trends, best practices, and innovations in audit
            technology
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
