import React, { useState, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import MentorInfo from "../../Info/mentorInfo";
import AcceptOrReject from "../../Components/AcceptOrReject";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function ChatWithMentor() {
  const token = Cookies.get("userdata");
  var data;
  if (token) {
    data = jwtDecode(token);
  }

  const [allUsers, setAllUsers] = useState([]);
  const [allRequests, setAllRequests] = useState([]);
  const [user, setUser] = useState(data);
  const getAllUsers = async () => {
    const res = await axios.post(
      "http://localhost:3000/mentorship/getallusers",
      data
    );
    // console.log(res.data);
    setAllUsers(res.data);
  };

  const getAllRequests = async () => {
    const res = await axios.post(
      "http://localhost:3000/mentorship/getallrequests",
      { mentorId: data.id }
    );
    // console.log(res.data);
    setAllRequests(res.data);
  };

  useEffect(() => {
    getAllUsers();
    getAllRequests();
  }, []);
  // console.log(allRequests);

  return (
    <body className="bg-[#90E0EF]">
      <div className="header top-0">
        <Header />
      </div>
      <h1 className="text-5xl flex justify-center mt-4 font-bold">
        Chat with Alumni
      </h1>
      <div className="bg-[#fad0d0] p-3 rounded-lg flex justify-around m-5 flex-wrap">
        {allUsers.flat().map(MentorInfo)}
        {/* <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo />
        <MentorInfo /> */}
      </div>
      <h1 className="text-5xl flex justify-center mt-4 font-bold">
        Chat with Alumni
      </h1>
      <div className="bg-[#fad0d0] p-3 rounded-lg flex justify-around m-5 flex-wrap">
        {allRequests.flat().map(AcceptOrReject)}
        {/* <AcceptOrReject /> */}
      </div>
      <div className="footer w-full mt-10">
        <Footer />
      </div>
    </body>
  );
}

export default ChatWithMentor;
