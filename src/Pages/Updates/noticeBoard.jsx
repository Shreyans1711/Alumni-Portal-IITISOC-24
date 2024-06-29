import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import NBInfo from "./NBInfo";

function NoticeBoard() {
  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0">
          <Header />
        </div>
        <h1 class=" m-2 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Content shared by Alumni
        </h1>
        <div className="bg-[#D9D9D9] m-3 rounded-lg p-3">
          <NBInfo />
          <NBInfo />
          <NBInfo />
          <NBInfo />
          <NBInfo />
        </div>
        <h1 class=" m-5 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Technical Updates
        </h1>
        <div className="bg-[#D9D9D9] m-3 rounded-lg p-3">
          <NBInfo />
          <NBInfo />
        </div>
        <div className="footer w-full">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default NoticeBoard;
