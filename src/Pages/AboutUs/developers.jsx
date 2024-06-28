import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import DevelopersInfo from "../../Info/developersInfo";
import boy from "../../assets/unknownboys.jpeg";

function Developers() {
  const Info = [
    {
      photo: boy,
      name: "Shreyans Kothari",
      year: "2022-2026",
      dept: "MEMS",
    },
    {
      photo: boy,
      name: "Abhishek AP",
      year: "2022-2026",
      dept: "MEMS",
    },
    {
      photo: boy,
      name: "Akarshit Trivedi",
      year: "2022-2026",
      dept: "MEMS",
    },
    {
      photo: boy,
      name: "Aditya Sonkhusre",
      year: "2022-2026",
      dept: "MEMS",
    },
  ];

  return (
    <body className="bg-[#90E0EF]">
      <div className="header top-0 w-full">
        <Header />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold font-serif text-white font-outline-2 mt-3 pt-4">
        Website developers
      </h1>
      <div className="flex flex-wrap justify-center gap-[200px] mt-5 px-4">
        {Info.map((info, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-2 flex flex-col items-center"
          >
            <DevelopersInfo {...info} />
          </div>
        ))}
      </div>
      <div className="footer w-full mt-10">
        <Footer />
      </div>
    </body>
  );
}

export default Developers;
