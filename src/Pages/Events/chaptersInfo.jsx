import React from "react";
import boy from "../../assets/unknownboys.jpeg";

function ChapterInfo() {
  return (
    <>
      <div className="bg-white p-3 m-5 w-[600px] rounded-lg h-auto border-1 border-solid border-black">
        <div
          className="bg-cover rounded-t-lg w-full h-[300px]"
          style={{ backgroundImage: `url(${boy})` }}></div>
        <div className="bg-[#00B4D8] text-center rounded-b-lg">
          <div className="text-white font-bold font-serif text-3xl m-2 mt-0 font-outline-1">
            Chapter Name
          </div>
          <div className="text-white font-semibold text-xl pl-2 pr-2 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh
            tortor id aliquet lectus proin nibh. Proin sagittis nisl rhoncus
            mattis rhoncus. Viverra maecenas accumsan lacus vel. Id aliquet
            lectus proin nibh nisl. Enim facilisis gravida neque convallis a
            cras semper auctor. Duis ultricies lacus sed turpis tincidunt id
            aliquet risus. At imperdiet dui accumsan sit amet nulla facilisi
            morbi. Sapien faucibus et molestie ac feugiat sed lectus. Semper
            auctor neque vitae tempus.
          </div>
        </div>
      </div>
    </>
  );
}

export default ChapterInfo;
