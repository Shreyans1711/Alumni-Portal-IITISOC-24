import React from "react";
import Home from "./Home/home";
import IITIAlumniAssociaton from "./AboutUs/IITIAlumniAssociation";
import MessageFromDirector from "./AboutUs/MessageFromDirector";
import MessageFromDeanACR from "./AboutUs/MessageFromDeanACR";
import NoticeBoard from "./Updates/noticeBoard";
import Developers from "./AboutUs/developers";
import OurTeam from "./AboutUs/OurTeam";
import LatestEvents from "./Events/LatestEvents/latestEvents";
import Reunions from "./Events/reunions";
import Chapters from "./Events/chapters";
import ChatWithMentor from "./Mentorship/chatWithMentor";
import Jobs from "./Mentorship/jobs";
import AlumniNews from "./Updates/alumniNews";
import NewsLetter from "./Updates/newsletter";
import AlumniAwards from "./Awards/alumniAwards";
import SignUp from "../Components/signUp";
import Profile from "../Components/profile";
import Login from "../Components/login";
import UpdateProfile from "../Components/updateProfile";
import AddEvent from "../Components/addEvent";
import AddReunion from "../Components/addReunion";
import AddChapter from "../Components/addChapter";
import AddAlumniNews from "../Components/addAlumniNews";
import ChatPage from "../Components/chatPage";
import AcceptOrReject from "../Components/AcceptOrReject";
import ChatsAccepted from "../Components/ChatsAccepted";
import AddJob from "../Components/addJob";
import AddMember from "../Components/addMember";
import AddAlumni from "../Components/addAlumni";
import AddPublication from "../Components/addPublication";
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
          <Route path="/aboutus/developers" element={<Developers />} />
          <Route path="/aboutus/OurTeam" element={<OurTeam />} />
          <Route
            path="/aboutus/MessageFromDirector"
            element={<MessageFromDirector />}
          />
          <Route
            path="/aboutus/MessageFromDeanACR"
            element={<MessageFromDeanACR />}
          />
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
          <Route path="/updates/noticeBoard" element={<NoticeBoard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/events/addevent" element={<AddEvent />} />
          <Route path="/events/addreunion" element={<AddReunion />} />
          <Route path="/events/addchapter" element={<AddChapter />} />
          <Route path="/updates/addalumninews" element={<AddAlumniNews />} />
          <Route path="/mentorship/chatpage" element={<ChatPage />} />
          <Route
            path="/mentorship/acceptorreject"
            element={<AcceptOrReject />}
          />
          <Route path="/mentorship/chatsaccepted" element={<ChatsAccepted />} />
          <Route path="/mentorship/addjob" element={<AddJob />} />
          <Route path="/aboutus/addmember" element={<AddMember />} />
          <Route path="/awards/addalumni" element={<AddAlumni />} />
          <Route path="/updates/addpublication" element={<AddPublication />} />
        </Routes>
      </Router>
    </>
  );
}

export default Pages;
