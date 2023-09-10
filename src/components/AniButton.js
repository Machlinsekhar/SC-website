import React from 'react';

const AnimatedButton = () => {
  return (
    <div className="relative">
      {/* Diagonal lines */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`absolute h-full w-1 bg-white opacity-50 transform rotate-45 translate-y-${index + 1}`}
          ></div>
        ))}
      </div>
      {/* Shining green button */}
      <button className="bg-green-500 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        Click Me
      </button>
    </div>
  );
};

export default AnimatedButton;
