import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import DevelopersInfo from "../../Info/developersInfo";
import sasuke from "../../assets/Sasuke.jpg"
import shreyans from "../../assets/Shreyans.jpg"
import akarshit from "../../assets/Akarshit.jpg"
import abhishek from "../../assets/Abhishek.jpg"
function Developers() {
  const Info = [
    {
      photo: shreyans,
      name: "Shreyans Kothari",
      year: "2022-2026",
      dept: "MEMS",
      ig: "https://google.com",
      lin: "https://www.linkedin.com/in/shreyans-kothari-3a80a722a/",
      git: "https://google.com",
    },
    {
      photo: abhishek,
      name: "Abhishek AP",
      year: "2022-2026",
      dept: "MEMS",
      ig: "https://google.com",
      lin: "https://www.linkedin.com/in/abhishek-a-p-66104425b/",
      git: "https://google.com",
    },
    {
      photo: akarshit,
      name: "Akarshit Trivedi",
      year: "2022-2026",
      dept: "MEMS",
      ig: "https://google.com",
      lin: "https://www.linkedin.com/in/akarshit-trivedi-529243287/",
      git: "https://google.com",
    },
    {
      photo: sasuke,
      name: "Aditya Sonkhusre",
      year: "2022-2026",
      dept: "MEMS",
      ig: "https://google.com",
      lin: "https://www.linkedin.com/in/aditya-sonkusare-054175260/",
      git: "https://google.com",
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
      <div className="flex flex-wrap justify-around gap-[100px] mt-5 px-4">
        {Info.map((info, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-2 flex flex-col items-center">
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
