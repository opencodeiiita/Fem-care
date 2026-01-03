"use client";

import { useEffect, useState } from "react";
import { OnboardingData } from "../onboarding.types";
import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import ProgressIndicator from "../ProgressIndicator";

interface MenstrualHealthProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function MenstrualHealth({
  data,
  updateData,
  onNext,
  onBack,
}: MenstrualHealthProps) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      data.cycleRegularity &&
      data.cycleLength &&
      data.missedPeriods !== null &&
      data.heavyPeriods !== null
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
        <ProgressIndicator currentStep={2} totalSteps={4} />

        {/* Heading */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#3A3A4A]">
            Let’s talk about your period cycle
          </h2>
          <p className="text-sm text-[#6B6B7A]">
            This helps us understand how your body has been communicating with you.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5 text-sm text-[#4A4A5A]">

          {/* Cycle Regularity */}
          <div className="space-y-2">
            <p className="font-medium">
              Are your periods usually regular?
            </p>
            <div className="flex gap-4">
              {["Regular", "Irregular"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="cycleRegularity"
                    value={option}
                    checked={data.cycleRegularity === option}
                    onChange={() =>
                      updateData({ cycleRegularity: option as "Regular" | "Irregular" })
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Cycle Length */}
          <div className="space-y-1">
            <label className="font-medium">
              Average cycle length (in days)
            </label>
            <input
              type="number"
              min={15}
              max={60}
              className="w-full rounded-md border px-3 py-2"
              value={data.cycleLength ?? ""}
              onChange={(e) =>
                updateData({ cycleLength: Number(e.target.value) })
              }
            />
            <p className="text-xs text-[#7A7A8A]">
              Most cycles fall between 21–35 days, but everyone is different.
            </p>
          </div>

          {/* Missed Periods */}
          <div className="space-y-1">
            <label className="font-medium">
              Missed periods in the last year
            </label>
            <input
              type="number"
              min={0}
              max={12}
              className="w-full rounded-md border px-3 py-2"
              value={data.missedPeriods ?? ""}
              onChange={(e) =>
                updateData({ missedPeriods: Number(e.target.value) })
              }
            />
          </div>

          {/* Heavy or Painful Periods */}
          <div className="space-y-2">
            <p className="font-medium">
              Do you experience heavy or painful periods?
            </p>
            <div className="flex gap-4">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="heavyPeriods"
                    checked={
                      data.heavyPeriods === (option === "Yes")
                    }
                    onChange={() =>
                      updateData({ heavyPeriods: option === "Yes" })
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={onBack}
          >
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

        {/* Reassurance */}
        <p className="text-xs text-center text-[#8A8A9A]">
          Thank you for sharing — this information helps us support you better.
        </p>
      </Card>
    </main>
  );
}
