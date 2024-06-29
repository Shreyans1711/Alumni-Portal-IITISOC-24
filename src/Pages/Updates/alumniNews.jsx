import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import ANInfo from "./ANInfo";

function AlumniNews() {
  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0">
          <Header />
        </div>
        <h1 class=" m-2 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Alumni News
        </h1>
        <div className="rounded-lg m-3 flex flex-wrap justify-center gap-3">
          <ANInfo />
          <ANInfo />
          <ANInfo />
          <ANInfo />
          <ANInfo />
        </div>
        <h1 class=" m-5 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Institutional News
        </h1>
        <div className="rounded-lg m-3 flex flex-wrap justify-center gap-3">
          <ANInfo />
          <ANInfo />
          <ANInfo />
          <ANInfo />
          <ANInfo />
        </div>
        <div className="footer w-full">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default AlumniNews;
