import React from "react";
import boy from "../../assets/unknownboys.jpeg";

function ANInfo(props) {
  return (
    <>
      <div className="bg-[#D9D9D9] p-3 rounded-lg lg:flex gap-2 max-lg:w-[400px]">
        <div
          className=" lg:w-2/3 bg-cover rounded-lg w-full min-h-[200px]"
          style={{ backgroundImage: `url(${props.NewsImgURL})` }}></div>
        <div className="bg-[#F5A7A7] rounded-lg text-center p-3">
          <div className="text-2xl font-bold">{props.NewsName}</div>
          <div className=" text-xl">{props.NewsDetails}</div>
        </div>
      </div>
    </>
  );
}

export default ANInfo;
