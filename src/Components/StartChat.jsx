import React from "react";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

function StartChat(props) {
  function handleCurrentChat() {
    // e.preventDefault;
    console.log("hello");
    Cookies.set("currentChat", props.mentorId);
    // const navigate = useNavigate();
    // navigate("/chatpage");
  }

  return (
    <div className="bg-[#F5A7A7] flex flex-col justify-center m-3 p-3 rounded-lg w-[400px]">
      <center>
        <div
          className="rounded-[50%] bg-cover"
          style={{
            backgroundImage: `url(${props.mentorImgUrl})`,
            width: "80px",
            height: "80px",
          }}></div>
        <div className="font-serif text-xl">{props.mentorName}</div>
        <div className="font-serif text-xl">I am there to help you</div>
      </center>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleCurrentChat();
        }}
        className=" m-2 bg-[#D9D9D9] rounded-lg font-semibold text-xl p-2 hover:border-2 hover:border-black">
        <NavLink to="/mentorship/chatpage">start chat</NavLink>
      </button>
    </div>
  );
}

export default StartChat;
