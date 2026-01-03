// onboarding.types.ts

export interface OnboardingData {
  // Step 1: Basic Profile
  age: number | null;
  height: number | null; // cm
  weight: number | null; // kg
  bmi: number | null;

  // Step 2: Menstrual Health
  cycleRegularity: "Regular" | "Irregular" | null;
  cycleLength: number | null;
  missedPeriods: number | null;
  heavyPeriods: boolean | null;

  // Step 3: Symptoms
  acneSeverity: "None" | "Mild" | "Severe" | null;
  excessHair: boolean | null;
  hairLoss: boolean | null;
  suddenWeightGain: boolean | null;
  darkPatches: boolean | null;

  // Step 4: Lifestyle & Medical
  familyHistory: boolean | null;
  thyroidOrDiabetes: boolean | null;
  activityLevel: "Low" | "Moderate" | "High" | null;
  sleepHours: number | null;
  stressLevel: 1 | 2 | 3 | 4 | 5 | null;
}
