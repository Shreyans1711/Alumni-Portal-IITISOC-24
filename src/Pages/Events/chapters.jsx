import React, { useState, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import ChapterInfo from "./chaptersInfo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Chapters() {
  const navigate = useNavigate();
  function handleAddChapter() {
    navigate("/events/addchapter");
  }

  const [data, setData] = useState([]);
  const getChapters = async () => {
    const res = await axios
      .get("http://localhost:3000/events/getchapters")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      });
    // console.log(res.data);
    // const da = res.data;
    // setData(da);
  };
  useEffect(() => {
    getChapters();
  }, [1]);

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
          {data && data.flat().map(ChapterInfo)}
          {/* <ChapterInfo />
          <ChapterInfo />
          <ChapterInfo />
          <ChapterInfo />
          <ChapterInfo /> */}
        </div>
        <div className="text-center mt-2">
          <button
            type="button"
            onClick={() => {
              handleAddChapter();
            }}
            className="bg-[#023E8A] mb-2 p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
            Add Chapter
          </button>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Chapters;
