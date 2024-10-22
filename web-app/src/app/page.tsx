"use client";

import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import ParticleBackground from "@/components/ui/particles";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ParticleBackground />
      <Navbar Page="" />
      <div className="flex flex-col items-center mt-16 min-h-screen bg-black text-background z-10 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 z-20 text-center">
          Welcome to ExercAIsor
        </h1>

        <div className="grid gap-8 w-full max-w-sm">
          {/* Variation Menu */}
          <Link href="/variation">
            <div className="bg-accent text-accent-foreground shadow-md rounded-lg p-6 hover:bg-accent/70 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out">
              <h2 className="text-xl font-semibold mb-2">Variation</h2>
              <p className="text-secondary-foreground">
                Create a variation of your case, providing new names and numbers
                to existing scenarios.
              </p>
              <Button className="mt-4 w-full sm:w-auto transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out">
                Try Now
              </Button>
            </div>
          </Link>
        </div>

        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-8 mt-12 max-w-4xl w-full text-center z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            What is ExercAIsor?
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            ExercAIsor is an AI-powered platform designed to help you create
            custom math problem variations. Using a fine-tuned GEMMA model, you
            can input a simple math problem, and the AI will generate new
            variations with different numbers and contexts. Whether you&apos;re
            a teacher or a student, ExercAIsor is here to provide endless
            possibilities for math exercises and practice.
          </p>
          <div className="flex justify-center mt-4">
            <Link href="/about">
              <Button className="bg-secondary hover:bg-secondary/70 transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out">
                More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
