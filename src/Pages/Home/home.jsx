import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
function Home() {
  return (
    <>
      <body className="bg-[#ADE8F4]">
        <Header />
        <h1 class="text-5xl mb-2">This is home page</h1>
        <div className="footer absolute bottom-0">
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Home;
