"use client";

import BackButton from "@/components/ui/backhome";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const PrintContent = () => {
  const searchParams = useSearchParams();
  const cases = searchParams.get("cases");
  const [generatedCases, setGeneratedCases] = useState<string[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cases) {
      try {
        const parsedCases = JSON.parse(decodeURIComponent(cases as string));
        setGeneratedCases(parsedCases);
      } catch (error) {
        console.error("Failed to parse cases:", error);
      }
    }
  }, [cases]);

  const handlePrint = useReactToPrint({
    documentTitle: "Generated Math Problem Variations",
    contentRef,
  });

  useEffect(() => {
    if (generatedCases.length > 0) {
      handlePrint();
    }
  }, [generatedCases, handlePrint]);

  return (
    <div className="">
      <BackButton path="variation" />
      <div className="p-10" ref={contentRef}>
        <div className="">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Generated Math Problem Variations
          </h1>
          <div className="space-y-4">
            {generatedCases.map((generatedCase, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg bg-white text-black"
              >
                {index + 1}. {generatedCase}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full relative flex">
        <div className="mx-auto">
          <Button
            onClick={() => handlePrint()}
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/80 z-10"
            disabled={!(generatedCases.length > 0)}
          >
            Print to PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function PrintPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrintContent />
    </Suspense>
  );
}
