import React from 'react'

const UpcomingEvent = () => {
  return (
    <body className='m-5'>
        <div className="event flex justify-center items-center gap-[20%]">
            <div className="date flex flex-col">
                <div className="month font-semibold text-sm md:text-lg">
                    FEB
                </div>
                <div className="date text-3xl md:text-5xl font-bold">
                    01
                </div>
            </div>
            <div className="actualEvent">
                <div className='cursor-pointer flex items-center gap-2'>
                <div className='relative group'>
                    <span onClick={()=>{window.open("https://www.google.com")}} className="eventName text-md md:text-2xl font-bold border-b-2 border-transparent group-hover:border-red-500 transition duration-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, voluptatibus!</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill='red' width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
                </div>
                <div className="eventDate text-md md:text-xl flex items-center gap-3"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" className="w-4 h-4 event-when__icon svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>Wednesday,Feb 1,2025 | 10:00 am onwards</div>
                <div className="location text-md md:text-xl flex items-center gap-3"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="w-4 h-4 event-location__icon svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quae?</div>
            </div>
        </div>
    </body>
  )
}

export default UpcomingEvent
