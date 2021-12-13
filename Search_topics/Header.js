import React from 'react'
// import dateTime from 'date-time';

function Header() {
    return (
        <div>
            <nav className="flex flex-wrap items-center justify-between p-6 bg-gray-500">
                <div className="flex items-center flex-shrink-0 mr-6 text-white">
                    <img className="w-8 h-8 mr-2 fill-current" width="80" height="80" viewBox="0 0 54 54" src="https://ps.w.org/modern-events-calendar-lite/assets/icon-256x256.png?rev=2573779"></img>
                    <span className="font-semibold fofnt-'Playball' text-3xl text-gray-200 mt-2 tracking-tight">Task Scheduler</span>
                </div>
                
              
                
                
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
                    <div className="grid grid-cols-6 gap-5 mt-0 ml-56 text-xl  lg:flex-grow">
                        <a href="#responsive-header" className="mt-4 mr-4 text-teal-200  hover:text-white">
                            Tasks
                        </a>
                        <a href="#responsive-header" className="mt-4 mr-4 text-teal-200  hover:text-white">
                            Search Topics
                        </a>
                        <a href="#responsive-header" className="mt-4 text-teal-200  hover:text-white">
                            Notes
                        </a>
                        <a href="#responsive-header" className="mt-4 text-teal-200  hover:text-white">
                            Entertainment
                        </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block px-4 py-2 mt-4 text-lg leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">Log in</a>
                        
                    </div>
                    
                </div>
                <div className='mt-2 text-gray-100 ml-14'>
                {dateTime({showTimeZone: false})} 
                </div>
                
            </nav>
        </div>
    )
}

export default Header
