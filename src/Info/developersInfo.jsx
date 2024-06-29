import React from "react";

const handleClick = (link) => {
  window.open(link, "_blank");
};

function AlumniInfo(props) {
  return (
    <>
      <div onClick={() => handleClick(props.link)} className="cursor-pointer m-4 w-[400px] h-auto bg-white rounded-lg p-4 flex flex-col justify-center">
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
          <div className="font-semibold font-serif bg-[#39bdcb] text-center text-white flex-col content-center p-2 rounded-r-lg">
            <div>Name: {props.name}</div>
            <div>Year: {props.year}</div>
            <div>Dept: {props.dept}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlumniInfo;
