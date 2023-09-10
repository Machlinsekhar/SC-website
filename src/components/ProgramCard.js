import React, { useState } from 'react';

const ProgramCard = ({ image, title, originalPrice, discountedPrice, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="max-w-[300px] min-w-[300px] mr-10 bg-white">
      <div className="border border-gray-300 rounded-xl p-4 shadow-lg ">
        <div className="flex justify-center">
          <img
            className="h-[200px] rounded-lg"
            src={image}
            alt="Card Image"
          />
        </div>
        <p className="text-xl font-medium text-gray-800 mt-2">{title}</p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-lg font-medium text-gray-500 line-through">
              ₹{originalPrice}
            </p>
            <p className="text-3xl font-bold text-[#E7AA0F]">₹{discountedPrice}</p>
          </div>
          <div>
            <button
              onClick={toggleDescription}
              className="font-medium px-4 py-2 text-gray-700 rounded-full text-sm border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>

        {showDescription && (
          <div className="mt-4">
            <p className="text-gray-600">{description}</p>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ProgramCard;
