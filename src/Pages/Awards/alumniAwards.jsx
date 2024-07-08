import React, { useState, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import AlumniInfo from "../../Info/alumniInfo";
import boy from "../../assets/unknownboys.jpeg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function AlumniAwards() {
  const Info = [
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
  ];

  const token = Cookies.get("userdata");
  var data2;
  if (token) {
    data2 = jwtDecode(token);
    console.log(data2);
  }

  const navigate = useNavigate();
  function handleAddAlumni() {
    navigate("/awards/addalumni");
  }

  const [data, setData] = useState([]);
  const getAllAlumnis = async () => {
    const res = await axios
      .get("http://localhost:3000/awards/getallalumnis")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    // console.log(res.data);
    // const da = res.data;
    // setData(da);
  };
  useEffect(() => {
    getAllAlumnis();
  }, []);

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-2">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Awards for Outstanding Performance
        </h1>
        <div className="flex flex-wrap justify-center">
          {/* {Info.flat().map(AlumniInfo)} */}
          {data.flat().map(AlumniInfo)}
        </div>
        {data2 && data2.role == "admin" && (
          <div className="text-center mt-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleAddAlumni();
              }}
              className="bg-[#023E8A] mb-2 p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
              Add Alumni
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

export default AlumniAwards;
