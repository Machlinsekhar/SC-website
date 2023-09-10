import React from 'react';
import { FiInstagram, FiTwitter, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'; // Import icons
import Map from './Map'; // Import your map component
import "../Footer.css";

const Foooter = () => {
  return (
    <footer className="bg-[#02051E]  text-white p-8">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full  lg:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p className="text-gray-400 ">Source Verse Limited Liability Partnership</p>
          <p className="text-gray-400">Ed-Tech Venture</p>
          <div className="mt-4 pt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mx-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            />
            <button className="bg-green-500 text-white py-2 px-4 rounded-xl">
              Subscribe
            </button>
          </div>
          <div className="mt-4 pt-3 flex space-x-4">
            <a href="https://instagram.com/sourcecatalyst?igshid=MzRlODBiNWFlZA==" className="text-white"><FiInstagram /></a>
            <a href="https://twitter.com/sourcecatalyst" className="text-white"><FiTwitter /></a>
            <a href="https://www.linkedin.com/company/source-catalyst/?viewAsMember=true" className="text-white"><FiLinkedin /></a>
          </div>
          <div className="mt-4 flex space-x-2 pt-3 text-gray-400">
            <FiMail href='mailto:thesourcecatalyst@gmail.com'/>
            <p>thesourcecatalyst@gmail.com</p>
          </div>
          <div className="mt-2 flex space-x-2 text-gray-400">
            <FiPhone href='tel:9321488165'/>
            <p>9321488165</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 ">
          <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
          <ul>
            <li className='p-2'><a href="https://merchant.razorpay.com/policy/MLxtKHxqa6MVYs/terms" className="text-gray-400">Terms & Conditions</a></li>
            <li className='p-2'><a href="https://merchant.razorpay.com/policy/MLxtKHxqa6MVYs/privacy" className="text-gray-400">Privacy Policy</a></li>
            <li className='p-2'><a href="https://merchant.razorpay.com/policy/MLxtKHxqa6MVYs/refund" className="text-gray-400">Cancellation & Refund</a></li>
            <li className='p-2'><a href="https://merchant.razorpay.com/policy/MLxtKHxqa6MVYs/shipping" className="text-gray-400">Shipping & Delivery</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <Map /> {/* Insert your map component here */}
        </div>
      </div>
      <hr className="my-8 border-gray-600" />
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <p className="text-gray-400">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Foooter;
