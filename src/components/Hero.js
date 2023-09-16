import React from 'react';
import placeholder from '../images/placeholder.png';
import CustomCarousel from './CustomCarousel';
import bg from '../images/bg.png';

const Hero = () => {


    return (

        <div className=" w-full h-full bg-no-repeat bg-cover bg-center md:p-20"  style={{ backgroundImage: `url(${bg})`}}>
        {/* <div className='grid place-items-center'>
          <div className="grid place-item-center max-h-[1000px] my-5">
            <img
              className="rounded-xl h-[200px]"
              src={placeholder}
              alt="Image"
            />
          </div>
        </div>
       */}
       {/* <CustomCarousel /> */}
       
       <div className="mx-5 py-20  ">
  <p className=" font-lexend font-bold text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
    LEARN. GROW. UPSKILL.
  </p>

  <p className=" font-regular font-lexend text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 pb-5">
    {/* The Next Step in Your Career Starts Here. */}
    Experience Growth
  </p>

  <div className="flex justify-center pb-5">
  <a href='https://app.thesourcecatalyst.in/' target="_blank" className="sm:w-60 h-12 sm:h-16 p-2 sm:p-3 bg-[#2E7CF6] font-lexend rounded-full text-base sm:text-lg md:text-xl lg:text-2xl  text-white text-center border border-white border-2">
  GET UPSKILLED
</a>
  </div>
</div>

       </div>
  )
}

export default Hero