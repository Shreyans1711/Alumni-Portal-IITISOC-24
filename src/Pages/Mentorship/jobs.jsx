import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import Jobinfo from "../../Info/jobInfo";
function Jobs() {
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
          <Jobinfo />
          <Jobinfo />
          <Jobinfo />
          <Jobinfo />
          <Jobinfo />
          <Jobinfo />
          <Jobinfo />
        </div>
      </div>
      <div className="footer w-full mt-10">
        <Footer />
      </div>
    </body>
  );
}

export default Jobs;
