import React, { useState, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import Jobinfo from "../../Info/jobInfo";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Jobs() {
  const token = Cookies.get("userdata");
  var data2;
  if (token) {
    data2 = jwtDecode(token);
    console.log(data2);
  }

  const navigate = useNavigate();
  function handlePostJob() {
    navigate("/mentorship/addjob");
  }

  const [data, setData] = useState([]);
  const getAllJobs = async () => {
    const res = await axios
      .get("http://localhost:3000/mentorship/getalljobs")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      });
    // console.log(res.data);
    // const da = res.data;
    // setData(da);
  };
  useEffect(() => {
    getAllJobs();
  }, [1]);

  return (
    <body className="bg-[#90E0EF]">
      <div className="header top-0">
        <Header />
      </div>
      <h1 class=" m-3 text-5xl text-center font-bold font-serif text-white font-outline-2">
        Jobs and Career Opportunities
      </h1>
      <div className="outer flex justify-center">
        <div className="inner bg-[#D9D9D9]  flex-col m-5 p-3 rounded-lg">
          {data.flat().map(Jobinfo)}
          {/* <Jobinfo />
          <Jobinfo />
          <Jobinfo />
          <Jobinfo />
          <Jobinfo />
          <Jobinfo />
          <Jobinfo /> */}
        </div>
      </div>
      {data2 && (data2.role == "admin" || data2.role == "alumni") && (
        <div className="text-center mt-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handlePostJob();
            }}
            className="bg-[#023E8A] mb-2 p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
            Post Job
          </button>
        </div>
      )}
      <div className="footer w-full mt-10">
        <Footer />
      </div>
    </body>
  );
}

export default Jobs;
