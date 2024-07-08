import { React, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddAlumni() {
  //   const token = Cookies.get("userdata");
  //   if (token) {
  //     const data = jwtDecode(token);
  //     console.log(data);
  //   }
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    department: "",
    year: "",
    achievment: "",
    description: "",
    igLink: "",
    linLink: "",
    gitLink: "",
    imgurl: "",
  });
  const navigate = useNavigate();
  const handleAddAlumni = async () => {
    const res = await axios.post(
      "http://localhost:3000/awards/addalumni",
      formdata
    );
    navigate("/awards/alumniawards");
  };

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-4">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Add Alumni
        </h1>
        <form action="http://localhost:3000/aboutus/addmember" method="POST">
          <div className="flex justify-center">
            <div className="bg-[#D9D9D9] m-5 p-3 rounded-lg w-[50%] flex-col justify-center max-lg:w-full border-2 border-black">
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Member Name:</div>
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Member Name"
                    onChange={(e) => {
                      setFormdata({ ...formdata, name: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Email:</div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setFormdata({ ...formdata, email: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Department:</div>
                <div>
                  <input
                    type="text"
                    name="departmentName"
                    placeholder="Department"
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        department: e.target.value,
                      });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Year:</div>
                <div>
                  <input
                    type="text"
                    name="year"
                    placeholder="year"
                    onChange={(e) => {
                      setFormdata({ ...formdata, year: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Achievment:</div>
                <div>
                  <input
                    type="text"
                    name="achievment"
                    placeholder="achievment"
                    onChange={(e) => {
                      setFormdata({ ...formdata, achievment: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Description:</div>
                <div>
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={(e) => {
                      setFormdata({ ...formdata, description: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Instagram Link:</div>
                <div>
                  <input
                    type="text"
                    name="iglink"
                    placeholder="Instagram Link"
                    onChange={(e) => {
                      setFormdata({ ...formdata, igLink: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Linkedin Link</div>
                <div>
                  <input
                    type="text"
                    name="linlink"
                    placeholder="linkedin link"
                    onChange={(e) => {
                      setFormdata({ ...formdata, linLink: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>github Link:</div>
                <div>
                  <input
                    type="text"
                    name="githublink"
                    placeholder="github link"
                    onChange={(e) => {
                      setFormdata({ ...formdata, gitLink: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Image URL:</div>
                <div>
                  <input
                    type="text"
                    name="imgurl"
                    placeholder="member image url"
                    onChange={(e) => {
                      setFormdata({ ...formdata, imgurl: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddAlumni();
                  }}
                  className="bg-[#023E8A] p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
                  Add Alumni
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default AddAlumni;
