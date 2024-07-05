import React from "react";
import boy from "../../../assets/unknownboys.jpeg";

function UCEvent(props) {
  return (
    <>
      <div className="bg-white m-5 rounded-lg p-3 lg:flex">
        <div
          className="lg:w-2/3 lg:h-auto bg-cover lg:rounded-l-lg max-lg:rounded-t-lg w-full h-[200px]"
          style={{ backgroundImage: `url(${props.EventImgURL})` }}></div>
        <div className="bg-[#00B4D8] lg:rounded-r-lg text-center max-lg:rounded-b-lg">
          <div className="text-white font-bold font-serif text-3xl m-2 font-outline-1">
            {props.EventName}
          </div>
          <div className="text-white font-semibold text-xl pl-2 pr-2">
            {props.EventDetails}
          </div>
          <button href={props.EventLink} class="btn btn-primary m-3">
            Registration Link
          </button>
        </div>
      </div>
    </>
  );
}

export default UCEvent;
