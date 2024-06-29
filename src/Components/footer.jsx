import React from "react";
import "./Components-Styles/footer.css";
const Footer = () => {
  return (
    <body className="bg-[#0096C7]">
      <div className="position:absolute  px-10 py-6 pb-4 flex flex-col text-center font-bold text-xl  sm:flex-row sm:justify-between sm:content-center sm:text-left">
        <div className="sm:flex ">
          <div className="pl-[40%] sm:p-1 ">
            <a href="/"><div className="photoAlum"></div></a>
          </div>
          <div className="mt-3 ">
            <div className="AlumniText font-bold text-4xl text-white text-center font-outline-1 ">
              Alumni Association
            </div>
            <div className="collegeName font-bold text-xl text-white text-center font-outline-1">
              Indian Institute of Technology Indore
            </div>
          </div>
        </div>
        <div className="quickLinks ">
          <ul>
            <li className="font-bold text-4xl text-white text-center font-outline-1 pb-3">Quick Links</li>
            <li className=""><a href="https://www.iiti.ac.in/" className="no-underline font-bold text-xl text-white text-center font-outline-1">IIT INDORE</a></li>
            <li className=""><a href="https://gymkhana.iiti.ac.in/" className="no-underline font-bold text-xl text-white text-center font-outline-1">Student Gymkhana</a></li>
            <li className=""><a href="https://www.iiti.ac.in/director#:~:text=Dr.,%2C%20at%20IIT%20Bombay%2C%20Dr." className="no-underline font-bold text-xl text-white text-center font-outline-1">Director</a></li>
          </ul>
        </div>
        <div className="ContactUs">
          <ul>
            <li className="font-bold text-4xl text-white text-center font-outline-1 pb-3">Contact Us</li>
            <li className="font-bold text-xl text-white text-center font-outline-1">Phone:+91 1234567890</li>
            <li className="font-bold text-xl text-white text-center font-outline-1">Email: alumnicell@iiti.ac.in</li>
            <li className="flex justify-center pt-1 hover:cursor-pointer ">
              <svg
              onClick={()=>{
                window.open("https://www.instagram.com/alumni_cell_iiti/","_blank")
              }}
                className="w-7 h-7 rounded-2xl "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M17.5078 6.5L17.4988 6.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="actualFooter w-[100vw] h-[40px] bg-[#023E8A] font-bold text-sm flex justify-center items-center texts sm:text-2xl text-white text-center font-outline-1">
        Alumni Cell - IIT Indore @2024. All Rights Reserved
      </div>
    </body>
  );
};

export default Footer;
