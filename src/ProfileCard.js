import React from 'react';

const ProfileCard = ({ name, degree, photoSrc, verified }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between font-lexend-deco">
      
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden w-16 h-16 mr-4">
          <img src={photoSrc}  className="w-full h-full object-cover" />
        </div>
        
        <div>
          <h2 className="text-black font-semibold">{name}</h2>
          <p className="text-gray-600">{degree}</p>
        </div>
      </div>
      <div className='flex mb-10 justify-end'>
        <div className="flex rounded-full items-center bg-[#FFE500]">
            
          <span className="text-white ml-2">&#127891;</span> {/* Cap symbol */}
          <p className="text-white text-xs mr-2 font-bold ">VERIFIED</p>
        </div>
        </div>
    </div>
  );
};

export default ProfileCard;
