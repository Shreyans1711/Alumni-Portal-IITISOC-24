import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import MentorInfo from "../../Info/mentorInfo";
function ChatWithMentor() {
  return (
    <body className="bg-[#90E0EF]">
      <div className="header top-0">
        <Header/>
      </div>
      <h1 className="text-5xl flex justify-center mt-4 font-bold">Chat with Alumni</h1>
      <div className="bg-[#D9D9D9] p-3 rounded-lg flex justify-center gap-4 m-10 flex-col">
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
        <MentorInfo/>
      </div>


      <div className="footer w-full mt-10">
        <Footer />
      </div>
    </body>
  );
}

export default ChatWithMentor;
