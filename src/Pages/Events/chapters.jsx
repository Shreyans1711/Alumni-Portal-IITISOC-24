import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import ChapterInfo from "./chaptersInfo";

function Chapters() {
  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Chapters
        </h1>
        <div className="flex flex-wrap justify-center">
          <ChapterInfo />
          <ChapterInfo />
          <ChapterInfo />
          <ChapterInfo />
          <ChapterInfo />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Chapters;
