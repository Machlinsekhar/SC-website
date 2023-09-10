import React from 'react';
import logo from '../images/logo-black.png';
// import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  // const navigate = useNavigate();
  // const handleRegisterClick = () => {
  //   navigate('/registration');
  // };

  return (
    <header className="flex items-center justify-between pl-4 px-6">
      <div className="flex items-center">
        <img className="" src={logo} alt="Logo" />
        {/* <div className="md:ml-1">
          <div className="flex md:flex-row flex-col md:space-x-2">
            <p className="font-bold text-left md:text-left tracking-widest">SOURCE</p>
            <p className="font-bold text-left md:text-left tracking-widest">CATALYST</p>
          </div>
        </div> */}
      </div>

      <div className='flex items-center'>
        {/* <div className='ml-4'>
        <button className='rounded-lg bg-gradient-to-r from-[#162F5A] to-[#3497F9] text-white py-2 px-3 hidden sm:inline-block'>
            Free Workshop
          </button></div>
          <div className='ml-4'>
        <button  
        // onClick={handleRegisterClick} 
        className='rounded-lg bg-gradient-to-r from-[#162F5A] to-[#3497F9] text-white py-2 px-3 ' >
            Register
          </button></div> */}
        <div className="ml-4">
          <button className="text-[#3B3B3B] outline outline-[#E6E6E6] outline-1 p-2 rounded-lg">
            <svg className="h-5 w-6 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M2 5h20a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 8h20a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 8h20a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
