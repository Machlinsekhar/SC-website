import React from 'react';

const ProgramCard = ({ image, title, originalPrice, discountedPrice }) => {
  return (
    <div className="md:max-w-[1300px] md:mx-auto">
      <div className="mx-auto md:mx-0 mt-5 border border-gray-300 rounded-xl p-4 shadow-lg w-[380px]">
        <img
          className="w-full h-[200px] object-cover rounded-lg"
          src={image}
          alt="Card Image"
        />

        <p className="text-xl font-medium text-gray-800 mt-2">{title}</p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-lg font-medium text-gray-500 line-through">
              ₹{originalPrice}
            </p>
            <p className="text-3xl font-bold text-[#E7AA0F]">₹{discountedPrice}</p>
          </div>
          <div>
            <button className="font-medium px-4 py-2 text-gray-700 rounded-full text-sm border border-gray-300 hover:bg-gray-100 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
