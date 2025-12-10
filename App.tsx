import React, { useState, useCallback } from 'react';
import { GameState } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import { QUESTIONS } from './constants';

const DongSonDrumIcon = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 text-amber-800">
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4"/>
    <circle cx="50" cy="50" r="8" fill="currentColor"/>
    <path d="M50 12L53.09 23.26L64.34 26.35L55.68 35.01L57.77 46.24L50 40L42.23 46.24L44.32 35.01L35.66 26.35L46.91 23.26L50 12Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M50 88L46.91 76.74L35.66 73.65L44.32 64.99L42.23 53.76L50 60L57.77 53.76L55.68 64.99L64.34 73.65L53.09 76.74L50 88Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 50L23.26 46.91L26.35 35.66L35.01 44.32L46.24 42.23L40 50L46.24 57.77L35.01 55.68L26.35 64.34L23.26 53.09L12 50Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M88 50L76.74 53.09L73.65 64.34L64.99 55.68L53.76 57.77L60 50L53.76 42.23L64.99 44.32L73.65 35.66L76.74 46.91L88 50Z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);


function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.Welcome);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startGame = useCallback(() => {
    setGameState(GameState.Playing);
    setScore(0);
    setCurrentQuestionIndex(0);
  }, []);

  const handleNextQuestion = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 10);
    }
    
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setGameState(GameState.Finished);
    }
  }, [currentQuestionIndex]);

  const renderGameState = () => {
    switch (gameState) {
      case GameState.Playing:
        return (
          <GameScreen
            currentQuestionIndex={currentQuestionIndex}
            onNextQuestion={handleNextQuestion}
            score={score}
          />
        );
      case GameState.Finished:
        return <EndScreen score={score} onRestart={startGame} totalQuestions={QUESTIONS.length} />;
      case GameState.Welcome:
      default:
        return <WelcomeScreen onStart={startGame} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 text-amber-900 flex flex-col items-center justify-center p-4 selection:bg-amber-300">
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-40"></div>
       <div className="w-full max-w-4xl mx-auto z-10">
        <header className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 flex items-center justify-center">
            <DongSonDrumIcon />
            Hành Trình Lịch Sử Việt Nam
          </h1>
          <p className="text-amber-700 mt-2 text-lg">Khám phá những trang sử hào hùng của dân tộc</p>
        </header>
        <main className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-amber-200">
          {renderGameState()}
        </main>
        <footer className="text-center mt-6 text-sm text-amber-700">
          <p>Một sản phẩm được tạo bởi AI dành cho mục đích giáo dục.</p>
          <p>Nhạc nền gợi ý: "Dòng máu Lạc Hồng" (instrumental).</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
