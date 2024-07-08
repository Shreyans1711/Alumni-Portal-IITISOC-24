import React from "react";
import "./Components-Styles/footer.css";
const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <body className="bg-[#0096C7]">
        <div className="position:absolute  px-10 py-6 pb-4 flex flex-col text-center font-bold text-xl  sm:flex-row sm:justify-between sm:content-center sm:text-left">
          <div className="sm:flex ">
            <div className="pl-[40%] sm:p-1 ">
              <a href="/">
                <div className="photoAlum"></div>
              </a>
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
              <li className="font-bold text-4xl text-white text-center font-outline-1 pb-3">
                Quick Links
              </li>
              <li className="">
                <a
                  href="https://www.iiti.ac.in/"
                  className="no-underline font-bold text-xl text-white text-center font-outline-1">
                  IIT INDORE
                </a>
              </li>
              <li className="">
                <a
                  href="https://gymkhana.iiti.ac.in/"
                  className="no-underline font-bold text-xl text-white text-center font-outline-1">
                  Student Gymkhana
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.iiti.ac.in/director#:~:text=Dr.,%2C%20at%20IIT%20Bombay%2C%20Dr."
                  className="no-underline font-bold text-xl text-white text-center font-outline-1">
                  Director
                </a>
              </li>
            </ul>
          </div>
          <div className="ContactUs">
            <ul>
              <li className="font-bold text-4xl text-white text-center font-outline-1 pb-3">
                Contact Us
              </li>
              <li className="font-bold text-xl text-white text-center font-outline-1">
                Phone:+91 1234567890
              </li>
              <li className="font-bold text-xl text-white text-center font-outline-1">
                Email: alumnicell@iiti.ac.in
              </li>
              <li className="flex justify-center pt-1 hover:cursor-pointer ">
                <div className="footer-icons">
                  <a
                    style={{
                      display: "inline-block",
                      width: "35px",
                      height: "35px",
                      cursor: "pointer",
                      backgroundColor: "#33383b",
                      borderRadius: "2px",
                      fontSize: "20px",
                      color: "#ffffff",
                      textAlign: "center",
                      lineHeight: "35px",
                      marginRight: "5px",
                      marginBottom: "5px",
                    }}
                    href="https://google.com/"
                    target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    style={{
                      display: "inline-block",
                      width: "35px",
                      height: "35px",
                      cursor: "pointer",
                      backgroundColor: "#33383b",
                      borderRadius: "2px",
                      fontSize: "20px",
                      color: "#ffffff",
                      textAlign: "center",
                      lineHeight: "35px",
                      marginRight: "5px",
                      marginBottom: "5px",
                    }}
                    href="https://google.com/"
                    target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    style={{
                      display: "inline-block",
                      width: "35px",
                      height: "35px",
                      cursor: "pointer",
                      backgroundColor: "#33383b",
                      borderRadius: "2px",
                      fontSize: "20px",
                      color: "#ffffff",
                      textAlign: "center",
                      lineHeight: "35px",
                      marginRight: "10px",
                      marginBottom: "5px",
                    }}
                    href="https://google.com/"
                    target="_blank">
                    {" "}
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="actualFooter w-[100vw] h-[40px] bg-[#023E8A] font-bold text-sm flex justify-center items-center texts sm:text-2xl text-white text-center font-outline-1">
          Alumni Cell - IIT Indore @2024. All Rights Reserved
        </div>
      </body>
    </>
  );
};

export default Footer;
