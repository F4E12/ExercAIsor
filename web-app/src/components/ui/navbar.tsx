import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  Page: string;
}

export default function Navbar({ Page }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md z-50 sticky top-0 w-full p-4 border-b-2 border-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          <Link href="/">ExercAIsor</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden sm:flex flex-row gap-10">
          {[
            { name: "Variation", href: "/variation", key: "variation" },
            { name: "About", href: "/about", key: "about" },
            {
              name: "Subscription",
              href: "/subscription",
              key: "subscription",
            },
            { name: "Login", href: "/login", key: "login" },
          ].map((link) => (
            <div
              key={link.key}
              className={`text-primary-foreground hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
                Page === link.key
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center mt-4">
          {[
            { name: "Variation", href: "/variation", key: "variation" },
            { name: "About", href: "/about", key: "about" },
            {
              name: "Subscription",
              href: "/subscription",
              key: "subscription",
            },
            { name: "Login", href: "/login", key: "login" },
          ].map((link) => (
            <div
              key={link.key}
              className={`py-2 text-lg text-primary-foreground hover:text-primary transition duration-300 ${
                Page === link.key
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </div>
          ))}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-glow"></div>
    </nav>
  );
}
