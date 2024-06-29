import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import Carousel from "./carousel";
import ReunionInfo from "./reunionInfo";

function Runions() {
  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0">
          <Header />
        </div>
        <h1 class=" m-2 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Reunions
        </h1>
        <Carousel />
        <div className="m-5 p-3 bg-white text-2xl text-center font-serif font-semibold rounded-lg border-2 border-solid border-black">
          The Office of Alumni Relations, Alumni Association and the Endowment
          Office at IIT Indore have been organizing reunions for different
          batches over the years. The institute feels immense pride in welcoming
          back and hosting alumni again on the campus. Reunions for various
          batches have been planned in the year 2023-24 at IIT Indore. We
          encourage alumni to attend these events and meet fellow batchmates.
        </div>
        <h1 class=" m-2 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Past Reunions
        </h1>
        <div className="flex flex-wrap justify-center">
          <ReunionInfo />
          <ReunionInfo />
          <ReunionInfo />
          <ReunionInfo />
          <ReunionInfo />
          <ReunionInfo />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Runions;
