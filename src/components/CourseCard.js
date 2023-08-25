import React from 'react';

const CourseCard = ({ heading, subheading }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md m-2 h-64 ">
      <div className="mb-2">
        <h2 className="text-lg font-semibold text-left">{heading}</h2>
      </div>
      <div className="mb-2">
        <p className="text-sm text-left">{subheading}</p>
      </div>
      <div className='flex'>
        <button className='rounded-lg bg-gradient-to-r from-[#AA4EC3] to-[#540469] text-white py-2 px-2'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
