import React from "react";
import boy from "../../assets/unknownboys.jpeg";

function AlumniInfo(props) {
  return (
    <>
      <div className=" m-5 w-[400px] h-auto bg-white rounded-lg p-4 flex flex-col justify-center">
        <div className="flex">
          <div>
            <img
              src={props.photo}
              style={{
                width: "200px",
                height: "200px",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            />
          </div>
          <div className="font-semibold font-serif bg-[#023E8A] text-center text-white flex-col content-center p-2 rounded-r-lg">
            <div>Name:{props.name}</div>
            <div>Year:{props.year}</div>
            <div>Dept:{props.dept}</div>
            <div>Achievment:{props.Achievement}</div>
          </div>
        </div>
        <div className="font-semibold text-center">{props.description}</div>
      </div>
    </>
  );
}

export default AlumniInfo;
