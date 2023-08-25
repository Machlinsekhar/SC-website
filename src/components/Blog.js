import React, { useState } from 'react';

const BlogItem = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const renderDescription = () => {
    if (expanded) {
      return <p className="text-gray-600 text-left">{description}</p>;
    } else {
      const truncatedDescription = description.slice(0, 100);
      return (
        <>
          <p className="text-gray-600 text-left">{truncatedDescription}</p>
          <button
            onClick={toggleExpanded}
            className="text-[#E7AA0F] font-medium underline mt-2 focus:outline-none"
          >
            {expanded? "View Less" : "View More"}
          </button>
        </>
      );
    }
  };

  return (
    <div className="md:max-w-[1300px] md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
    <div className="mx-auto md:mx-0 mt-5 border border-gray-300 rounded-xl p-4 shadow-lg w-[380px]">
      <img
        className="w-full h-[200px] object-cover rounded-lg"
        src={image}
        alt="Blog Image"
      />

      <p className="text-xl font-medium text-gray-800 mt-2 text-left">{title}</p>

      <div className="mt-4">{renderDescription()}</div>
    </div>
  </div>
);
};
export default BlogItem;
