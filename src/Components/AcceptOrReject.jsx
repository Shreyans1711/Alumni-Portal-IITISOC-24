import { React, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function AcceptOrReject(props) {
  console.log(props);
  const handleAcceptChat = async () => {
    Cookies.set("currentChat", props.menteeId);
    const res = await axios
      .post("http://localhost:3000/mentorship/requestaccepted", { data: props })
      .then((e) => {
        console.log(e);
      });
  };

  const handleRejectChat = async () => {
    console.log(props);
    const res = await axios
      .post("http://localhost:3000/mentorship/requestrejected", {
        data: props,
      })
      .then((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {/* <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-4">
          <Header />
        </div> */}
      <div className="bg-[#F5A7A7] m-3 p-3 rounded-lg">
        <center>
          <div
            className="rounded-[50%] bg-cover"
            style={{
              backgroundImage: `url(${props.menteeImgUrl})`,
              width: "80px",
              height: "80px",
            }}></div>
          <div className="font-serif text-xl">{props.menteeName}</div>
        </center>
        <div className="flex justify-around">
          <button
            className="bg-[#D9D9D9] p-3 m-3 rounded-lg font-bold text-xl hover:cursor-pointer hover:border-black hover:border-2"
            onClick={(e) => {
              e.preventDefault();
              handleAcceptChat();
            }}>
            <NavLink to="/mentorship/chatpage">Accept Chat</NavLink>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRejectChat();
            }}
            className="bg-[#D9D9D9] p-3 m-3 rounded-lg font-bold text-xl hover:cursor-pointer hover:border-black hover:border-2">
            <NavLink to="/">Reject Chat</NavLink>
          </button>
        </div>
      </div>
      {/* <div className="footer">
          <Footer />
        </div>
      </body> */}
    </>
  );
}

export default AcceptOrReject;
