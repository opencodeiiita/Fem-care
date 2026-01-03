"use client";

import { useState } from "react";
import { OnboardingData } from "./onboarding.types";
import Welcome from "./steps/Welcome"
import BasicProfile from "./steps/BasicProfile"
import MenstrualHealth from "./steps/MenstrualHealth";
import Symptoms from "./steps/Symptoms";
import Lifestyle from "./steps/Lifestyle";

const initialData: OnboardingData = {
  age: null,
  height: null,
  weight: null,
  bmi: null,
  cycleRegularity: null,
  cycleLength: null,
  missedPeriods: null,
  heavyPeriods: null,
  acneSeverity: null,
  excessHair: null,
  hairLoss: null,
  suddenWeightGain: null,
  darkPatches: null,
  familyHistory: null,
  thyroidOrDiabetes: null,
  activityLevel: null,
  sleepHours: null,
  stressLevel: null,
};

export default function OnboardingForm() {
  const [step, setStep] = useState(0);
  const [isStarting, setIsStarting] = useState(false);
  const [data, setData] = useState<OnboardingData>(initialData);

  const updateData = (updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const startOnboarding = async () => {
    if (isStarting) return;
    setIsStarting(true);
    await new Promise((r) => setTimeout(r, 1200));
    next();
  };

  return (
    <>
      {step === 0 && (
            <Welcome start={startOnboarding} isStarting={isStarting}/>
      )}
      {step === 1 && (
        <BasicProfile data={data} updateData={updateData} onNext={next} />
      )}
      {step === 2 && (
        <MenstrualHealth data={data} updateData={updateData} onNext={next} onBack={back} />
      )}
      {step === 3 && (
        <Symptoms data={data} updateData={updateData} onNext={next} onBack={back} />
      )}
      {step === 4 && (
        <Lifestyle data={data} updateData={updateData} onBack={back} />
      )}
    </>
  );
}
