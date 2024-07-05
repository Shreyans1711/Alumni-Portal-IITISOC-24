import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Cookies from "js-cookie";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import StartChat from "./StartChat";

function ChatsAccepted() {
  const token = Cookies.get("userdata");
  var data;
  if (token) {
    data = jwtDecode(token);
  }

  const [allAcceptedChats, setAllAcceptedChats] = useState([]);

  async function getAllAcceptedChats() {
    const res = await axios
      .post("http://localhost:3000/mentorship/chatsaccepted", {
        menteeId: data.id,
      })
      .then((e) => {
        console.log(e.data);
        setAllAcceptedChats(e.data);
      });
  }

  useEffect(() => {
    getAllAcceptedChats();
  }, []);

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0">
          <Header />
        </div>
        <h1 className="text-5xl flex justify-center mt-4 font-bold">
          Request Accepted Chats
        </h1>
        <div className="bg-[#fad0d0] p-3 rounded-lg flex justify-around m-5 flex-wrap">
          {allAcceptedChats.flat().map(StartChat)}
        </div>
        <div className="footer w-full mt-10">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default ChatsAccepted;
