import React, { useState } from 'react';

const BlockImage = ({ blogData }) => {
  const [showExpanded, setShowExpanded] = useState(false);

  const toggleExpanded = () => {
    setShowExpanded(!showExpanded);
  };

  const {
    imageUrl,
    heading,
    initialParagraph,
    questions,
    endingParagraph,
  } = blogData;

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 mx-5 md:mx-40 font-lexend">
      <div className="relative h-80">
        <img
          src={imageUrl}
          alt="Image"
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl md:text-3xl font-semibold pb-2">{heading}</h2>
        <p className="text-gray-700 md:text-lg pb-3">{initialParagraph}</p>

        {showExpanded &&
          questions.map((question, index) => (
            <div key={index}>
              <h1 className="text-lg md:text-xl font-medium">
                {question.question}
              </h1>
              <p className="text-gray-700 md:text-lg pb-3">{question.answer}</p>
            </div>
          ))}

        {showExpanded && (
          <p className="text-gray-700 md:text-lg pb-3">{endingParagraph}</p>
        )}

        <button
          onClick={toggleExpanded}
          className="mt-4 text-blue-600 py-2 px-4 rounded focus:outline-none"
        >
          {showExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default BlockImage;
