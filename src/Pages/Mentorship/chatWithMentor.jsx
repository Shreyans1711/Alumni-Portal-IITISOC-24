import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
function ChatWithMentor() {
  return (
    <>
      <div className="header top-0">
        <Header/>
      </div>
      <h1 class="text-5xl">This is the Chat With Mentor page</h1>
      <div className="footer w-full mt-10">
        <Footer />
      </div>
    </>
  );
}

export default ChatWithMentor;
