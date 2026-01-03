"use client";

import { useEffect, useState } from "react";
import { OnboardingData } from "../onboarding.types";
import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import ProgressIndicator from "../ProgressIndicator";

interface LifestyleProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onBack: () => void;
}

export default function Lifestyle({
  data,
  updateData,
  onBack,
}: LifestyleProps) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      data.familyHistory !== null &&
      data.thyroidOrDiabetes !== null &&
      data.activityLevel &&
      data.sleepHours &&
      data.stressLevel
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
        <ProgressIndicator currentStep={4} totalSteps={4} />

        {/* Heading */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#3A3A4A]">
            A little about your lifestyle
          </h2>
          <p className="text-sm text-[#6B6B7A]">
            These details help us understand your everyday rhythms.
          </p>
        </div>

        <div className="space-y-5 text-sm text-[#4A4A5A]">

          {/* Family history */}
          <div className="space-y-2">
            <p className="font-medium">Family history of PCOS?</p>
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={data.familyHistory === (option === "Yes")}
                  onChange={() =>
                    updateData({ familyHistory: option === "Yes" })
                  }
                />
                {option}
              </label>
            ))}
          </div>

          {/* Thyroid / Diabetes */}
          <div className="space-y-2">
            <p className="font-medium">Any thyroid or diabetes diagnosis?</p>
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={data.thyroidOrDiabetes === (option === "Yes")}
                  onChange={() =>
                    updateData({ thyroidOrDiabetes: option === "Yes" })
                  }
                />
                {option}
              </label>
            ))}
          </div>

          {/* Activity level */}
          <div className="space-y-2">
            <p className="font-medium">Physical activity level</p>
            <div className="flex gap-4">
              {["Low", "Moderate", "High"].map((level) => (
                <label key={level} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={data.activityLevel === level}
                    onChange={() =>
                      updateData({
                        activityLevel: level as "Low" | "Moderate" | "High",
                      })
                    }
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>

          {/* Sleep */}
          <div className="space-y-1">
            <label className="font-medium">Average sleep (hours per night)</label>
            <input
              type="number"
              min={3}
              max={12}
              className="w-full rounded-md border px-3 py-2"
              value={data.sleepHours ?? ""}
              onChange={(e) =>
                updateData({ sleepHours: Number(e.target.value) })
              }
            />
          </div>

          {/* Stress */}
          <div className="space-y-1">
            <label className="font-medium">
              Stress level (1 = very low, 5 = very high)
            </label>
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={data.stressLevel ?? 3}
              onChange={(e) =>
                updateData({ stressLevel: Number(e.target.value) as 1 | 2 | 3 | 4 | 5 })
              }
              className="w-full"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 pt-4">
          <Button variant="outline" className="w-full" onClick={onBack}>
            Back
          </Button>
          <Button
            className="w-full bg-[#E76F8A] hover:bg-[#dd5f7c] text-white"
            disabled={!isValid}
          >
            Finish →
          </Button>
        </div>

        <p className="text-xs text-center text-[#8A8A9A]">
          You’ve taken an important step toward understanding your health.
        </p>
      </Card>
    </main>
  );
}
