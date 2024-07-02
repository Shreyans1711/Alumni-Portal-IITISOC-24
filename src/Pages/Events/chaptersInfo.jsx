import React from "react";
import boy from "../../assets/unknownboys.jpeg";

function ChapterInfo(props) {
  return (
    <>
      <div className="bg-white p-3 m-5 w-[600px] rounded-lg h-auto border-1 border-solid border-black">
        <div
          className="bg-cover rounded-t-lg w-full h-[300px]"
          style={{ backgroundImage: `url(${props.ChapterImgURL})` }}></div>
        <div className="bg-[#00B4D8] text-center rounded-b-lg">
          <div className="text-white font-bold font-serif text-3xl m-2 mt-0 font-outline-1">
            {props.ChapterName}
          </div>
          <div className="text-white font-semibold text-xl pl-2 pr-2 pb-2">
            {props.ChapterDetails}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChapterInfo;
