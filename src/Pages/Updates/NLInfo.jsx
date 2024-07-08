import React from "react";

function NLInfo(props) {
  return (
    <>
      <div className="bg-[#D9D9D9] rounded-lg m-3 p-3">
        <div className="bg-[#F5A7A7] text-xl p-3 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-center mb-2">
            {props.PublicationName}
          </h3>
          {props.PublicationDetails}
        </div>
        <div className="bg-[#8B9DFF] rounded-lg p-3 font-bold text-xl mt-3 text-center">
          <a href={props.PublicationLink}>Link</a>
        </div>
      </div>
    </>
  );
}

export default NLInfo;
