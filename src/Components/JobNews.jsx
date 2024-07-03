import React from 'react';

const AlumniNews = (prop) => {
  return (
    <div 
      onClick={() => { window.open("http://localhost:8000/mentorship/jobs") }} 
      className='w-[70%] lg:w-[25vw] h-auto min-h-[50vh] p-4 cursor-pointer bg-white border border-gray-300'
    >
        <div className="text-2xl md:text-4xl moreEvents relative group w-full h-auto font-bold flex justify-center items-center">
            <span className="border-b-2 border-transparent group-hover:border-red-500 transition duration-100">
              Job {prop.number}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill='red' width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
        </div>
        <div className="text-xs mt-3 overflow-auto font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis tenetur laboriosam consectetur ipsa aliquam repudiandae, dicta voluptate possimus aspernatur perferendis, vitae error, blanditiis nulla officiis esse incidunt. Facilis excepturi iste, accusamus voluptate eligendi reprehenderit dolorum ut quaerat eius nostrum ducimus nobis consequatur quis rerum sapiente maiores totam mollitia ullam? Animi!
        </div>  
    </div>
  );
}

export default AlumniNews;
