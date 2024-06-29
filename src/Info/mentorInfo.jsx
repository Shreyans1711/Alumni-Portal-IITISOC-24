import React from "react";
import "../Pages/Mentorship/Mentorship-Styles/mentorInfo.css";
const mentorInfo = () => {
  return (
    <div className="md:flex md:justify-center gap-5 p-5 flex-col md:flex-row">
      <div className="outer flex justify-center">
        <div className="MentorPhoto bg-cover rounded-full w-[59vw] h-[59vw] md:w-[30vh] md:h-[30vh]"></div>
      </div>
      <div className="bg-[#F5A7A7] rounded-full w-[100%] md:w-full md:rounded-full">
        <div className="text-xl">
          <div className="DetailOfMentor flex flex-col items-center md:items-start pt-12 text-center md:text-left pl-0 md:pl-10">
            <div className="font-bold text-2xl">XYZ</div>
            <div>I am there to help you</div>
            <div className="pb-5">I am working here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mentorInfo;
