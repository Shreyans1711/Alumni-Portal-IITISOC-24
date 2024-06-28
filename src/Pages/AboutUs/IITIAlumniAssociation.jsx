import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
function IITIAlumniAssociaton() {
  return (
    <>
      <div className="header top-0">
        <Header/>
      </div>
      <div className="outer flex justify-center m-10">
      <div className="message w-[1500px] h-[1000px] bg-white rounded-3xl p-10">
        <h1 className="text-5xl bg-white text-center pt-3 pb-3 font-bold">Alumni & Corporate Relations (ACR) @ IIT Indore</h1>
        <ul>
          <li className="bg-white p-5 text-2xl"><x className="bg-white font-bold">Alumni Relations:</x> The legacy of an academic institution is reflected by the professional, moral, and ethical gestures being taught to its students. The alumni network of IIT Indore forms an essential and integral part of propelling the institute towards excellence in all spheres of academics and research and in producing leaders. A significant number of them are already deeply engaged in nation-building by rendering their services to renowned organizations nationally and globally. Some of them have taken up the path to set up new entrepreneurial ventures to take the country on the path of growth and prosperity. IIT Indore believes in the culture of developing a bond of association with alumni, and there is a constant reach out to the alums to keep them engaged with the latest of the institute for a journey beyond their associateship.</li>
          <li className="bg-white p-5 text-2xl"><x className="bg-white font-bold">Corporate Relations:</x> A close relationship with corporates is another aspect that an academic and research institute nurtures to foresee prospects in the global impact of an institute. IIT Indore is constantly exploring feasible partnerships with different industries for its exponential growth in all dimensions. The institute also provides a flexible and favorable ecosystem for corporations to fulfill societal commitment through Corporate Social Responsibility (CSR) activities to benefit the wider community.</li>
          <li className="bg-white p-5 text-2xl"><x className="bg-white font-bold">Office of the ACR:</x> This office has a dedicated, dynamic, and enthusiastic team of officials and staff members, headed by Prof. Suman Mukhopadhyay, Dean (ACR), working consistently towards achieving the objectives of the institute aligned with its vision. In addition, a student body named the Alumni Cell is also extending its support and cooperation to this office to conduct and organize various related activities and events.</li>
        </ul>
      </div>
      </div>
      <div className="footer relative bottom-0">
        <Footer/>
      </div>
    </>
  );
}

export default IITIAlumniAssociaton;
