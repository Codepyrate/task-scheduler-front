import React from "react"
import Link from "next/link"
import FormNote from "./FormNote"

export default function Note(props) {
  console.log("Note page");
  console.log(props, "Note page");
  return (
    // mr-12
    <main >
      <div className=""></div>
      <header className="grid grid-cols-3 p-2 mt-0 text-4xl text-center bg-slate-200 gap-x-20 ">
        <p className="font-thin">Logo</p>
        <p className="font-medium text-center ">Note Schdualer</p>
        <p className="font-thin">Log out</p>

      </header>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 ml-12 mr-12 mt-14">
        {props.storeData.map((item, key) => {

          return (
            <div className="bg-yellow-100 shadow-lg">
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

        <div className="w-32 text-center border-2 border-indigo-600 border-dashed mt-28 ">
          {/* <Link href="/"><a className="mb-9">Add New Note</a>
          </Link> */}
        </div>
      </div>

    </main>
  )
}

