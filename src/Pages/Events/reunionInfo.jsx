import React from "react";
import boy from "../../assets/unknownboys.jpeg";

function ReunionInfo() {
  return (
    <>
      <div className="bg-white p-3 m-5 w-[400px] rounded-lg h-auto border-1 border-solid border-black">
        <div
          className="bg-cover rounded-t-lg w-full h-[300px]"
          style={{ backgroundImage: `url(${boy})` }}></div>
        <div className="bg-[#00B4D8] text-center rounded-b-lg">
          <div className="text-white font-bold font-serif text-3xl m-2 mt-0 font-outline-1">
            Reunion Name
          </div>
          <div className="text-white font-semibold text-xl pl-2 pr-2 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh
            tortor id aliquet lectus proin nibh. Proin sagittis nisl rhoncus
            mattis rhoncus. Viverra maecenas accumsan lacus vel. Id aliquet
            lectus proin nibh nisl. Enim facilisis gravida neque convallis a
            cras semper auctor.
          </div>
        </div>
      </div>
    </>
  );
}

export default ReunionInfo;
