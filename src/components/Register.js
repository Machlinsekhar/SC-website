import React from 'react';
import CustomCarousel from './CustomCarousel';

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container mx-auto flex">
        <div className="w-1/2 p-8">
          <CustomCarousel slidesToShowMobile={1} slidesToShowDesktop={3} />
          <div className="mt-8 text-center flex justify-center items-center space-x-12">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold text-[#3497F9]">1500+</span>
            <p className="text-[#162F5A]">Students Upskilled</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold text-[#3497F9]">2500+</span>
            <p className="text-[#162F5A]">Students Community</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold text-[#3497F9]">200+</span>
            <p className="text-[#162F5A]">Students Placed </p>
          </div>
        </div>
        </div>
        
        <div className="w-1/2 p-8 bg-white rounded shadow-md mr-7">
          <h2 className="text-2xl font-semibold mb-4 ">Registration Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Id
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='enter your email id'
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Enter your Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder='password please'
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#162F5A] to-[#3497F9] text-white py-2 px-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Register;
