import { React, useEffect, useState } from "react";
import Header from "../../../Components/header";
import Footer from "../../../Components/footer";
import UCEvent from "./UCEvents";
import PEvent from "./PEvents";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LatestEvents() {
  const token = Cookies.get("userdata");
  var data2;
  if (token) {
    data2 = jwtDecode(token);
    // console.log(data2);
  }

  const navigate = useNavigate();
  function handleAddEvent() {
    navigate("/events/addevent");
  }

  const [data, setData] = useState([]);
  const getEvents = async () => {
    const res = await axios
      .get("http://localhost:3000/events/getevents")
      .then((res) => {
        setData(res.data);
      });
    // console.log(res.data);
    // const da = res.data;
    // setData(da);
  };
  useEffect(() => {
    getEvents();
  }, [1]);
  // console.log(data);
  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-4">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Upcoming Events
        </h1>
        <div>{data && data.flat().map(UCEvent)}</div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2 mb-5">
          Past Events
        </h1>
        <div className="flex flex-wrap justify-center">
          <PEvent />
          <PEvent />
          <PEvent />
          <PEvent />
          <PEvent />
          <PEvent />
        </div>
        {data2.email == "abhi2004iiti@gmail.com" && (
          <div className="text-center mt-2">
            <button
              type="button"
              onClick={() => {
                handleAddEvent();
              }}
              className="bg-[#023E8A] mb-2 p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
              Add Event
            </button>
          </div>
        )}
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default LatestEvents;
