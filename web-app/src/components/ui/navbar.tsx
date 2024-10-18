import React from "react";
import Link from "next/link";

interface NavbarProps {
  Page: string;
}

export default function Navbar({ Page }: NavbarProps) {
  return (
    <nav className="bg-black text-white shadow-md z-50 sticky top-0 w-full p-4 border-b-2 border-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          <Link href="/">ExercAIsor</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row gap-20">
          <div
            className={`text-primary-foreground hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
              Page === "variation"
                ? "text-primary border-b-2 border-primary"
                : ""
            }`}
          >
            <Link href="/variation">Variation</Link>
          </div>

          <div
            className={`text-primary-foreground hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
              Page === "about" ? "text-primary border-b-2 border-primary" : ""
            }`}
          >
            <Link href="/about">About</Link>
          </div>

          <div
            className={`text-primary-foreground hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
              Page === "subscription"
                ? "border-b-2 border-primary text-primary"
                : ""
            }`}
          >
            <Link href="/subscription">Subscription</Link>
          </div>

          <div
            className={`text-primary-foreground hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
              Page === "login" ? "text-primary border-b-2 border-primary" : ""
            }`}
          >
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-glow"></div>
    </nav>
  );
}
