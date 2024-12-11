"use client";

import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import ParticleBackground from "@/components/ui/particles";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DuplicateCaseUI() {
  const [inputCase, setInputCase] = useState("");
  const [generatedCases, setGeneratedCases] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const generateVariations = async (inputCase: string): Promise<string[]> => {
    const apiLink = "https://150c-34-45-9-230.ngrok-free.app"; // CHANGE LINK HERE
    try {
      const response = await fetch(apiLink + "/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({ prompt: inputCase }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch variations");
      }

      const data = await response.json();
      return data.variations ? data.variations : [];
    } catch (error) {
      console.error("Error generating variations:", error);
      throw error;
    }
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newCases = await generateVariations(inputCase);
      console.log(newCases);
      setGeneratedCases(newCases);
    } catch (error) {
      setGeneratedCases([
        "This is a place holder",
        "This is a place holder",
        "This is a place holder",
      ]);
      setError("Failed to generate variations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    const encodedCases = encodeURIComponent(JSON.stringify(generatedCases));
    router.push(`/print?cases=${encodedCases}`);
  };

  return (
    <div>
      <ParticleBackground />
      <Navbar Page="variation" />
      <div className="flex flex-col p-10 max-w-xl mx-auto z-10 text-foreground relative min-h-screen">
        {/* <BackButton /> */}

        {/* Input Case */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-background">
            Input Case
          </label>
          <Textarea
            placeholder="Input your problem here ..."
            value={inputCase}
            onChange={(e) => setInputCase(e.target.value)}
            className="mt-1 block w-full p-3 bg-card text-card-foreground border border-border"
            rows={4}
          />
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={isLoading || inputCase.trim() === ""}
          className="w-full mb-6 bg-primary text-primary-foreground hover:bg-primary/80"
        >
          {isLoading ? "Generating..." : "Generate Variations"}
        </Button>

        {/* Display Error */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Generated Cases */}
        <div className="space-y-4">
          {generatedCases.length > 0 && (
            <>
              <h2 className="text-lg font-medium text-primary">
                Generated Variations:
              </h2>
              {generatedCases.map((generatedCase, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg bg-card text-card-foreground"
                >
                  {index + 1}. {generatedCase}
                </div>
              ))}
            </>
          )}
        </div>
        <Button
          onClick={handlePrint}
          className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/80 z-10"
          disabled={!(generatedCases.length > 0) || isLoading}
        >
          Print to PDF
        </Button>
      </div>
      <Footer />
    </div>
  );
}
