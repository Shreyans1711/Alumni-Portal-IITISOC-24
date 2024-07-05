import React from "react";
import "../Pages/Mentorship/Mentorship-Styles/mentorInfo.css";
import Cookies from "js-cookie";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function mentorInfo(props) {
  const token = Cookies.get("userdata");
  var data;
  if (token) {
    data = jwtDecode(token);
  }

  function handleCurrentChat() {
    // e.preventDefault;
    console.log("hello");
    Cookies.set("currentChat", props._id);
    // const navigate = useNavigate();
    // navigate("/chatpage");
  }

  async function handleRequestChat() {
    const res = await axios
      .post("http://localhost:3000/mentorship/requestchat", {
        mentorId: props,
        menteeId: data,
      })
      .then((e) => {
        console.log(e.data);
      });
  }

  return (
    <div className="bg-[#F5A7A7] flex flex-col justify-center m-3 p-3 rounded-lg w-[400px]">
      <center>
        <div
          className="rounded-[50%] bg-cover"
          style={{
            backgroundImage: `url(${props.imgurl})`,
            width: "80px",
            height: "80px",
          }}></div>
        <div className="font-serif text-xl">Hi there!</div>
        <div className="font-serif text-xl">I am there to help you</div>
      </center>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleRequestChat();
        }}
        className=" m-2 bg-[#D9D9D9] rounded-lg font-semibold text-xl p-2 hover:border-2 hover:border-black">
        request chat
      </button>
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          handleCurrentChat();
        }}
        className=" m-2 bg-[#D9D9D9] rounded-lg font-semibold text-xl p-2 hover:border-2 hover:border-black">
        <NavLink to="/mentorship/chatpage">start chat</NavLink>
      </button> */}
    </div>
  );
}

export default mentorInfo;
