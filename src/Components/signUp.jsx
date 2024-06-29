import React from "react";
import Header from "./header";
import Footer from "./footer";

function SignUp() {
  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-4">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Welcome to the Alumni Portal
        </h1>
        <form>
          <div className="flex justify-center">
            <div className="bg-[#D9D9D9] m-5 p-3 rounded-lg w-[50%] flex-col justify-center max-lg:w-full border-2 border-black">
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>First Name:</div>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="first name"
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
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Confirm password:</div>
                <div>
                  <input
                    type="confirm password"
                    name="confirm password"
                    placeholder="password"
                    className="rounded-lg border-2 border-black ml-3 w-auto text-center font-serif"></input>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-[#023E8A] p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
                  Register
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

export default SignUp;
