import React from 'react'
import 'tailwindcss/tailwind.css'


function Search_topics() {
  
    return (
        <div className="bg-slate-100 mt-0  bg-[url('https://media.istockphoto.com/photos/femalehand-of-planner-writing-daily-appointment-picture-id1173258771?k=20&m=1173258771&s=612x612&w=0&h=kXaXoxUwBESwIwta-RInWd2voCvLn0VjkJLggCP8hUQ=')] bg-cover ">
            <div className="w-80  mt-6   grid grid-cols-3 gap-96 border-x-0 " data-options="autoplay: 1000; step: 1; mode: carousel; height: 275;">
                <div className="w-80  mt-6 mr-10 ml-10  grid grid-rows-6 grid-flow-col gap-4  ">
                    <img alt="image" src="https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339__480.jpg" className="w-full relative h-50 ease-in-out" />
                    <img alt="image" src="https://cdn.pixabay.com/photo/2021/12/03/08/50/nature-6842159__340.jpg" className="w-full relative h-50 ease-in-out" />
                    <img alt="image" src="https://cdn.pixabay.com/photo/2021/11/01/08/39/petit-minou-lighthouse-6759731__340.jpg" className="w-full relative h-50 ease-in-out " />

                </div>
                <div className="bg-teal-400 w-full h-full float-right"
                >
                    <div className="container mt-60 grid ml-96 justify-center items-center">
                        <div className="relative">
                            <div className="absolute top-4 left-3 "> <i className="fa  fa-search text-gray-500  hover:text-gray-800"></i> </div> <input type="text" className="h-14 w-96 pl-10 pr-20  rounded-lg z-0 focus:shadow focus:outline-none border-gray-300" placeholder=" Search anything..." />
                            <div className="absolute top-2 right-2"> <button className="h-10 w-20 text-white rounded-lg bg-teal-500 hover:bg-gray-400">Search 🔍</button> </div>
                        </div>

                    </div>
                </div>

             

            </div>
        </div>

    )
}

export default Search_topics

// overflow-visible h-50 inset-0 transition-all ease-in-out duration-1000 transform translate-x-0 slide
// inset-0 transition-all ease-in-out duration-1000 transform translate-x-0 slide