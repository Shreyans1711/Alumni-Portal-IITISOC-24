import React, { useState, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import OurTeamInfo from "../../Info/OurTeamInfo";
import boy from "../../assets/unknownboys.jpeg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const OurTeam = () => {
  const Info = [
    {
      ImgURL:
        "https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg",
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
    {
      ImgURL: boy,
      name: "XYZ",
      email: "XYZ",
      dept: "XYZ",
      designation: "XYZ",
      ig: "https://google.com",
      lin: "https://google.com",
      git: "https://google.com",
    },
  ];

  const token = Cookies.get("userdata");
  var data2;
  if (token) {
    data2 = jwtDecode(token);
    console.log(data2);
  }

  const navigate = useNavigate();
  function handleAddMember() {
    navigate("/aboutus/addmember");
  }

  const [data, setData] = useState([]);
  const getAllMembers = async () => {
    const res = await axios
      .get("http://localhost:3000/aboutus/getallmembers")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    // console.log(res.data);
    // const da = res.data;
    // setData(da);
  };
  useEffect(() => {
    getAllMembers();
  }, [1]);

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-2">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2 m-5">
          Our Team
        </h1>
        <div className="flex flex-wrap justify-around">
          {data.flat().map(OurTeamInfo)}
          {/* {Info.flat().map(OurTeamInfo)} */}
        </div>
        {data2 && data2.role == "admin" && (
          <div className="text-center mt-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleAddMember();
              }}
              className="bg-[#023E8A] mb-2 p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
              Add Member
            </button>
          </div>
        )}
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
};

export default OurTeam;
