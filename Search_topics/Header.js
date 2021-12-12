import React from 'react'
import dateTime from 'date-time';

function Header() {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img className="fill-current h-8 w-8 mr-2" width="80" height="80" viewBox="0 0 54 54" src="https://ps.w.org/modern-events-calendar-lite/assets/icon-256x256.png?rev=2573779"></img>
                    <span className="font-semibold fofnt-'Playball' text-3xl text-gray-200 mt-2 tracking-tight">Task Scheduler</span>
                </div>
                
              
                
                
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="  ml-56 mt-0 lg:flex-grow grid grid-cols-6 gap-5 text-xl">
                        <a href="#responsive-header" className=" mt-4   text-teal-200 hover:text-white mr-4">
                            Tasks
                        </a>
                        <a href="#responsive-header" className=" mt-4 mr-4  text-teal-200 hover:text-white ">
                            Search Topics
                        </a>
                        <a href="#responsive-header" className=" mt-4   text-teal-200 hover:text-white">
                            Notes
                        </a>
                        <a href="#responsive-header" className=" mt-4   text-teal-200 hover:text-white ">
                            Entertainment
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block  px-4 py-2 text-lg leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Log in</a>
                        
                    </div>
                    
                </div>
                <div className='text-gray-100 ml-14 mt-2'>
                {dateTime({showTimeZone: false})} 
                </div>
                
            </nav>
        </div>
    )
}

export default Header
