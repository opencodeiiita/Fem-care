import mongoose, { Schema, Document } from "mongoose";

export interface IOnboarding extends Document {
  userId: mongoose.Types.ObjectId;
  age: number;
  height: number;
  weight: number;
  bmi: number;
  menstrualCycleLength: number;
  lastPeriodDate: Date;
  periodDuration: number;
  flowIntensity: "light" | "moderate" | "heavy";
  physicalSymptoms: string[];
  hormonalSymptoms: string[];
  exerciseFrequency: "never" | "rarely" | "sometimes" | "often" | "daily";
  sleepHours: number;
  stressLevel: number;
  smokingStatus: "never" | "former" | "current";
  alcoholConsumption: "never" | "rarely" | "moderate" | "frequent";
  medicalConditions: string[];
  medications: string[];
  createdAt: Date;
  updatedAt: Date;
}

const OnboardingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    age: {
      type: Number,
      required: true,
      min: 13,
      max: 100,
    },
    height: {
      type: Number,
      required: true,
      min: 100,
      max: 250,
    },
    weight: {
      type: Number,
      required: true,
      min: 30,
      max: 300,
    },
    bmi: {
      type: Number,
      required: true,
    },
    menstrualCycleLength: {
      type: Number,
      required: true,
      min: 21,
      max: 35,
    },
    lastPeriodDate: {
      type: Date,
      required: true,
    },
    periodDuration: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    flowIntensity: {
      type: String,
      required: true,
      enum: ["light", "moderate", "heavy"],
    },
    physicalSymptoms: {
      type: [String],
      default: [],
    },
    hormonalSymptoms: {
      type: [String],
      default: [],
    },
    exerciseFrequency: {
      type: String,
      required: true,
      enum: ["never", "rarely", "sometimes", "often", "daily"],
    },
    sleepHours: {
      type: Number,
      required: true,
      min: 3,
      max: 12,
    },
    stressLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    smokingStatus: {
      type: String,
      required: true,
      enum: ["never", "former", "current"],
    },
    alcoholConsumption: {
      type: String,
      required: true,
      enum: ["never", "rarely", "moderate", "frequent"],
    },
    medicalConditions: {
      type: [String],
      default: [],
    },
    medications: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Onboarding", OnboardingSchema);