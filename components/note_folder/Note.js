import React from "react"
import Link from "next/link"

export default function Note(props) {
  console.log("Note page");
  console.log(props.sotreData, "Note page");
  return (
    
    <main >
     
      <div className="grid grid-cols-3 grid-rows-3 gap-4 ml-12 mr-12">
        {props.sotreData?.map(function(item, key)  {

          return (
            <div className="mt-1 bg-yellow-100 shadow-lg">
              <h2 className="text-center break-normal">{item.note}</h2>
              <h2 className="break-normal">Day{item.day}</h2>
              <h2 className="break-normal">Time{item.time}</h2>
              <h2 className="break-normal">Note{item.d_note} </h2>
              <div className="border-t-[1px] border-indigo-500 ml-2 grid grid-cols-2 gap-x-20">
                <button className="px-4 py-2 font-bold text-yellow-400 rounded hover:bg-zinc-400">
                  🛠
                </button>
                <button className="px-4 py-2 font-bold text-red-400 rounded hover:bg-zinc-400">
                  ❌
                </button>
              </div>
            </div>)
        })}

        {/* <div className="w-32 text-center border-2 border-indigo-600 border-dashed mt-28 ">
          {/* <Link href="/"><a className="mb-9">Add New Note</a>
          </Link> */}
        {/* </div> */} 
      </div>

    </main>
  )
}

