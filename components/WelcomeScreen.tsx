import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center p-8 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-amber-900">Sẵn sàng cho cuộc hành trình?</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8 text-amber-800">
        Bạn sẽ được du hành qua các mốc thời gian quan trọng, đối mặt với những thử thách kiến thức và khám phá những câu chuyện thú vị về lịch sử Việt Nam.
      </p>
      <button
        onClick={onStart}
        className="px-8 py-4 bg-red-700 text-white font-bold text-xl rounded-lg shadow-md hover:bg-red-800 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-red-300"
      >
        Bắt đầu
      </button>
    </div>
  );
};

export default WelcomeScreen;
