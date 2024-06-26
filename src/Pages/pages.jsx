import React from "react";
import Home from "./Home/home";
import IITIAlumniAssociaton from "./AboutUs/IITIAlumniAssociation";
import NoticeBoard from "./AboutUs/noticeBoard";
import Developers from "./AboutUs/developers";
import ContactUs from "./AboutUs/contactUs";
import LatestEvents from "./Events/latestEvents";
import Reunions from "./Events/reunions";
import Chapters from "./Events/chapters";
import ChatWithMentor from "./Mentorship/chatWithMentor";
import Jobs from "./Mentorship/jobs";
import AlumniNews from "./Updates/alumniNews";
import NewsLetter from "./Updates/newsletter";
import AlumniAwards from "./Awards/alumniAwards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/aboutus/IITIAumniAssociation"
            element={<IITIAlumniAssociaton />}
          />
          <Route path="/aboutus/noticeBoard" element={<NoticeBoard />} />
          <Route path="/aboutus/developers" element={<Developers />} />
          <Route path="/aboutus/contactUs" element={<ContactUs />} />
          <Route path="/awards/alumniAwards" element={<AlumniAwards />} />
          <Route path="/events/latestEvents" element={<LatestEvents />} />
          <Route path="/events/reunions" element={<Reunions />} />
          <Route path="/events/chapters" element={<Chapters />} />
          <Route
            path="/mentorship/chatWithMentor"
            element={<ChatWithMentor />}
          />
          <Route path="/mentorship/jobs" element={<Jobs />} />
          <Route path="/updates/alumniNews" element={<AlumniNews />} />
          <Route path="/updates/newsletter" element={<NewsLetter />} />
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
