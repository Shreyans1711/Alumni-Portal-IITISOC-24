import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function AlumniInfo(props) {
  return (
    <>
      <div className=" m-5 w-[400px] h-auto bg-white rounded-lg p-4 flex flex-col justify-center">
        <div className="flex">
          <div>
            <img
              src={props.ImgURL}
              style={{
                width: "200px",
                height: "200px",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            />
          </div>
          <div className="font-semibold font-serif bg-[#023E8A] text-center text-white flex-col content-center p-2 rounded-r-lg">
            <div>Name:{props.Name}</div>
            <div>Year:{props.Year}</div>
            <div>Dept:{props.Department}</div>
            <div>Achievment:{props.Achievment}</div>
            <div className="flex justify-center gap-3 mt-3 text-2xl">
              <a href={props.IgLink}>
                <FaInstagram />
              </a>
              <a href={props.LinLink}>
                <FaLinkedin />
              </a>
              <a href={props.GitLink}>
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="font-semibold text-center">{props.Description}</div>
      </div>
    </>
  );
}

export default AlumniInfo;
