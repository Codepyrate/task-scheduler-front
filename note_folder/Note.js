import React from "react"
import Link from "next/link"
import FormNote from "./FormNote"

export default function Note() {
  return (

    <main >
      <div className=""></div>
      <header className="grid grid-cols-3 p-2 mb-1 text-4xl text-center bg-slate-200 gap-x-20 ">
        <p className="font-thin">Logo</p>
        <p className="font-medium text-center ">Note Schdualer</p>
        <p className="font-thin">Log out</p>

      </header>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-14 ml-2.5">

        <div className="bg-yellow-100 shadow-lg"><h2 className="text-center break-normal">Exam</h2>
          <h2 className="break-normal">Day:Sunday</h2>
          <h2 className="break-normal">Time:1:20</h2>
          <h2 className="break-normal">Note:Physics Final Exam </h2>
          <div className="border-t-[1px] border-indigo-500 ml-2 grid grid-cols-2 gap-x-20">
            <button className="px-4 py-2 font-bold text-yellow-400 rounded hover:bg-zinc-400">
              🛠
            </button>
            <button className="px-4 py-2 font-bold text-red-400 rounded hover:bg-zinc-400">
              ❌
            </button>
          </div>
        </div>

        <div className="shadow-lg bg-zinc-300">
          <h2 className="text-center break-normal">HomeWork</h2>
          <h2 className="break-normal">Day:Monday</h2>
          <h2 className="break-normal">Time:3:00</h2>
          <h2 className="break-normal">Note:Solve Math homework</h2>
          <div className="border-t-[1px] border-indigo-500 ml-2 grid grid-cols-2 gap-x-20">
            <button className="px-4 py-2 font-bold text-yellow-400 rounded hover:bg-yellow-100">
              🛠
            </button>
            <button className="px-4 py-2 font-bold text-red-400 rounded hover:bg-yellow-100">
              ❌
            </button>
          </div>
        </div>
        <div className="bg-yellow-100 shadow-2xl">
          <h2 className="text-center break-normal">Read new book</h2>
          <h2 className="break-normal">Day:Monday</h2>
          <h2 className="break-normal">Time:9:00</h2>
          <h2 className="break-normal">Note:Read harry potter</h2>
          <div className="border-t-[1px] border-indigo-500 ml-2 grid grid-cols-2 gap-x-20">
            <button className="px-4 py-2 font-bold text-yellow-400 rounded hover:bg-zinc-400">
              🛠
            </button>
            <button className="px-4 py-2 font-bold text-red-400 rounded hover:bg-zinc-400">
              ❌
            </button>
          </div>
        </div>

        <div className="shadow-xl bg-zinc-300">
          <h2 className="text-center break-normal">Watch  world cup Final</h2>
          <h2 className="break-normal">Day:Tusday</h2>
          <h2 className="break-normal">Time:5:00</h2>
          <h2 className="break-normal">Note: 🎉🎉 world cup 2021 final 🎉🎉 </h2>
          <div className="border-t-[1px] border-indigo-500 ml-2 grid grid-cols-2 gap-x-20">
            <button className="px-4 py-2 font-bold text-yellow-400 rounded hover:bg-yellow-100">
              🛠
            </button>
            <button className="px-4 py-2 font-bold text-red-400 rounded hover:bg-yellow-100">
              ❌
            </button>
          </div>
        </div>

        <div className="bg-yellow-100 shadow-xl">
          <h2 className="text-center break-normal">Math Review1</h2>
          <h2 className="break-normal">Day:Tusday</h2>
          <h2 className="break-normal">Time:9:30</h2>
          <h2 className="break-normal">Note: Review chapter 8+9 </h2>
          <div className="border-t-[1px] border-indigo-500 ml-2 grid grid-cols-2 gap-x-20">
            <button className="px-4 py-2 font-bold text-yellow-400 rounded hover:bg-zinc-400">
              🛠
            </button>
            <button className="px-4 py-2 font-bold text-red-400 rounded hover:bg-zinc-400">
              ❌
            </button>
          </div>
        </div>
        <div className="shadow-2xl bg-zinc-300">
          <h2 className="text-center break-normal">Math Review2</h2>
          <h2 className="break-normal">Day:Wednesday</h2>
          <h2 className="break-normal">Time:6:30</h2>
          <h2 className="break-normal">Note: Review chapter 10+12 </h2>
          <div className="border-t-[1px] border-indigo-500 ml-2 grid grid-cols-2 gap-x-20">
            <button className="px-4 py-2 font-bold text-yellow-400 rounded hover:bg-yellow-100">
              🛠
            </button>
            <button className="px-4 py-2 font-bold text-red-400 rounded hover:bg-yellow-100">
              ❌
            </button>
          </div>
        </div>
        <div className="w-32 text-center border-2 border-indigo-600 border-dashed mt-28 ">
         <Link href="./pages/note_folder/FormNote"><a className="mb-9">Add New Note</a>
          </Link>
          </div>
      </div>

    </main>
  )
}