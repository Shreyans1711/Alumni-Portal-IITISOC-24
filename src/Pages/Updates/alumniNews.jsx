import React, { useState, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import ANInfo from "./ANInfo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AlumniNews() {
  const navigate = useNavigate();
  function handleAddAlumniNews() {
    navigate("/updates/addalumninews");
  }

  const [data, setData] = useState([]);
  const getChapters = async () => {
    const res = await axios
      .get("http://localhost:3000/updates/getalumninews")
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
        <h1 class=" m-2 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Alumni News
        </h1>
        <div className="rounded-lg m-3 flex flex-wrap justify-center gap-3">
          {data && data.flat().map(ANInfo)}
          {/* <ANInfo />
          <ANInfo />
          <ANInfo />
          <ANInfo />
          <ANInfo /> */}
        </div>
        <h1 class=" m-5 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Institutional News
        </h1>
        <div className="rounded-lg m-3 flex flex-wrap justify-center gap-3">
          {data && data.flat().map(ANInfo)}
          {/* <ANInfo />
          <ANInfo />
          <ANInfo />
          <ANInfo />
          <ANInfo /> */}
        </div>
        <div className="text-center mt-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleAddAlumniNews();
            }}
            className="bg-[#023E8A] mb-2 p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
            Add AlumniNews
          </button>
        </div>
        <div className="footer w-full">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default AlumniNews;
