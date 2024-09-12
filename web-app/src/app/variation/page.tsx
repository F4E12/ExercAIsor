"use client";

import BackButton from "@/components/ui/backhome";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function DuplicateCaseUI() {
  const [inputCase, setInputCase] = useState("");
  const [generatedCases, setGeneratedCases] = useState<string[]>([]);

  const handleGenerate = () => {
    const newCases = generateVariations();
    setGeneratedCases(newCases);
  };

  const generateVariations = (): string[] => {
    // Mock AI Functionality - You can replace this with real AI logic
    return [
      "Dina memiliki 15 jeruk dan Fajar memiliki 12 jeruk, berapakah total jeruk yang mereka miliki bersama?",
      "Rina mempunyai 8 mangga dan Sandi mempunyai 7 mangga, berapakah total mangga yang dimiliki oleh keduanya?",
      "Tono memiliki 6 pisang dan Siti memiliki 5 pisang, berapakah jumlah pisang yang mereka miliki secara keseluruhan?",
      "Andi memiliki 13 buah anggur dan Nia memiliki 11 buah anggur, berapakah total anggur yang mereka miliki?",
      "Lina memiliki 20 stroberi dan Kiki memiliki 18 stroberi, berapakah total stroberi yang mereka miliki bersama?",
    ];
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
        className="w-full mb-6 bg-primary text-primary-foreground hover:bg-primary/80"
      >
        Generate Variations
      </Button>

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
