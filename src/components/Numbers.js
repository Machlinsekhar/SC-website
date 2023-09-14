import React, { useEffect, useState } from 'react';

function Numbers() {
  const [studentsUpskilled, setStudentsUpskilled] = useState(0);
  const [activeMembers, setStudentsCommunity] = useState(0);
  const [studentsPlaced, setStudentsPlaced] = useState(0);
  const [targetReached, setTargetReached] = useState(false);

  const targetValues = {
    studentsUpskilled: 1555,
    activeMembers: 2569,
    studentsPlaced: 200,
  };

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setStudentsUpskilled((prevValue) =>
        prevValue < targetValues.studentsUpskilled ? prevValue + 10 : targetValues.studentsUpskilled
      );
      setStudentsCommunity((prevValue) =>
        prevValue < targetValues.activeMembers ? prevValue + 15 : targetValues.activeMembers
      );
      setStudentsPlaced((prevValue) =>
        prevValue < targetValues.studentsPlaced ? prevValue + 5 : targetValues.studentsPlaced
      );
    }, 10);

    return () => {
      clearInterval(counterInterval);
    };
  }, []);

  useEffect(() => {
    if (
      studentsUpskilled === targetValues.studentsUpskilled &&
      activeMembers === targetValues.activeMembers &&
      studentsPlaced === targetValues.studentsPlaced
    ) {
      setTargetReached(true);
    }
  }, [studentsUpskilled, activeMembers, studentsPlaced]);

  const getNumberDisplayStyle = (number) => {
    if (number === targetValues.studentsUpskilled) {
      return 'transition-all duration-1000 ease-out';
    }
    return '';
  };

  const getNumberDisplayText = (number) => {
    if (
      studentsUpskilled === targetValues.studentsUpskilled &&
      activeMembers === targetValues.activeMembers &&
      studentsPlaced === targetValues.studentsPlaced &&
      targetReached
    ) {
      return `${number}+`;
    }
    return number;
  };
  
  return (
    <div className=" mx-5 flex flex-row md:flex font-lexend md:flex-row justify-between md:max-w-[1300px] md:mx-auto pt-10">

<div className={`flex flex-col ${getNumberDisplayStyle(activeMembers)}`}>
        <p className="md:text-4xl text-3xl text-[#3497F9] text-left font-bold">{getNumberDisplayText(activeMembers)}</p>
        <p className="text-lg font-medium mt-1 text-left">Active Members</p>
      </div>

      <div className={`flex flex-col ${getNumberDisplayStyle(studentsUpskilled)}`}>
        <p className="md:text-4xl text-3xl text-[#3497F9] text-left font-bold">{getNumberDisplayText(studentsUpskilled)}</p>
        <p className="text-lg font-medium mt-1 text-left">Students Upskilled</p>
      </div>


      {/* <div className={`flex flex-col ${getNumberDisplayStyle(studentsPlaced)}`}>
        <p className="text-4xl text-[#3497F9] text-left font-bold">{getNumberDisplayText(studentsPlaced)}</p>
        <p className="text-lg font-medium mt-1 text-left">Students Placed</p>
      </div> */}
    </div>
  );
}

export default Numbers;
