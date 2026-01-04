import mongoose from "mongoose";
import Onboarding, { IOnboarding } from "./onboarding.model";

export interface OnboardingData {
  age: number;
  height: number;
  weight: number;
  menstrualCycleLength: number;
  lastPeriodDate: Date;
  periodDuration: number;
  flowIntensity: "light" | "moderate" | "heavy";
  physicalSymptoms?: string[];
  hormonalSymptoms?: string[];
  exerciseFrequency: "never" | "rarely" | "sometimes" | "often" | "daily";
  sleepHours: number;
  stressLevel: number;
  smokingStatus: "never" | "former" | "current";
  alcoholConsumption: "never" | "rarely" | "moderate" | "frequent";
  medicalConditions?: string[];
  medications?: string[];
}

class OnboardingService {
  private calculateBMI(height: number, weight: number): number {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return Math.round(bmi * 10) / 10;
  }

  async createOnboarding(userId: string, data: OnboardingData): Promise<IOnboarding> {
    const existingOnboarding = await Onboarding.findOne({ userId });
    if (existingOnboarding) {
      throw new Error("Onboarding already completed for this user");
    }

    const bmi = this.calculateBMI(data.height, data.weight);

    const onboardingData = {
      userId: new mongoose.Types.ObjectId(userId),
      ...data,
      bmi,
      physicalSymptoms: data.physicalSymptoms || [],
      hormonalSymptoms: data.hormonalSymptoms || [],
      medicalConditions: data.medicalConditions || [],
      medications: data.medications || [],
    };

    const onboarding = await Onboarding.create(onboardingData);
    return onboarding;
  }

  async getOnboardingByUserId(userId: string): Promise<IOnboarding | null> {
    const onboarding = await Onboarding.findOne({ userId });
    return onboarding;
  }

  async hasCompletedOnboarding(userId: string): Promise<boolean> {
    const onboarding = await Onboarding.findOne({ userId });
    return !!onboarding;
  }
}

export default new OnboardingService();