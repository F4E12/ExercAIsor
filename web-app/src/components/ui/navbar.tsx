import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md z-50 sticky top-0 w-full p-4 border-b-2 border-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          <Link href="/">ExercAIsor</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row gap-20 ">
          {/* <div className="text-primary hover:text-primary/80 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Link href="/generate">Generate</Link>
          </div> */}
          <div className="text-accent hover:text-accent/70 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Link href="/variation">Variation</Link>
          </div>
          <div className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Link href="/about">About</Link>
          </div>
          <div className="text-primary hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Link href="/subscription">Subscription</Link>
          </div>
          <div className="text-gray-300 hover:text-primary/80 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-glow"></div>
    </nav>
  );
}
