import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import AlumniInfo from "../../Info/alumniInfo";
import boy from "../../assets/unknownboys.jpeg";

function AlumniAwards() {
  const Info = [
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      photo: boy,
      name: "XYZ",
      year: "20xx-20yy",
      dept: "XYZ",
      Achievement: "XYZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
  ];

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-2">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Awards for Outstanding Performance
        </h1>
        <div className="flex flex-wrap justify-center">
          {Info.flat().map(AlumniInfo)}
        </div>

        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default AlumniAwards;
