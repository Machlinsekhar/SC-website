import React from 'react';
import img from '../images/app-mockup.png';

const Image = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-2 md:max-w-[1200px]">
        <img
          className="w-full h-auto"
          src={img}
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Image;
