"use client";

import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";

interface WelcomeProps {
  start: () => void;
  isStarting: boolean;
}

export default function Welcome({ start, isStarting }: WelcomeProps) {
  return (
    <main className="min-h-screen bg-[#FFF9FB] flex items-center justify-center p-6">
      <Card className="w-full max-w-xl p-8 space-y-6 shadow-sm">
        {/* Heading */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold text-[#3A3A4A]">
            Welcome To FemCare🌸
          </h1>
          <p className="text-[#6B6B7A] text-base">
            We’re really glad you’re here.
          </p>
        </div>

        {/* Body content */}
        <div className="space-y-4 text-[#5A5A6A] text-sm leading-relaxed">
          <p>
            Every body tells a story — and PCOS looks different for every woman.
            To support you in a meaningful way, we first need to understand
            <span className="font-medium">
              {" "}your body, your patterns, and your experiences
            </span>.
          </p>

          <p>
            The next few steps will gently guide you through some questions about
            your health, lifestyle, and symptoms. There are no right or wrong
            answers — only honest ones.
          </p>

          <p>Your responses help us:</p>

          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Understand your unique health patterns</li>
            <li>Track symptom changes over time</li>
            <li>Offer insights that feel personal and supportive</li>
          </ul>

          <p>
            This onboarding is mandatory — not to restrict you, but to ensure
            that everything we show you later is thoughtful, relevant, and safe.
          </p>

          <p className="font-medium">
            Take a deep breath. You’re not being judged here.
            You’re being listened to.
          </p>
        </div>

        {/* Progress hint */}
        <div className="bg-[#FFF1F5] rounded-md p-4 text-sm text-[#7A3E4E]">
          ⏳ This will take about <span className="font-medium">3–5 minutes</span>
          <br />
          📋 You’ll complete it in <span className="font-medium">4 simple steps</span>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button
            size="lg"
            className="w-full bg-[#E76F8A] hover:bg-[#dd5f7c] text-white"
            onClick={start}
            disabled={isStarting}
          >
            {isStarting ? "Getting things ready…" : "Let’s begin →"}
          </Button>
        </div>

        {/* Trust note */}
        <p className="text-center text-xs text-[#8A8A9A]">
          Your information stays private and is used only to support your wellness journey.
        </p>
      </Card>
    </main>
  );
}
