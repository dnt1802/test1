import React from 'react';
import { QUESTIONS } from '../constants';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / (totalSteps - 1)) * 100;
  
  return (
    <div className="w-full px-4 sm:px-0">
        <div className="relative h-2 bg-amber-300/60 rounded-full mb-4">
            <div
                className="absolute top-0 left-0 h-2 bg-red-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
        <div className="flex justify-between">
            {QUESTIONS.map((q, index) => (
                <div key={index} className="flex-1 text-center">
                    <div className={`text-xs sm:text-sm font-semibold ${index <= currentStep ? 'text-red-700' : 'text-amber-600'}`}>
                        {q.era}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ProgressBar;
