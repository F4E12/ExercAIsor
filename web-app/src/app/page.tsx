"use client";

import ParticleBackground from "@/components/ui/particles";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ParticleBackground />
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-background z-10">
        <h1 className="text-4xl font-bold mb-8 z-20">
          Welcome to the ExercAIsor
        </h1>

        <div className="grid gap-8">
          {/* Generate Menu */}
          {/* <Link href="/generate">
            <div className="bg-primary text-primary-foreground shadow-md rounded-lg p-6 max-w-sm w-full hover:bg-primary/80 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out">
              <h2 className="text-xl font-semibold mb-2">Generate</h2>
              <p className="text-secondary-foreground">
                Generate an exercise for practicing different math problems,
                customized to your needs.
              </p>
            </div>
          </Link> */}

          {/* Variation Menu */}
          <Link href="/variation">
            <div className="bg-accent text-accent-foreground shadow-md rounded-lg p-6 max-w-sm w-full hover:bg-accent/70 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out">
              <h2 className="text-xl font-semibold mb-2">Variation</h2>
              <p className="text-secondary-foreground">
                Create a variation of your case, providing new names and numbers
                to existing scenarios.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
