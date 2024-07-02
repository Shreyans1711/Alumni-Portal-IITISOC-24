import { React, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddChapter() {
  //   const token = Cookies.get("userdata");
  //   if (token) {
  //     const data = jwtDecode(token);
  //     console.log(data);
  //   }
  const [formdata, setFormdata] = useState({
    chapterName: "",
    chapterDetails: "",
    chapterimgurl: "",
  });
  const navigate = useNavigate();
  const handleAddChapter = async () => {
    const res = await axios.post(
      "http://localhost:3000/events/addchapter",
      formdata
    );
    navigate("/events/chapters");
  };

  return (
    <>
      <body className="bg-[#90E0EF]">
        <div className="header top-0 mb-4">
          <Header />
        </div>
        <h1 class="text-5xl text-center font-bold font-serif text-white font-outline-2">
          Add Chapter
        </h1>
        <form>
          <div className="flex justify-center">
            <div className="bg-[#D9D9D9] m-5 p-3 rounded-lg w-[50%] flex-col justify-center max-lg:w-full border-2 border-black">
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Chapter Name:</div>
                <div>
                  <input
                    type="text"
                    name="chapterName"
                    placeholder="Chapter Name"
                    onChange={(e) => {
                      setFormdata({ ...formdata, chapterName: e.target.value });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex-col justify-center">
                <div>Chapter details:</div>
                <div>
                  <textarea
                    type="text"
                    name="chapterDetails"
                    placeholder="Chapter Details"
                    rows="10"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        chapterDetails: e.target.value,
                      });
                    }}
                    className="rounded-lg border-2 border-black text-left font-serif"></textarea>
                </div>
              </div>
              <div className="bg-[#F5A7A7] text-3xl p-3 rounded-lg text-center mb-5 flex justify-between max-sm:flex-col">
                <div>Chapter PhotoURL:</div>
                <div>
                  <input
                    type="text"
                    name="chapterPhotourl"
                    placeholder="Chapter Image Link"
                    onChange={(e) => {
                      setFormdata({
                        ...formdata,
                        chapterimgurl: e.target.value,
                      });
                    }}
                    className="rounded-lg border-2 border-black ml-3 text-center font-serif"></input>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => {
                    handleAddChapter();
                  }}
                  className="bg-[#023E8A] p-3 pt-2 rounded-lg text-2xl text-white text-center font-semibold hover:border-2 hover:border-black">
                  Add Chapter
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

export default AddChapter;
