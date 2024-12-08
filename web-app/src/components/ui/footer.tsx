"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative z-20 ">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 animate-glow"></div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 sm:px-0 sm:pl-10 xl:pl-20">
        <div className="flex flex-col items-start">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">ExercAIsor</h2>
          <p className="text-sm sm:text-base text-gray-400">
            ExercAIsor is your AI-powered solution to generating math problem
            variations. Helping teachers and students enhance learning through
            customized exercises.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 ml-2">
            <li>
              <Link href="/about">
                <div className="hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  About
                </div>
              </Link>
            </li>
            <li>
              <Link href="/variation">
                <div className="hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Variation
                </div>
              </Link>
            </li>
            <li>
              <Link href="/subscription">
                <div className="hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Subscription
                </div>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <div className="hover:text-primary transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Login
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 ml-2">
            <li className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <a
                href="https://twitter.com"
                className="hover:text-primary "
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <a
                href="https://facebook.com"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <a
                href="https://linkedin.com"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500">
        <p>&copy; 2024 ExercAIsor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
