import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const token = Cookies.get("userdata");
  var data;
  if (token) {
    data = jwtDecode(token);
  }
  const navigate = useNavigate();

  function handleUpdateProfile() {
    navigate("/updateprofile");
  }

  const [updatedData, setUpdatedData] = useState([]);
  const getUpdatedData = async () => {
    const res = await axios
      .post("http://localhost:3000/auth/getupdateddata", { email: data.email })
      .then((e) => {
        setUpdatedData(e.data);
      });
  };

  useEffect(() => {
    getUpdatedData();
  }, []);

  // console.log(updatedData);

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-4">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Profile
        </h1>
        <center>
          <div
            className="userimg mt-5"
            style={{
              backgroundImage: `url(${data.imgurl})`,
              height: "100px",
              width: "100px",
              borderRadius: "50%",
            }}></div>
        </center>
        <div className="flex justify-center">
          <div className="bg-[#D9D9D9] m-5 p-3 rounded-lg w-[50%] flex-col justify-center max-lg:w-full border-2 border-black">
            <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
              <div>UserName:</div>
              <div>
                <div>{data.username}</div>
              </div>
            </div>
            <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
              <div>Email:</div>
              <div>{data.email}</div>
            </div>
            {updatedData.firstname != "" && (
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Name:</div>
                <div>{updatedData.firstname + " " + updatedData.lastname}</div>
              </div>
            )}
            {updatedData.instituteName != "" && (
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Institue Name:</div>
                <div>{updatedData.instituteName}</div>
              </div>
            )}
            {updatedData.course != "" && (
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Course:</div>
                <div>{updatedData.course}</div>
              </div>
            )}
            {updatedData.department != "" && (
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Departement:</div>
                <div>{updatedData.department}</div>
              </div>
            )}
            {updatedData.work != "" && (
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Profession:</div>
                <div>{updatedData.work}</div>
              </div>
            )}
            {updatedData.address != "" && (
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Address:</div>
                <div>{updatedData.address}</div>
              </div>
            )}
            <div className="text-center mt-2">
              <button
                type="button"
                onClick={() => {
                  handleUpdateProfile();
                }}
                className="bg-[#023E8A] p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
                Update Profile
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Profile;
