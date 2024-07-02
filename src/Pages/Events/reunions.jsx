import React, { useEffect, useState } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import Carousel from "./carousel";
import ReunionInfo from "./reunionInfo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Runions() {
  const navigate = useNavigate();
  function handleAddReunion() {
    navigate("/events/addreunion");
  }

  const [data, setData] = useState([]);
  const getReunions = async () => {
    const res = await axios
      .get("http://localhost:3000/events/getreunions")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      });
    // console.log(res.data);
    // const da = res.data;
    // setData(da);
  };
  useEffect(() => {
    getReunions();
  }, [1]);

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
          {data && data.flat().map(ReunionInfo)}
          {/* <ReunionInfo />
          <ReunionInfo />
          <ReunionInfo />
          <ReunionInfo />
          <ReunionInfo />
          <ReunionInfo /> */}
        </div>
        <div className="text-center mt-2">
          <button
            type="button"
            onClick={() => {
              handleAddReunion();
            }}
            className="bg-[#023E8A] mb-2 p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
            Add Reunion
          </button>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Runions;
