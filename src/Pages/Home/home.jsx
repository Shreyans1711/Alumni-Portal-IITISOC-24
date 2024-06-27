import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
function Home() {
  return (
    <>
      <Header />
      <h1 class="text-5xl">This is home page</h1>
      <div className="foot absolute bottom-0"> 
        <Footer/>
      </div>
    </>
  );
}

export default Home;
