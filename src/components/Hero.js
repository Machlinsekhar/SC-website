import React from 'react';
import placeholder from '../images/placeholder.png';

const Hero = () => {
    return (

        <div className='font-Poppins w-full bg-gradient-to-r from-[#AA4EC3] to-[#540469]'>
        <div className='grid place-items-center'>
          <div className="grid place-item-center max-h-[1000px] my-5">
            <img
              className="rounded-xl h-[200px]"
              src={placeholder}
              alt="Image"
            />
          </div>
        </div>
      
        <div className='mx-5'>
    <p className='text-2xl font-bold text-white text-left'>
    LEARN. GROW. UPSKILL.
    </p>

    
    <p className='text-xl font-regular text-white text-left mt-2 pb-5'>
    At <span className='font-bold'>Source Catalyst</span>, our mission is to empower individuals by providing them with the tools and resources to learn, develop, and upskill for a brighter future.
    </p>

    </div>

       </div>
  )
}

export default Hero