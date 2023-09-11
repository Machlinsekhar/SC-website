import React, { useState } from 'react';

const BlockImage = ({ imageUrl, heading, initialParagraph, expandedParagraph }) => {
  const [showExpanded, setShowExpanded] = useState(false);

  const toggleExpanded = () => {
    setShowExpanded(!showExpanded);
  };
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 mx-5 md:mx-40 font-lexend-deca">
      <div className="relative h-80">
        <img
          src={imageUrl}
          alt="Image"
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
        <p className="text-gray-700 md:text-lg">
          {showExpanded ? expandedParagraph : initialParagraph}
        </p>
        {showExpanded ? (
          <button
            onClick={toggleExpanded}
            className="mt-4 text-blue-600 py-2 px-4 rounded focus:outline-none"
          >
            Read Less
          </button>
        ) : (
          <button
            onClick={toggleExpanded}
            className="mt-4 text-blue-600 py-2 px-4 rounded focus:outline-none"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default BlockImage;
