import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswerSelected: (isCorrect: boolean) => void;
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setShowExplanation(true);

    const isCorrect = index === question.correctAnswerIndex;
    setTimeout(() => {
      onAnswerSelected(isCorrect);
    }, 3000); // Wait 3 seconds to show explanation before moving to the next question
  };
  
  const getButtonClass = (index: number) => {
    if (selectedAnswer === null) {
      return 'bg-white/70 hover:bg-amber-200 border-amber-300';
    }
    if (index === question.correctAnswerIndex) {
      return 'bg-green-200 border-green-400 text-green-900 animate-pulse';
    }
    if (index === selectedAnswer) {
      return 'bg-red-200 border-red-400 text-red-900';
    }
    return 'bg-gray-100 border-gray-300 opacity-60';
  };

  return (
    <div className="p-6 rounded-lg transition-all duration-500">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-amber-900">{question.question}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-left text-lg font-semibold rounded-lg border-2 shadow-sm transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none ${getButtonClass(index)}`}
          >
            <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
            {option}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className={`mt-6 p-4 rounded-lg animate-fade-in ${selectedAnswer === question.correctAnswerIndex ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'}`}>
          <h4 className="font-bold text-xl mb-2 flex items-center">
            {selectedAnswer === question.correctAnswerIndex ? <><CheckIcon /> Chúc mừng! Bạn đã trả lời đúng.</> : <><XIcon /> Rất tiếc, bạn đã sai.</>}
          </h4>
          <p className="text-amber-900">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
