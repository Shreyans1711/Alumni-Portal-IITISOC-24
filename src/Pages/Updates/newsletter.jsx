import React, { useState, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import NLInfo from "./NLInfo";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Newsletter() {
  const token = Cookies.get("userdata");
  var data2;
  if (token) {
    data2 = jwtDecode(token);
    // console.log(data2);
  }

  const navigate = useNavigate();
  function handleAddPublication() {
    navigate("/updates/addpublication");
  }

  const [data, setData] = useState([]);
  const getAllPublications = async () => {
    const res = await axios
      .get("http://localhost:3000/updates/getallpublications")
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      });
    // console.log(res.data);
    // const da = res.data;
    // setData(da);
  };
  useEffect(() => {
    getAllPublications();
  }, [1]);

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
          {data.flat().map(NLInfo)}
          {/* <NLInfo />
          <NLInfo />
          <NLInfo />
          <NLInfo />
          <NLInfo /> */}
        </div>
        <h1 class=" m-5 text-5xl text-center font-bold font-serif text-white font-outline-2">
          Patents and projects
        </h1>
        <div>
          {data.flat().map(NLInfo)}
          {/* <NLInfo />
          <NLInfo />
          <NLInfo />
          <NLInfo />
          <NLInfo /> */}
        </div>
        {data2 && (data2.role == "admin" || data2.role == "alumni") && (
          <div className="text-center mt-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleAddPublication();
              }}
              className="bg-[#023E8A] mb-2 p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
              Add Publication
            </button>
          </div>
        )}
        <div className="footer w-full">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Newsletter;
