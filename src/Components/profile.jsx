import React from "react";
import Header from "./header";
import Footer from "./footer";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function Profile() {
  const token = Cookies.get("userdata");
  console.log(token);
  var data;
  if (token) {
    data = jwtDecode(token);
    console.log(data);
  }

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
              <div>Email:</div>
              <div>
                <div>{data.username}</div>
              </div>
            </div>
            <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
              <div>Password:</div>
              <div>{data.email}</div>
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
