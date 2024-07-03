import { React, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import "./home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import iitindorephoto from "../../assets/IIT INDORE.jpg";
import UpcomingEvent from "../../Components/UpcomingEvent"
function Home() {
  const signUpSucess = () =>
    toast.success("SignUp Successfull !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });

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
            <h1 className="font-bold font-serif text-4xl md:text-9xl text-center">
              Welcome Home
            </h1>
            <div className="outer">
              <div className="text-xl md:text-4xl p-20 text-center font-serif">
                Step into the virtual home of IIT INDORE's global community—a
                place where the Cardinal spirit thrives beyond the palm-lined
                campus. Reconnect with classmates, discover opportunities, and
                help juniors.
              </div>
            </div>
          </div>
          <div>
              <h1 className="font-bold font-serif text-3xl md:text-8xl text-center pt-32 pb-10">Upcoming Events</h1>
              <h5 className="text-2xl md:text-4xl text-center">Peek at some alumni events happening just around the corner.</h5>
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
                <div onClick={() => { window.open("http://localhost:8000/events/latestevents") }} className="text-xs md:text-sm moreEvents relative group bg-red-600 w-[30vw] md:w-[15vw] h-[10vh] text-white font-bold flex justify-center items-center">
                  <span className="border-b-2 border-transparent group-hover:border-white transition duration-100">
                    View more events
                  </span>
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
