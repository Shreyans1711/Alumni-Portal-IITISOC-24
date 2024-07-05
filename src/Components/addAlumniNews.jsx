import { React, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddAlumniNews() {
  //   const token = Cookies.get("userdata");
  //   if (token) {
  //     const data = jwtDecode(token);
  //     console.log(data);
  //   }
  const [formdata, setFormdata] = useState({
    newsName: "",
    newsDetails: "",
    newsimgurl: "",
  });
  const navigate = useNavigate();
  const handleAddAlumniNews = async () => {
    const res = await axios.post(
      "http://localhost:3000/updates/addalumninews",
      formdata
    );
    navigate("/updates/alumniNews");
  };

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-4">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Add Alumni News
        </h1>
        <form>
          <div className="flex justify-center">
            <div className="bg-[#D9D9D9] m-5 p-3 rounded-lg w-[50%] flex-col justify-center max-lg:w-full border-2 border-black">
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>News Name:</div>
                <div>
                  <input
                    type="text"
                    name="newsName"
                    placeholder="News Name"
                    onChange={(e) => {
                      setFormdata({ ...formdata, newsName: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex-col justify-center">
                <div>News details:</div>
                <div>
                  <textarea
                    type="text"
                    name="newsDetails"
                    placeholder="News Details"
                    rows="10"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        newsDetails: e.target.value,
                      });
                    }}
                    className="rounded-lg border-2 border-black text-left font-serif"></textarea>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>News PhotoURL:</div>
                <div>
                  <input
                    type="text"
                    name="newsPhotourl"
                    placeholder="News Image Link"
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        newsimgurl: e.target.value,
                      });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddAlumniNews();
                  }}
                  className="bg-[#023E8A] p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
                  Add AlumniNews
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="footer">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default AddAlumniNews;
