import React from 'react';
import { FiInstagram, FiTwitter, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'; // Import icons
import Map from './Map'; 
import "../Footer.css";
import bg from '../images/bg.png';

const Foooter = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1400F6] to-[#3497F9] text-white p-8 font-lexend">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full  lg:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p className="text-gray-200 ">Source Verse Limited Liability Partnership</p>
          <p className="text-gray-200">Ed-Tech Venture</p>
          {/* <div className="mt-4 pt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mx-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            />
            <button className="bg-green-500 text-white py-2 px-4 rounded-xl">
              Subscribe
            </button>
          </div> */}
          <div className="mt-4 pt-3 flex space-x-4">
            <a href="https://instagram.com/sourcecatalyst?igshid=MzRlODBiNWFlZA==" className="text-white"><FiInstagram /></a>
            <a href="https://twitter.com/sourcecatalyst" className="text-white"><FiTwitter /></a>
            <a href="https://www.linkedin.com/company/source-catalyst/?viewAsMember=true" className="text-white"><FiLinkedin /></a>
          </div>
          <div className="mt-4 flex space-x-2 pt-3 text-gray-200">
            <FiMail href='mailto:thesourcecatalyst@gmail.com'/>
            <p>thesourcecatalyst@gmail.com</p>
          </div>
          <div className="mt-2 flex space-x-2 text-gray-200">
            <FiPhone href='tel:9321488165'/>
            <p>9321488165</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ">
          <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
          <ul>
            <li className='p-2'><a href="https://merchant.razorpay.com/policy/MLxtKHxqa6MVYs/terms" className="text-gray-200">Terms & Conditions</a></li>
            <li className='p-2'><a href="https://merchant.razorpay.com/policy/MLxtKHxqa6MVYs/privacy" className="text-gray-200">Privacy Policy</a></li>
            <li className='p-2'><a href="https://merchant.razorpay.com/policy/MLxtKHxqa6MVYs/refund" className="text-gray-200">Cancellation & Refund</a></li>
            <li className='p-2'><a href="https://merchant.razorpay.com/policy/MLxtKHxqa6MVYs/shipping" className="text-gray-200">Shipping & Delivery</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <Map /> {/* Insert your map component here */}
        </div>
      </div>
      <hr className="my-8 border-gray-200" />
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <p className="text-gray-200">&copy; 2023 Source Catalyst. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Foooter;
