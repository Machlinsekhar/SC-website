import React, { useEffect, useState } from 'react';
import bg from '../images/bg.png';
import logo from '../images/logo-white.png';

const Loader = () => {
  const [randomText, setRandomText] = useState('');

  const textArray = [
    'Convincing AI that humans are in charge...',
    'Assembling a team of super-intelligent hamsters...',
    'Training squirrels for world domination...',
    'Finding the ultimate answer to the universe, and everything...',
    'Teaching penguins to fly...',
    'Summoning the spirit of Nikola Tesla...',
    'Searching for the lost city of Atlantis in binary code...',
    'Building a time machine to prevent pineapple on pizza...',
    'Developing an algorithm to determine if a cat is plotting world domination...',
    'Negotiating with aliens for advanced technological secrets...',
    'Unraveling the enigma of why the chicken crossed the road...',
    'Programming a robot to appreciate dad jokes...',
    'Unlocking the secret recipe for infinite pizza...',
    'Translating dog barks into human language...',
    'Cracking the code of making the perfect cup of tea...',
    'Discovering the meaning of life, the universe, and everything while avoiding spoilers...',
    'Inventing a device that can find missing socks...',
    'Creating a programming language spoken by dolphins...',
    'Unleashing the power of the Force in everyday programming...',
    'Teaching plants to grow money on their branches...',
  ];
  
  const randomIndex = Math.floor(Math.random() * textArray.length);
  const selectedText = textArray[randomIndex];

  useEffect(() => {
    setRandomText(selectedText);
  }, [selectedText]);

  return (
    <div className="flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center h-screen"  style={{ backgroundImage: `url(${bg})`}}>
      <div className="animate-[spin_2s_ease-in-out] rounded-full h-32 w-32">
        <img src={logo} alt="Logo" className="w-full h-full" />
      </div>
      <p className="text-white font-medium text-lg mx-10 mt-4">{randomText}</p>
    </div>
  );
};

export default Loader;
