"use client";

interface ProgressIndicatorProps {
  currentStep: number; // 1-based index
  totalSteps: number;
}

export default function ProgressIndicator({
  currentStep,
  totalSteps,
}: ProgressIndicatorProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-2">
      {/* Text */}
      <div className="flex justify-between text-sm text-[#6B6B7A]">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{Math.round(progressPercentage)}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-[#F3E5EA] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#E76F8A] transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
