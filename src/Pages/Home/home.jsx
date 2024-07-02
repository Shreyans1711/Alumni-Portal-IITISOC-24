import { React, useEffect } from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import "./home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import iitindorephoto from "../../assets/IIT INDORE.jpg";

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
              <div className="text-xl md:text-4xl p-20 text-center ">
                Step into the virtual home of IIT INDORE's global community—a
                place where the Cardinal spirit thrives beyond the palm-lined
                campus. Reconnect with classmates, discover opportunities, and
                help juniors.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-4xl">Content</div>
      <div className="footer">
        <Footer />
      </div>
    </body>
  );
}

export default Home;
