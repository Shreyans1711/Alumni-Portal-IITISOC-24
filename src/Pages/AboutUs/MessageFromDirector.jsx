import React from 'react'
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import DirectorIITI from "../../assets/DirectorIITI.png";
const MessageFromDirector = () => {
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
                    <img className='w-[40%] h-[50%] rounded-full bg-white' src={DirectorIITI}alt=""/>
                </a>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl bg-white text-center pt-3 pb-3 font-bold">
                Director's Message
            </h1>
            <ul>
                <li className="bg-white p-3 sm:p-4 md:p-5 text-lg sm:text-xl md:text-2xl">
                The most acclaimed universities and institutions worldwide boast a strong and vibrant alum base. The alumni network of IIT Indore forms an essential and significant element to propel the institute towards overall excellence and in producing leaders. Right from its first graduating batch, IIT Indore has been fortunate to have a robust institute-alumni network, which we must all nurture together and ensure its exponential growth in all dimensions. It is always very satisfying to see alums get established in different spheres of life. Let this platform become a vibrant forum for keeping in touch and exchanging ideas and a place of mutual benefit for professional growth and emotional bondage on the horizon of IIT Indore.
                </li>
                <li className="bg-white p-3 sm:p-4 md:p-5 text-lg sm:text-xl md:text-2xl">
                With the very best wishes.
                </li>
                <li className="bg-white p-3 sm:p-4 md:p-5 text-lg sm:text-xl md:text-2xl">
                
                    Professor Suhas S. <br/>
                    Director, IIT Indore
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

export default MessageFromDirector
