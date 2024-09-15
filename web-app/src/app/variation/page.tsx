"use client";

import BackButton from "@/components/ui/backhome";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function DuplicateCaseUI() {
  const [inputCase, setInputCase] = useState("");
  const [generatedCases, setGeneratedCases] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generate variations by calling the Flask API
  const generateVariations = async (inputCase: string): Promise<string[]> => {
    try {
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputCase }), // Send input case to API
      });

      if (!response.ok) {
        throw new Error("Failed to fetch variations");
      }

      // Parse the response
      const data = await response.json();

      // Return the generated variation(s) (ensure the response returns an array)
      return data.variation ? [data.variation] : [];
    } catch (error) {
      console.error("Error generating variations:", error);
      throw error;
    }
  };

  // Handle the "Generate" button click
  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null); // Reset error before making the API call
    try {
      const newCases = await generateVariations(inputCase);
      setGeneratedCases(newCases);
    } catch (error) {
      setError("Failed to generate variations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto bg-background text-foreground">
      {/* Back Button */}
      <BackButton />

      {/* Input Case */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-secondary-foreground">
          Input Case
        </label>
        <Textarea
          placeholder="Budi mempunyai 10 apel dan Ayina mempunyai 9 apel, berapakah total apel yang dimiliki oleh keduanya?"
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
            <h2 className="text-lg font-medium text-secondary-foreground">
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
    </div>
  );
}
