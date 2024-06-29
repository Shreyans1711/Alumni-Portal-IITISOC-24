import React from 'react'
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import OurTeamInfo from "../../Info/OurTeamInfo";
import boy from "../../assets/unknownboys.jpeg";
const OurTeam = () => {
  const Info = [
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    {
      photo: boy,
      name: "XYZ",
      dept: "XYZ",
    },
    
  ];

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-2">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Our Team
        </h1>
        <div className="flex flex-wrap justify-center">
          {Info.flat().map(OurTeamInfo)}
        </div>

        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default OurTeam
