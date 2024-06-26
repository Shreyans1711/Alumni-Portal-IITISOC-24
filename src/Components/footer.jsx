import React from "react";
import "./footer.css"
const footer = () => {
  return (
    <>
    <div className="position:absolute bg-[#0096C7] px-10 py-6 pb-4 flex flex-col text-center text-black font-bold texts text-xl  sm:flex-row sm:justify-between sm:text-left">
      <div className="sm:flex gap-5 ">
        <div className="pl-[40%] sm:p-0">
          <div className="photoAlum"></div>
        </div>
        <div className="">
          <div className="AlumniText drop-shadow-xl text-3xl headLines">Alumni Association</div>
          <div className="collegeName">
            Indian Institute of Technology Indore
          </div>
        </div>
      </div>
      <div className="quickLinks">
        <ul>
            <li className="text-3xl headLines">Quick Links</li>
            <li>IIT INDORE</li>
            <li>Student Gymkhana</li>
            <li>Director</li>
        </ul>
      </div>
      <div className="ContactUs">
        <ul>
        <li className="text-3xl headLines">Contact Us</li>
        <li>Phone:+91 1234567890</li>
        <li>Email: xyz@iiti.ac.in</li>
        <li className="flex justify-center pt-4"><svg className="w-7 h-7 rounded-2xl fill-white	" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg></li>
        </ul>
      </div>
    </div>
    <div className="actualFooter w-[100vw] h-[40px] bg-[#023E8A] font-bold text-sm flex justify-center items-center texts sm:text-2xl">
      Alumni Cell - IIT Indore @2024. All Rights Reserved 
    </div>
    </>
  );
};

export default footer;
