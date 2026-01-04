import { Router } from "express";
import authMiddleware from "../../middlewares/auth";
import onboardingController from "./onboarding.controller";

const router = Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

/**
 * POST /onboarding
 * Create onboarding data for the authenticated user
 */
router.post("/", onboardingController.createOnboarding);

/**
 * GET /onboarding
 * Get onboarding data for the authenticated user
 */
router.get("/", onboardingController.getOnboarding);

export default router;