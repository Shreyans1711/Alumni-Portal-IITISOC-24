import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const OurTeamInfo = (props) => {
  return (
    <div>
      <div className=" m-3 w-[400px] h-auto bg-white rounded-lg p-3 flex flex-col justify-center mb-5">
        <div className="flex">
          <div>
            <img
              src={props.ImgURL}
              style={{
                width: "250px",
                height: "200px",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            />
          </div>
          <div className="font-semibold font-serif bg-[#2edaac] w-[60%] text-center text-white flex-col content-center rounded-r-lg">
            <div>Name:{props.Name}</div>
            <div>Designation:{props.Designation}</div>
            <div>Email:{props.Email}</div>
            <div>Dept:{props.Department}</div>
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
      </div>
    </div>
  );
};

export default OurTeamInfo;
