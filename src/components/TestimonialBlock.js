import React from 'react';

const TestimonialBlock = ({ testimonial, imageSrc, tname, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center relative " >
      <p className="text-lg font-medium font-jost">{testimonial}</p>
      <p className="text-lg font-bold pt-3 font-lexend-deca">{tname}</p>
      <p className="text-sm font-medium pb-10 text-[#2E7CF6] font-lexend-deca">{title}</p>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-20 h-20 bg-blue-500 rounded-full overflow-hidden">
          <img src={imageSrc} alt="Testimonial" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialBlock;
