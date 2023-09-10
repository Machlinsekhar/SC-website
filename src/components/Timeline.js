import React from 'react';

const Timeline = () => {
  return (
    <div className="container my-10">
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        {/* left */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-[#3497F9] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-left text-lg mb-1">Initial 
Assessment </h3>
            <p className=" text-left">
            Assessing the skills and knowledge of the participants at the beginning of the program.
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#3497F9] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3497F9] shadow"></div>
          </div>
        </div>
        
        {/* right */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#3497F9] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3497F9] shadow"></div>
          </div>
          <div className="bg-[#3497F9] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-left text-lg mb-1">Report Generation</h3>
            <p className=" text-left">Generating comprehensive reports to track progress and provide insights.
            </p>
          </div>
        </div>
        {/* left */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-[#3497F9] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-left text-lg mb-1">Mentorship</h3>
            <p className=" text-left">Providing one-on-one guidance and support from experienced mentors.
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#3497F9] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3497F9] shadow"></div>
          </div>
        </div>
        
        {/* right */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#3497F9] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3497F9] shadow"></div>
          </div>
          <div className="bg-[#3497F9] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-left text-lg mb-1">Project Selection</h3>
            <p className=" text-left">Assisting participants in choosing suitable projects to apply their skills and gain practical experience.
            </p>
          </div>
        </div>
        {/* left */}
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-[#3497F9] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-left text-lg mb-1">Weekly Masterclass</h3>
            <p className=" text-left">Organizing regular interactive sessions or workshops led by industry experts to enhance participants' knowledge and skills.</p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#3497F9] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3497F9] shadow"></div>
          </div>
        </div>
 
        {/* right */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#3497F9] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3497F9] shadow"></div>
          </div>
          <div className="bg-[#3497F9] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-semibold text-left text-lg mb-1">Final Assessment</h3>
            <p className=" text-left">Conducting a comprehensive assessment at the end of the program to evaluate participants' overall progress and skills.</p>
          </div>
        </div>
            {/* left */}
            <div className="flex flex-row-reverse md:contents">
          <div className="bg-[#3497F9] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-left text-lg mb-1">Feedback & Certification</h3>
            <p className=" text-left">Providing constructive feedback on participants' performance and awarding certifications upon successful completion.
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#3497F9] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#3497F9] shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
