import { React, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function UpdateProfile() {
  //   const token = Cookies.get("userdata");
  //   if (token) {
  //     const data = jwtDecode(token);
  //     console.log(data);
  //   }
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    instituteName: "",
    department: "",
    course: "",
    address: "",
    work: "",
    password: "",
  });

  const handleUpdateUser = async () => {
    const res = await axios.post(
      "http://localhost:3000/auth/updateUser",
      formdata
    );
    const check = res.data;
    console.log(check);
    if (check.msg == "User updated") {
      console.log(formdata);
      Cookies.set("updateddata", formdata);
      console.log(check);
    }
  };

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-4">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Welcome to the Alumni Portal
        </h1>
        <form action="http://localhost:3000/auth/updateUser" method="POST">
          <div className="flex justify-center">
            <div className="bg-[#D9D9D9] m-5 p-3 rounded-lg w-[50%] flex-col justify-center max-lg:w-full border-2 border-black">
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>First Name:</div>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="first name"
                    onChange={(e) => {
                      setFormdata({ ...formdata, firstname: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Last Name:</div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="last name"
                    onChange={(e) => {
                      setFormdata({ ...formdata, lastname: e.target.value });
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
                <div>Institution:</div>
                <div>
                  <input
                    type="text"
                    name="instituteName"
                    placeholder="Institution"
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        instituteName: e.target.value,
                      });
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
                    placeholder="dept"
                    onChange={(e) => {
                      setFormdata({ ...formdata, department: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Course:</div>
                <div>
                  <input
                    type="text"
                    name="CourseName"
                    placeholder="courseName"
                    onChange={(e) => {
                      setFormdata({ ...formdata, course: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Address:</div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={(e) => {
                      setFormdata({ ...formdata, address: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Job Description/Student</div>
                <div>
                  <input
                    type="text"
                    name="work"
                    placeholder="profession"
                    onChange={(e) => {
                      setFormdata({ ...formdata, work: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Password:</div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => {
                      setFormdata({ ...formdata, password: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Confirm password:</div>
                <div>
                  <input
                    type="password"
                    name="confirm password"
                    placeholder="password"
                    className="rounded-lg border-2 border-black ml-3 w-auto text-center font-serif"></input>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    handleUpdateUser();
                  }}
                  className="bg-[#023E8A] p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
                  Save
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

export default UpdateProfile;
