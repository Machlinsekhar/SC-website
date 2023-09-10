import React, { useState } from 'react';

const QuestionBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-4 shadow-md mb-4 rounded-md font-lexend-deco">
      <div
        className="flex items-center justify-between cursor-pointer no-outline"
        onClick={toggleAnswer}
        style={{ WebkitTapHighlightColor: 'transparent' }} // Add this CSS property
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        <div className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : 'rotate-90'}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-full h-full text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
            />
          </svg>
        </div>
      </div>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

export default QuestionBox;
