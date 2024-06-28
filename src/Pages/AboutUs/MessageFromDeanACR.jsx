import React from 'react'
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import DeanACR from "../../assets/DeanACR.png";

const MessageFromDeanACR = () => {
  return (
    <div>
        <body className="bg-[#90E0EF]">
        <div className="header top-0">
            <Header />
        </div>
        <div className="outer flex justify-center m-4 sm:m-6 md:m-10">
            <div className="message w-full max-w-screen-lg h-full min-h-screen bg-white rounded-3xl p-4 sm:p-6 md:p-10">
            <div>
                <a className='flex justify-center' href="https://www.iiti.ac.in/director#:~:text=Dr.,%2C%20at%20IIT%20Bombay%2C%20Dr.">
                    <img className='w-[40%] h-[50%] rounded-full bg-white' src={DeanACR}alt=""/>
                </a>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl bg-white text-center pt-3 pb-3 font-bold">
                Message from Dean ACR
            </h1>
            <ul>
                <li className="bg-white p-3 sm:p-4 md:p-5 text-lg sm:text-xl md:text-2xl">
                Indian Institute of Technology Indore (IIT Indore), with 14th position in the Engineering Institute in India NIRF 2023, has created a culture of eminence and attained a high national rank among the educational institutions of national importance in the last thirteen years. As we look forward, the Institute aspires to a better future with holistic development ticking every box possible for a nationally leading and internationally impactful entity. IIT Indore has focused on establishing new corporate and industry connections in the last few years. Side-by-side catalyzing translational research to develop market-ready products is another area that is prioritized. Many new initiatives have already been taken, and many more are in the pipeline to introduce a solid industrial research-driven ecosystem in IIT Indore.</li>
                <li className="bg-white p-3 sm:p-4 md:p-5 text-lg sm:text-xl md:text-2xl">
                On the other hand, the Institute's alumni remain our organization's ambassadors, and it is a pleasure to observe as they excel in reaching new heights in their professional careers. I extend my token of gratitude to them for their achievements in their professional and personal domains. I want to address them as all of you hold a special place in our hearts as you embody our Institute's success and legacy. Your achievements inspire the current students and serve as a testament to the quality of education and the values instilled at IIT Indore. The association with alums & corporates has been a pillar to the upcoming generations and the Institute, and their generosity will help us to ensure that none of the roads remain unexplored in this wonderful journey.
                </li>
                <li className="bg-white p-3 sm:p-4 md:p-5 text-lg sm:text-xl md:text-2xl">
                Sincerely<br/>
                Prof. Suman Mukhopadhyay<br/>
                Dean, Alumni and Corporate Relations
                </li>
            </ul>
            </div>
        </div>

        <div className="footer relative bottom-0">
            <Footer />
        </div>
        </body>

    </div>
  )
}

export default MessageFromDeanACR
