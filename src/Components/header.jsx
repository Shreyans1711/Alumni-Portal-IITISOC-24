import { React, useState, useEffect } from "react";
import ACLogo from "../assets/AlumniCellLogo.jpeg";
import iitilogo from "../assets/iitilogo.png";
import profilelogo from "../assets/profilelogo.jpg";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../Styles/header.module.css";

function Header() {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (window.screen.width <= 768) {
      setToggle(false);
    }
  }, [1]);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="p-2 bg-[#0096C7] flex justify-around">
        <div>
          <a href="/">
            <img
              src={ACLogo}
              alt=""
              style={{
                width: "80px",
                height: "70px",
                backgroundColor: "transparent",
              }}
            />
          </a>
        </div>
        <div>
          <div className="font-bold text-4xl text-white text-center font-outline-1 bg-[#0096C7]">
            Alumni Portal
          </div>
          <div className="font-bold text-white text-2xl text-center font-outline-1 bg-[#0096C7]">
            Indian Institute of Technology Indore
          </div>
        </div>
        <div>
          <a href="https://www.iiti.ac.in/">
            <img
              src={iitilogo}
              alt=""
              style={{
                width: "80px",
                height: "70px",
                backgroundColor: "white",
              }}
            />
          </a>
        </div>
      </div>
      {window.screen.width <= 768 && (
        <div className="bg-[#023E8A] p-1 flex justify-between ">
          <div className="text-2xl text-white font-bold font-outline-1 pl-3">
            Home
          </div>
          <a
            onClick={handleToggle}
            href="javascript:void(0);"
            className="float-right p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-list"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </a>
        </div>
      )}
      {toggle && (
        <div className="bg-[#023E8A] p-1 md:flex justify-around">
          <div class="dropdown bg-[#023E8A]">
            <button
              class="text-2xl text-white font-bold font-outline-1 btn dropdown-toggle bg-[#023E8A]"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              About Us
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/aboutus/IITIAumniAssociation">
                  IITI Alumni Association
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/aboutus/MessageFromDirector">
                  Director's Message
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/aboutus/MessageFromDeanACR">
                   Message from Dean ACR
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/aboutus/developers">
                  Developers
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/aboutus/OurTeam">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown bg-[#023E8A]">
            <button
              class="text-2xl text-white font-bold font-outline-1 btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Events
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/events/latestevents">
                  Latest Events
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/events/reunions">
                  Reunions
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/events/chapters">
                  Chapters
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown bg-[#023E8A]">
            <button
              class="text-2xl text-white font-bold font-outline-1 btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Updates
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/updates/alumninews">
                  Alumni News
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/updates/newsletter">
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/updates/noticeboard">
                  NoticeBoard
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown bg-[#023E8A]">
            <button
              class="text-2xl text-white font-bold font-outline-1 btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Awards
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white" 
                  href="/awards/alumniawards">
                  Alumni Awards
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown bg-[#023E8A]">
            <button
              class="text-2xl text-white font-bold font-outline-1 btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Mentorship
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/mentorship/chatWithMentor">
                  Chat with mentor
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item text-xl text-black bg-white"
                  href="/mentorship/jobs">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-[#023E8A]">
            <button
              class="text-2xl text-white font-bold font-outline-1 btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img
                src={profilelogo}
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item text-xl text-black bg-white" href="#">
                  profile
                </a>
              </li>
              <li>
                <button class="dropdown-item text-xl text-black bg-white">logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
