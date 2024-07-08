import { React, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import "./home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import iitindorephoto from "../../assets/IIT INDORE.jpg";
import UpcomingEvent from "../../Components/UpcomingEvent";
import AlumniNews from "../../Components/AlumniNews";
import JobNews from "../../Components/JobNews";
function Home() {
  // const signUpSucess = () =>
  //   toast.success("SignUp Successfull !", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     // transition: Bounce,
  //   });

  var token = Cookies.get("userdata");
  var data;
  if (token) {
    data = jwtDecode(token);
    // signUpSucess();
  }

  return (
    <body className="relative">
      <ToastContainer />
      <div className="header top-0">
        <Header />
      </div>

      <div class="container1">
        <div class="slideshow">
          <img src={iitindorephoto} />
          <div class="slogan">
            <h1 className="font-bold font-serif text-4xl lg:text-9xl text-center">
              Welcome Home
            </h1>
            <div className="outer">
              <div className="text-xl lg:text-4xl p-20 text-center font-serif">
                Step into the virtual home of IIT INDORE's global community—a
                place where the Cardinal spirit thrives beyond the palm-lined
                campus. Reconnect with classmates, discover opportunities, and
                help juniors.
              </div>
            </div>
          </div>
        </div>
        <div className="pt-60">
          <h1 className="font-bold font-serif text-3xl lg:text-8xl text-center pb-10">
            Upcoming Events
          </h1>
          <h5 className="text-2xl lg:text-4xl text-center">
            Peek at some alumni events happening just around the corner.
          </h5>
          <div className="space-y-4">
            <div className="border-b border-gray-300 pb-4">
              <UpcomingEvent />
            </div>
            <div className="border-b border-gray-300 pb-4">
              <UpcomingEvent />
            </div>
            <div className="border-b border-gray-300 pb-4">
              <UpcomingEvent />
            </div>
            <div className="border-b border-gray-300 pb-4">
              <UpcomingEvent />
            </div>
          </div>
          <div className="flex justify-center m-5 cursor-pointer">
            <div
              onClick={() => {
                window.open("http://localhost:8000/events/latestevents");
              }}
              className="text-xs md:text-sm moreEvents relative group bg-red-600 w-[30vw] md:w-[15vw] h-[10vh] text-white font-bold flex justify-center items-center">
              <span className="border-b-2 border-transparent group-hover:border-white transition duration-100">
                View more events
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 pb-10">
          <h1 className="font-bold font-serif text-3xl md:text-8xl text-center pt-32 pb-10">
            Alumni News
          </h1>
          <h5 className="text-2xl md:text-4xl text-center">
            News, views, and perspectives from the IIT Indore community.
          </h5>
          <div className="flex flex-col lg:flex-row items-center lg:justify-evenly lg:mx-10 gap-5 my-10">
            <AlumniNews number="1" />
            <AlumniNews number="2" />

            <div
              onClick={() => {
                window.open("http://localhost:8000/events/latestevents");
              }}
              className="w-[70%] lg:w-[25vw] h-auto min-h-[50vh] p-4 cursor-pointer bg-red-600 text-white flex justify-center items-center">
              <div className="text-2xl md:text-4xl moreEvents relative group w-full h-auto font-bold flex justify-center items-center gap-3">
                <span className="border-b-2 border-transparent group-hover:border-white transition duration-100">
                  Alumni News
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="24"
                  height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <h1 className="font-bold font-serif text-3xl md:text-8xl text-center pt-32 pb-10">
            Job's
          </h1>
          <h5 className="text-2xl md:text-4xl text-center">
            Latest job opportunities
          </h5>
          <div className="flex flex-col lg:flex-row items-center lg:justify-evenly lg:mx-10 gap-5 my-10">
            <JobNews number="1" />
            <JobNews number="2" />

            <div
              onClick={() => {
                window.open("http://localhost:8000/mentorship/jobs");
              }}
              className="w-[70%] lg:w-[25vw] h-auto min-h-[50vh] p-4 cursor-pointer bg-red-600 text-white flex justify-center items-center">
              <div className="text-2xl md:text-4xl moreEvents relative group w-full h-auto font-bold flex justify-center items-center gap-3">
                <span className="border-b-2 border-transparent group-hover:border-white transition duration-100">
                  More Jobs
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="24"
                  height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </body>
  );
}

export default Home;
