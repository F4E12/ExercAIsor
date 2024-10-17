import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md z-20 sticky justify-around w-full p-4">
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
          <div className="text-primary hover:text-primary/80 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
