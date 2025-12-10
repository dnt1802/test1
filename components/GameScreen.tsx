import React from 'react';
import { QUESTIONS } from '../constants';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';

interface GameScreenProps {
  currentQuestionIndex: number;
  onNextQuestion: (isCorrect: boolean) => void;
  score: number;
}

const GameScreen: React.FC<GameScreenProps> = ({ currentQuestionIndex, onNextQuestion, score }) => {
  const currentQuestion = QUESTIONS[currentQuestionIndex];

  return (
    <div className="flex flex-col animate-fade-in">
      <div className="flex justify-between items-center mb-4 p-4 bg-amber-200/50 rounded-lg">
        <div className="text-2xl font-bold text-amber-900">Điểm: <span className="text-red-700">{score}</span></div>
        <div className="text-lg font-semibold text-amber-800">Câu hỏi: {currentQuestionIndex + 1} / {QUESTIONS.length}</div>
      </div>
      
      <ProgressBar currentStep={currentQuestionIndex} totalSteps={QUESTIONS.length} />

      <div className="mt-6">
        <QuestionCard
          key={currentQuestionIndex}
          question={currentQuestion}
          onAnswerSelected={onNextQuestion}
        />
      </div>
    </div>
  );
};

export default GameScreen;
