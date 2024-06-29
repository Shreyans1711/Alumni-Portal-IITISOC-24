import React from 'react'

const OurTeamInfo = (props) => {
  return (
    <div>
    <div className=" m-5 w-[80%] h-auto bg-white rounded-lg p-1 flex flex-col justify-center">
        <div className="flex">
          <div>
            <img
              src={props.photo}
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
              }}
            />
          </div>
          <div className="font-semibold font-serif bg-[#2edaac] w-[60%] text-center text-white flex-col content-center rounded-r-lg">
            <div>Name:{props.name}</div>
            <div>Dept:{props.dept}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeamInfo
