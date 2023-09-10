import React from 'react';

const BlockImage = ({ imageUrl, heading, paragraph }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 mx-5 md:mx-40">
      <div className="relative h-80">
        <img
          src={imageUrl}
          alt="Image"
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{heading}</h2>
        <p className="text-gray-700">{paragraph}</p>
        <button className="mt-4  hover:bg-blue-600 text-blue-600 py-2 px-4 rounded focus:outline-none">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlockImage;
