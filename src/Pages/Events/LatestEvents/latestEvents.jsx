import React from "react";
import Header from "../../../Components/header";
import Footer from "../../../Components/footer";
import UCEvent from "./UCEvents";
import PEvent from "./PEvents";

function LatestEvents() {
  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-4">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Upcoming Events
        </h1>
        <div>
          <UCEvent />
          <UCEvent />
          <UCEvent />
          <UCEvent />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2 mb-5">
          Past Events
        </h1>
        <div className="flex flex-wrap justify-center">
          <PEvent />
          <PEvent />
          <PEvent />
          <PEvent />
          <PEvent />
          <PEvent />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default LatestEvents;
