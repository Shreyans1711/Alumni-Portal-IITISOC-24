import React from "react";

const jobInfo = () => {
  return (
    <div className="bg-[#F3A5A5] rounded-lg p-3 flex flex-col justify-between relative mb-3">
      <div className="text-2xl font-serif font-bold text-center mb-2">Role</div>
      <div className="Details text-left text-xl pl-5 font-semibold">
        <span className="font-bold">Details:</span> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Facilis repellendus labore, maxime
        perspiciatis veniam nobis quam ullam neque sed rerum mollitia,
        consequatur illo, reiciendis recusandae cum assumenda suscipit! Nostrum
        sint dolor quaerat corrupti? Aut nostrum facere, quisquam quae, officiis
        accusamus architecto ducimus modi ipsum perferendis aspernatur rem
        voluptates veritatis beatae laborum qui molestiae harum impedit
        reiciendis, dolor ipsa asperiores doloribus! Nemo quae similique, quas
        quidem iure id dolorem dolores ducimus accusantium reprehenderit, vitae
        officiis quos magni ullam, pariatur ratione doloremque modi ut placeat
        eligendi est exercitationem perspiciatis. Nihil magnam officia, nulla
        aliquam dolore nisi provident, repellendus, magni quasi labore debitis?
      </div>
      {/* <div className="outerLink flex justify-center">
        <a target="_blank" href="http://www.google.com">
          <div className="links cursor-pointer bg-[#8B9DFF] w-[90vw] sm:w-[75vw] h-[7vh] sm:h-[5vh] rounded-full flex items-center justify-center m-4">
            <h1 className="text-xl sm:text-2xl pl-4">Links:</h1>
          </div>
        </a>
      </div> */}
      <div className="bg-[#8B9DFF] rounded-lg p-3 font-bold text-xl mt-3 text-center">
        <a target="_blank" href="http://www.google.com">
          Links
        </a>
      </div>
    </div>
  );
};

export default jobInfo;
