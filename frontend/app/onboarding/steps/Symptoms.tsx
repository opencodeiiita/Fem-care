"use client";

import { useEffect, useState } from "react";
import { OnboardingData } from "../onboarding.types";
import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import ProgressIndicator from "../ProgressIndicator";

interface SymptomsProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Symptoms({
  data,
  updateData,
  onNext,
  onBack,
}: SymptomsProps) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      data.acneSeverity &&
      data.excessHair !== null &&
      data.hairLoss !== null &&
      data.suddenWeightGain !== null &&
      data.darkPatches !== null
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [data]);

  return (
    <main className="min-h-screen bg-[#FFF9FB] flex items-center justify-center p-6">
      <Card className="w-full max-w-xl p-8 space-y-6">
        {/* Progress */}
        <ProgressIndicator currentStep={3} totalSteps={4} />

        {/* Heading */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#3A3A4A]">
            Changes you may have noticed
          </h2>
          <p className="text-sm text-[#6B6B7A]">
            Many of these experiences are common. Share what feels true for you.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5 text-sm text-[#4A4A5A]">

          {/* Acne */}
          <div className="space-y-2">
            <p className="font-medium">How would you describe acne, if any?</p>
            <div className="flex gap-4">
              {["None", "Mild", "Severe"].map((level) => (
                <label key={level} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="acne"
                    checked={data.acneSeverity === level}
                    onChange={() =>
                      updateData({ acneSeverity: level as "None" | "Mild" | "Severe" })
                    }
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>

          {/* Yes / No questions */}
          {[
            { key: "excessHair", label: "Excess facial or body hair" },
            { key: "hairLoss", label: "Hair thinning or noticeable hair loss" },
            { key: "suddenWeightGain", label: "Sudden or unexplained weight gain" },
            { key: "darkPatches", label: "Darkened skin patches (neck, underarms, etc.)" },
          ].map(({ key, label }) => (
            <div key={key} className="space-y-2">
              <p className="font-medium">{label}</p>
              <div className="flex gap-4">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={key}
                      checked={data[key as keyof OnboardingData] === (option === "Yes")}
                      onChange={() =>
                        updateData({ [key]: option === "Yes" } as Partial<OnboardingData>)
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 pt-4">
          <Button variant="outline" className="w-full" onClick={onBack}>
            Back
          </Button>
          <Button
            className="w-full bg-[#E76F8A] hover:bg-[#dd5f7c] text-white"
            disabled={!isValid}
            onClick={onNext}
          >
            Continue →
          </Button>
        </div>

        <p className="text-xs text-center text-[#8A8A9A]">
          Thank you for sharing — your experiences matter.
        </p>
      </Card>
    </main>
  );
}
