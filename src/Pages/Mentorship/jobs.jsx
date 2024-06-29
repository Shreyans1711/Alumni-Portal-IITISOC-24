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
      <h1 class="text-5xl text-center m-10">Jobs & Career opportunities</h1>
      <div className="outer flex justify-center">
        <div className="inner bg-[#D9D9D9] w-[90%] h-[100%] flex-col p-5 rounded-3xl">
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
