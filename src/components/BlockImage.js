import React, { useState } from 'react';

const BlockImage = ({ blogData }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { imageUrl, heading, initialParagraph, questions, endingParagraph } = blogData;

  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center relative my-10 max-w-[800px] mx-auto font-lexend cursor-pointer mr-10" onClick={toggleModal}>
        <div className="relative h-80">
          <img src={imageUrl} alt="Image" className="object-cover w-full h-full rounded-t-lg" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold pb-2">{heading}</h2>
        <p className="text-gray-700 md:text-lg pb-3">{initialParagraph}</p>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 backdrop-blur-xl overflow-y-auto">
          <div className="bg-white border rounded-lg shadow-md p-4 w-5/6 overflow-y-auto absolute bottom-20">
            {/* Modal content */}
            <div className="relative h-80">
          <img src={imageUrl} alt="Image" className="object-cover w-full h-full rounded-t-lg" />
        </div>
            <h2 className="text-2xl md:text-3xl font-semibold pb-2">{heading}</h2>
            <p className="text-gray-700 md:text-lg pb-3">{initialParagraph}</p>
            {questions.map((question, index) => (
              <div key={index}>
                <h1 className="text-lg md:text-xl font-medium">{question.question}</h1>
                <p className="text-gray-700 md:text-lg pb-3">{question.answer}</p>
              </div>
            ))}
            <p className="text-gray-700 md:text-lg pb-3">{endingParagraph}</p>
            <button
              onClick={toggleModal}
              className="mt-4 text-blue-600 py-2 px-4 rounded focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockImage;
