import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import NLInfo from "./NLInfo";

function Newsletter() {
  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0">
          <Header />
        </div>
        <h1 class=" m-2 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Research and Publications
        </h1>
        <div>
          <NLInfo />
          <NLInfo />
          <NLInfo />
          <NLInfo />
          <NLInfo />
        </div>
        <h1 class=" m-5 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Patents and projects
        </h1>
        <div>
          <NLInfo />
          <NLInfo />
          <NLInfo />
          <NLInfo />
          <NLInfo />
        </div>
        <div className="footer w-full">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Newsletter;
