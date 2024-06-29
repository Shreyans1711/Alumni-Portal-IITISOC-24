import React from "react";
import boy from "../../assets/unknownboys.jpeg";

function ANInfo() {
  return (
    <>
      <div className="bg-[#D9D9D9] p-3 rounded-lg lg:flex gap-2 max-lg:w-[400px]">
        <div
          className=" lg:w-2/3 bg-cover rounded-lg w-full min-h-[200px]"
          style={{ backgroundImage: `url(${boy})` }}></div>
        <div className="bg-[#F5A7A7] rounded-lg text-center p-3">
          <div className="text-2xl font-bold">News</div>
          <div className=" text-xl">
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

export default ANInfo;
