import { Request, Response } from "express";
import onboardingService, { OnboardingData } from "./onboarding.service";

interface AuthenticatedRequest extends Request {
  userId: string;
}

class OnboardingController {
  async createOnboarding(req: AuthenticatedRequest, res: Response): Promise<void> {
    try {
      const {
        age,
        height,
        weight,
        menstrualCycleLength,
        lastPeriodDate,
        periodDuration,
        flowIntensity,
        physicalSymptoms,
        hormonalSymptoms,
        exerciseFrequency,
        sleepHours,
        stressLevel,
        smokingStatus,
        alcoholConsumption,
        medicalConditions,
        medications,
      } = req.body;

      // Validate required fields
      const requiredFields = [
        "age",
        "height",
        "weight",
        "menstrualCycleLength",
        "lastPeriodDate",
        "periodDuration",
        "flowIntensity",
        "exerciseFrequency",
        "sleepHours",
        "stressLevel",
        "smokingStatus",
        "alcoholConsumption",
      ];

      const missingFields = requiredFields.filter(field => !req.body[field]);
      if (missingFields.length > 0) {
        res.status(400).json({
          message: "Missing required fields",
          missingFields,
        });
        return;
      }

      // Validate data types and ranges
      if (typeof age !== "number" || age < 13 || age > 100) {
        res.status(400).json({ message: "Age must be a number between 13 and 100" });
        return;
      }

      if (typeof height !== "number" || height < 100 || height > 250) {
        res.status(400).json({ message: "Height must be a number between 100 and 250 cm" });
        return;
      }

      if (typeof weight !== "number" || weight < 30 || weight > 300) {
        res.status(400).json({ message: "Weight must be a number between 30 and 300 kg" });
        return;
      }

      if (typeof menstrualCycleLength !== "number" || menstrualCycleLength < 21 || menstrualCycleLength > 35) {
        res.status(400).json({ message: "Menstrual cycle length must be between 21 and 35 days" });
        return;
      }

      if (typeof periodDuration !== "number" || periodDuration < 1 || periodDuration > 10) {
        res.status(400).json({ message: "Period duration must be between 1 and 10 days" });
        return;
      }

      if (!["light", "moderate", "heavy"].includes(flowIntensity)) {
        res.status(400).json({ message: "Flow intensity must be light, moderate, or heavy" });
        return;
      }

      if (!["never", "rarely", "sometimes", "often", "daily"].includes(exerciseFrequency)) {
        res.status(400).json({ message: "Invalid exercise frequency" });
        return;
      }

      if (typeof sleepHours !== "number" || sleepHours < 3 || sleepHours > 12) {
        res.status(400).json({ message: "Sleep hours must be between 3 and 12" });
        return;
      }

      if (typeof stressLevel !== "number" || stressLevel < 1 || stressLevel > 10) {
        res.status(400).json({ message: "Stress level must be between 1 and 10" });
        return;
      }

      if (!["never", "former", "current"].includes(smokingStatus)) {
        res.status(400).json({ message: "Invalid smoking status" });
        return;
      }

      if (!["never", "rarely", "moderate", "frequent"].includes(alcoholConsumption)) {
        res.status(400).json({ message: "Invalid alcohol consumption level" });
        return;
      }

      const onboardingData: OnboardingData = {
        age,
        height,
        weight,
        menstrualCycleLength,
        lastPeriodDate: new Date(lastPeriodDate),
        periodDuration,
        flowIntensity,
        physicalSymptoms,
        hormonalSymptoms,
        exerciseFrequency,
        sleepHours,
        stressLevel,
        smokingStatus,
        alcoholConsumption,
        medicalConditions,
        medications,
      };

      const onboarding = await onboardingService.createOnboarding(req.userId, onboardingData);

      res.status(201).json({
        message: "Onboarding completed successfully",
        data: onboarding,
      });
    } catch (error: any) {
      if (error.message === "Onboarding already completed for this user") {
        res.status(409).json({ message: error.message });
        return;
      }

      console.error("Error creating onboarding:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getOnboarding(req: AuthenticatedRequest, res: Response): Promise<void> {
    try {
      const onboarding = await onboardingService.getOnboardingByUserId(req.userId);

      if (!onboarding) {
        res.status(404).json({ message: "Onboarding data not found" });
        return;
      }

      res.status(200).json({
        message: "Onboarding data retrieved successfully",
        data: onboarding,
      });
    } catch (error) {
      console.error("Error fetching onboarding:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new OnboardingController();