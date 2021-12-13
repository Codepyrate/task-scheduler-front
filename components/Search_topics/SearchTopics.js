import React from 'react'
import 'tailwindcss/tailwind.css'

function Search_topics() {

    return (
        <div className="bg-slate-100 w-11/12 border-2  m-auto drop-shadow-md border-gray-100    bg-cover ">
            <div className="w-80  mt-6   grid grid-cols-3 gap-96 border-x-0 " >
                <div className="w-80  mt-6 mr-10 ml-10  grid grid-rows-6 grid-flow-col gap-4  ">
                    <img alt="image" src="https://media.istockphoto.com/photos/goal-plan-action-text-on-note-pad-picture-id1284696245?b=1&k=20&m=1284696245&s=170667a&w=0&h=C5x9jqbc3oKHdmB52tBv-BKdYnLBaL-NH5gw9_pdSGc=" />
                    <img alt="image" src="https://media.istockphoto.com/photos/flipping-of-wooden-cube-block-for-change-2021-to-2022-year-for-merry-picture-id1306669120?b=1&k=20&m=1306669120&s=170667a&w=0&h=OPcBy2EUkv2R5AV54XJqNniU2wNh2DI_dSZEcgDW6A0=" className="w-full relative h-50 ease-in-out" />
                    <img alt="image" src="https://media.istockphoto.com/photos/asian-lady-typing-laptop-calendar-cafe-concept-picture-id598084402?b=1&k=20&m=598084402&s=170667a&w=0&h=ZH5ueGA9SOl-aVzUXiKKGQXbfzYLTcBEaZ31d_EsdEU=" className="w-full relative h-50 ease-in-out" className="w-full relative h-50 ease-in-out " />

                </div>
                <div className="bg-teal-400 w-full h-full float-right"
                >
                    <div className="container  grid ml-72 mt-12 justify-center items-center">
                        <div className="relative">
                            <div className="absolute top-4 left-3 "> <i className="fa  fa-search text-gray-500  hover:text-gray-800"></i> </div> <input type="text" className="h-14 w-96 pl-10 pr-20  rounded-lg z-0 focus:shadow focus:outline-none border-gray-300" placeholder=" Search anything..." />
                            <div className="absolute top-2 right-2"> <button className="h-10 w-20 text-white rounded-lg bg-teal-500 hover:bg-gray-400">Search 🔍</button> </div>
                        </div>

                    </div>
                </div>

                <div className="w-80  mt-6 ml-64 grid grid-rows-6 grid-flow-col gap-4  ">
                    <img alt="image" src="https://media.istockphoto.com/photos/goal-plan-action-text-on-note-pad-picture-id1284696245?b=1&k=20&m=1284696245&s=170667a&w=0&h=C5x9jqbc3oKHdmB52tBv-BKdYnLBaL-NH5gw9_pdSGc=" />
                    <img alt="image" src="https://media.istockphoto.com/photos/flipping-of-wooden-cube-block-for-change-2021-to-2022-year-for-merry-picture-id1306669120?b=1&k=20&m=1306669120&s=170667a&w=0&h=OPcBy2EUkv2R5AV54XJqNniU2wNh2DI_dSZEcgDW6A0=" className="w-full relative h-50 ease-in-out" />
                    <img alt="image" src="https://media.istockphoto.com/photos/asian-lady-typing-laptop-calendar-cafe-concept-picture-id598084402?b=1&k=20&m=598084402&s=170667a&w=0&h=ZH5ueGA9SOl-aVzUXiKKGQXbfzYLTcBEaZ31d_EsdEU=" className="w-full relative h-50 ease-in-out" className="w-full relative h-50 ease-in-out " />

                </div>

            </div>
            
        </div>

    )
}

export default Search_topics

// overflow-visible h-50 inset-0 transition-all ease-in-out duration-1000 transform translate-x-0 slide
// inset-0 transition-all ease-in-out duration-1000 transform translate-x-0 slide