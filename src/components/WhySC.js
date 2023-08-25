import React, { useState } from "react";

const WhySC = () => {
  const [showFullDescription1, setShowFullDescription1] = useState(false);
  const [showFullDescription2, setShowFullDescription2] = useState(false);
  const [showFullDescription3, setShowFullDescription3] = useState(false);
  const [showFullDescription4, setShowFullDescription4] = useState(false);
  const [showFullDescription5, setShowFullDescription5] = useState(false);
  const toggleDescription1 = () => {
    setShowFullDescription1(!showFullDescription1);
  };
  const toggleDescription2 = () => {
    setShowFullDescription2(!showFullDescription2);
  };
  const toggleDescription3 = () => {
    setShowFullDescription3(!showFullDescription3);
  };
  const toggleDescription4 = () => {
    setShowFullDescription4(!showFullDescription4);
  };
  const [showAllBlocks, setShowAllBlocks] = useState(false);

  const toggleBlocksVisibility = () => {
    setShowAllBlocks(!showAllBlocks);
  };
  
  return (
    <div className={`bg-white py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-2 md:flex ${showAllBlocks ? 'md:grid-cols-4' : 'md:grid-cols-2'}`}>
      {/* Box 1 */}
      <div className="md:w-1/4 bg-white p-6 rounded shadow-md mt-6 md:mt-0">
        <h2 className="text-xl font-semibold mb-2">Ignite Learning through Projects</h2>
        <p className="text-gray-600 mb-4">
          {showFullDescription1
            ? `Education comes alive when knowledge meets action. Source Catalyst transforms learning with hands-on projects, letting you turn theory into real-world expertise.`
            : `Education comes alive when knowledge meets action. Source Catalyst...`}
        </p>
        <button
          className="text-blue-500 hover:underline"
          onClick={toggleDescription1}
        >
          {showFullDescription1 ? "View Less" : "View More"}
        </button>
      </div>

      {/* Box 2 */}
      <div className="md:w-1/4 bg-white   p-6 rounded shadow-md mt-6 md:mt-0">
        <h2 className="text-xl font-semibold mb-2">Connect with Industry Titans</h2>
        <p className="text-gray-600 mb-4">
          {showFullDescription2
            ? `Beyond textbooks, we bring you face-to-face with
            industry icons. Our weekly masterclasses deliver insights from the very minds shaping
            the world, making your learning journey extraordinary.`
            : `Beyond textbooks, we bring you face-to-face with
            industry icons. Our...`}
        </p>
        <button
          className="text-blue-500 hover:underline"
          onClick={toggleDescription2}
        >
          {showFullDescription2 ? "View Less" : "View More"}
        </button>
        
      </div>

      <div className="md:w-1/4 bg-white  p-6 rounded shadow-md mt-6 md:mt-0">
        <h2 className="text-xl font-semibold mb-2">Crafted by Experts, for Excellence</h2>
        <p className="text-gray-600 mb-4">
          {showFullDescription3
            ? ` Elevate your skills with projects meticulously
            curated by industry experts. Every challenge you conquer isn't just a task – it's a step
            toward professional excellence.`
            : `Elevate your skills with projects meticulously
            curated by industry experts. Every...`}
        </p>
        <button
          className="text-blue-500 hover:underline"
          onClick={toggleDescription3}
        >
          {showFullDescription3 ? "View Less" : "View More"}
        </button>
   
      </div>

      <div className="md:w-1/4 bg-white  p-6 rounded shadow-md mt-6 md:mt-0">
        <h2 className="text-xl font-semibold mb-2">Guidance Beyond Limits:</h2>
        <p className="text-gray-600 mb-4">
          {showFullDescription4
            ? ` Doubts crumble against the power of personal mentorship.
            Our one-on-one guidance eradicates roadblocks, propelling you toward a future fueled
            by confidence.`
            : `Doubts crumble against the power of personal mentorship.
            Our...`}
        </p>
        <button
          className="text-blue-500 hover:underline"
          onClick={toggleDescription4}
        >
          {showFullDescription4 ? "View Less" : "View More"}
        </button>
    
      </div>

      {/* <button className="text-blue-500 hover:underline" onClick={toggleBlocksVisibility}>
        {showAllBlocks ? 'View Less' : 'View All'}
      </button> */}
    </div>
  );
};

export default WhySC;
