"use client";

import Navbar from "@/components/ui/navbar";
import ParticleBackground from "@/components/ui/particles";
import React from "react";

export default function About() {
  return (
    <div>
      <ParticleBackground />
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
        <div className="max-w-5xl text-center space-y-12 z-10">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in-down">
            About ExercAIsor
          </h1>
          <p className="text-lg animate-fade-in mb-4">
            Welcome to <span className="text-primary">ExercAIsor</span>, your
            companion for generating customized math problem variations! We use
            a fine-tuned AI model based on GEMMA to create new and unique
            variations of the math problems you provide. This platform is
            designed to help educators, students, and enthusiasts generate
            exercises for enhanced learning and practice.
          </p>

          <h2 className="text-3xl font-semibold mb-4 animate-fade-in-up">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-primary text-primary-foreground shadow-lg rounded-lg p-6 hover:bg-primary/80 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-2">Step 1: Input</h3>
              <p className="text-secondary-foreground">
                Enter a simple math problem into the system to start the
                process.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-accent text-accent-foreground shadow-lg rounded-lg p-6 hover:bg-accent/80 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up delay-100">
              <h3 className="text-xl font-semibold mb-2">
                Step 2: AI Analysis
              </h3>
              <p className="text-secondary-foreground">
                Our AI, powered by GEMMA, analyzes the problem structure and
                logic.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-secondary text-secondary-foreground shadow-lg rounded-lg p-6 hover:bg-secondary/80 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up delay-200">
              <h3 className="text-xl font-semibold mb-2">
                Step 3: Generate Variations
              </h3>
              <p className="text-secondary-foreground">
                Receive a variety of new problems with unique numbers and
                contexts.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mt-12 mb-4 animate-fade-in-up">
            Why Use ExercAIsor?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary text-primary-foreground shadow-lg rounded-lg p-6 hover:bg-secondary/80 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up delay-300">
              <h3 className="text-xl font-semibold mb-2">Save Time</h3>
              <p className="text-secondary-foreground">
                Quickly generate diverse math exercises for practice or
                teaching.
              </p>
            </div>

            <div className="bg-accent text-accent-foreground shadow-lg rounded-lg p-6 hover:bg-accent/80 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up delay-400">
              <h3 className="text-xl font-semibold mb-2">
                Customize Difficulty
              </h3>
              <p className="text-secondary-foreground">
                Tailor the generated problems to different difficulty levels as
                needed.
              </p>
            </div>

            <div className="bg-primary text-secondary-foreground shadow-lg rounded-lg p-6 hover:bg-primary/80 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up delay-500">
              <h3 className="text-xl font-semibold mb-2">
                AI-Powered Efficiency
              </h3>
              <p className="text-secondary-foreground">
                Our AI does the heavy lifting, helping reduce manual effort.
              </p>
            </div>
          </div>

          <p className="text-lg animate-fade-in">
            Whether you're a teacher looking to provide extra exercises for your
            students or a student seeking more practice problems, ExercAIsor is
            here to assist you in achieving your learning goals. Get started now
            and explore the endless possibilities of AI-generated math
            variations!
          </p>
        </div>
      </div>
    </div>
  );
}
