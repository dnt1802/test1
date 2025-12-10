import React from 'react';

interface EndScreenProps {
  score: number;
  onRestart: () => void;
  totalQuestions: number;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, onRestart, totalQuestions }) => {
  const percentage = Math.round((score / (totalQuestions * 10)) * 100);
  let message = '';
  if (percentage >= 80) {
    message = 'Xuất sắc! Bạn là một nhà sử học thực thụ.';
  } else if (percentage >= 50) {
    message = 'Khá lắm! Bạn có kiến thức lịch sử rất tốt.';
  } else {
    message = 'Cố gắng hơn nhé! Hành trình vạn dặm bắt đầu từ một bước chân.';
  }

  return (
    <div className="text-center flex flex-col items-center justify-center p-8 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-amber-900">Hoàn thành hành trình!</h2>
      <p className="text-xl mb-2 text-amber-800">Điểm cuối cùng của bạn:</p>
      <p className="text-6xl font-bold text-red-700 mb-6">{score}</p>
      <p className="text-lg font-semibold italic text-amber-900 mb-8">{message}</p>
      <button
        onClick={onRestart}
        className="px-8 py-4 bg-red-700 text-white font-bold text-xl rounded-lg shadow-md hover:bg-red-800 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-300"
      >
        Chơi lại
      </button>
    </div>
  );
};

export default EndScreen;
