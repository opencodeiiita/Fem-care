"use client";

import { OnboardingData } from "../onboarding.types";
import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import ProgressIndicator from "../ProgressIndicator";

interface BasicProfileProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
}

export default function BasicProfile({
  data,
  updateData,
  onNext,
}: BasicProfileProps) {

 
const [age, setAge] = useState(data.age?.toString() ?? "");
const [height, setHeight] = useState(data.height?.toString() ?? "");
const [weight, setWeight] = useState(data.weight?.toString() ?? "");
const [bmi, setBmi] = useState<number | null>(null);
const [isValid, setIsValid] = useState(false);

  // Calculate BMI automatically
  useEffect(() => {
    if (age && height && weight) {
      const heightInMeters = Number(height) / 100;
      const bmiValue = Number(weight) / (heightInMeters * heightInMeters);

        const calculatedBmi = Number(bmiValue.toFixed(1));
        setBmi(calculatedBmi);
        setIsValid(true);

       // 🔗 THIS IS THE INTEGRATION
    updateData({
      age: Number(age),
      height: Number(height),
      weight: Number(weight),
      bmi: calculatedBmi,
    });

    } else {
      setBmi(null);
      setIsValid(false);
    }
  }, [age, height, weight]);

  const handleNext = () => {
    if (!isValid) return;
    onNext();
  };

  return (
    <main className="min-h-screen bg-[#FFF9FB] flex items-center justify-center p-6">
      <Card className="w-full max-w-xl p-8 space-y-6">
        {/* Progress */}
        <ProgressIndicator currentStep={1} totalSteps={4} />

        {/* Heading */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#3A3A4A]">
            Let’s start with the basics
          </h2>
          <p className="text-sm text-[#6B6B7A]">
            This helps us understand your body a little better.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Age */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-[#4A4A5A]">
              Age
            </label>
            <input
              type="number"
              min={10}
              className="w-full rounded-md border px-3 py-2 text-sm"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          {/* Height */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-[#4A4A5A]">
              Height (cm)
            </label>
            <input
              type="number"
              min={100}
              className="w-full rounded-md border px-3 py-2 text-sm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>

          {/* Weight */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-[#4A4A5A]">
              Weight (kg)
            </label>
            <input
              type="number"
              min={30}
              className="w-full rounded-md border px-3 py-2 text-sm"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>

          {/* BMI Display */}
          {bmi && (
            <div className="bg-[#FFF1F5] rounded-md p-3 text-sm text-[#7A3E4E]">
              Based on your height and weight, your BMI is{" "}
              <span className="font-medium">{bmi}</span>.
              <br />
              This helps us understand overall body patterns.
            </div>
          )}
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="w-full bg-[#E76F8A] hover:bg-[#dd5f7c] text-white"
          disabled={!isValid}
          onClick={handleNext}
        >
          Continue →
        </Button>

        {/* Safety message */}
        <p className="text-xs text-center text-[#8A8A9A]">
          All fields are required to continue.
        </p>
      </Card>
    </main>
  );
}
