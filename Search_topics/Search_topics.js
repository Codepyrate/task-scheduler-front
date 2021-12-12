import React from 'react'
import 'tailwindcss/tailwind.css'


function Search_topics() {
    return (
        <div>
            <div className="flex justify-center bg-scroll" >
            <form className="scroll-m-[24rem]">
                <label className="font-bold align-center  text-gray-800 ">Search Topics:</label>
                <input type="search" id="search" name="search" placeholder="Search for anything..." className="placeholder:italic text-gray-400 border-indigo" />
                <button type="submit" className="border-double border-4 border-indigo-300">🔍 </button>
            </form>

            </div>
            
            </div>
    )
}

export default Search_topics

