import React, { useEffect, useState } from 'react';

function Numbers() {
  const [studentsUpskilled, setStudentsUpskilled] = useState(0);
  const [studentsCommunity, setStudentsCommunity] = useState(0);
  const [studentsPlaced, setStudentsPlaced] = useState(0);
  const [targetReached, setTargetReached] = useState(false);

  const targetValues = {
    studentsUpskilled: 1500,
    studentsCommunity: 2500,
    studentsPlaced: 200,
  };

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setStudentsUpskilled((prevValue) =>
        prevValue < targetValues.studentsUpskilled ? prevValue + 10 : targetValues.studentsUpskilled
      );
      setStudentsCommunity((prevValue) =>
        prevValue < targetValues.studentsCommunity ? prevValue + 15 : targetValues.studentsCommunity
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
      studentsCommunity === targetValues.studentsCommunity &&
      studentsPlaced === targetValues.studentsPlaced
    ) {
      setTargetReached(true);
    }
  }, [studentsUpskilled, studentsCommunity, studentsPlaced]);

  const getNumberDisplayStyle = (number) => {
    if (number === targetValues.studentsUpskilled) {
      return 'transition-all duration-1000 ease-out';
    }
    return '';
  };

  const getNumberDisplayText = (number) => {
    if (
      studentsUpskilled === targetValues.studentsUpskilled &&
      studentsCommunity === targetValues.studentsCommunity &&
      studentsPlaced === targetValues.studentsPlaced &&
      targetReached
    ) {
      return `${number}+`;
    }
    return number;
  };

  return (
    <div className="space-y-10 md:space-y-0 ml-5 flex flex-col md:flex md:flex-row justify-between md:max-w-[1300px] md:mx-auto mt-10">
      <div className={`flex flex-col ${getNumberDisplayStyle(studentsUpskilled)}`}>
        <p className="text-4xl text-[#AA4EC3] text-left font-bold">{getNumberDisplayText(studentsUpskilled)}</p>
        <p className="text-lg font-medium mt-1 text-left">Students Upskilled</p>
      </div>

      <div className={`flex flex-col ${getNumberDisplayStyle(studentsCommunity)}`}>
        <p className="text-4xl text-[#AA4EC3] text-left font-bold">{getNumberDisplayText(studentsCommunity)}</p>
        <p className="text-lg font-medium mt-1 text-left">Students Community</p>
      </div>

      <div className={`flex flex-col ${getNumberDisplayStyle(studentsPlaced)}`}>
        <p className="text-4xl text-[#AA4EC3] text-left font-bold">{getNumberDisplayText(studentsPlaced)}</p>
        <p className="text-lg font-medium mt-1 text-left">Students Placed</p>
      </div>
    </div>
  );
}

export default Numbers;
