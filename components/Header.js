import React, { useState } from "react";
import dateTime from "date-time";
import Link from "next/link";
import Login from "../pages/Login";


export default function Header() {
  
  return (
    <nav className="flex items-center justify-between  flex-wrap bg-teal-700 ... ring-4 ring-teal-300 ring-inset p-6">
      <div className="flex flex-col items-center flex-shrink-0 text-white ">
        <div className="flex ">
          <img
            className="w-8 h-8 mr-2 fill-current"
            width="80"
            height="80"
            viewBox="0 0 54 54"
            src="https://ps.w.org/modern-events-calendar-lite/assets/icon-256x256.png?rev=2573779"
          />
          <span className="font-semibold fofnt-'Playball' text-3xl text-gray-200  tracking-tight">
            Task Scheduler
          </span>
        </div>
        <div className="text-gray-100 ">
          {dateTime({ showTimeZone: false })}
        </div>
      </div>

      {/* main nav*/}
      
        <div className="flex gap-8 text-2xl">
        <Link href="/Task">
          <a className="text-teal-200 hover:text-white ">Task</a>
        </Link>

        <Link href="/Note">
          <a className="text-teal-200 hover:text-white">Notes</a>
        </Link>
        <Link href="/SearchTopics">
          <a className="text-teal-200 hover:text-white">Search Topics</a>
        </Link>

        <Link href="/Game">
          <a className="text-teal-200 hover:text-white">Entertainment</a>
        </Link>
      </div>
        {/*login and sign in*/}
    <div>
      <Link href="/Login">
        <a className="inline-block px-4 py-2 mt-4 ml-16 text-lg leading-none text-center text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">
          Log In
        </a>
      </Link>

      <Link href='/Signup'>
      <a className="inline-block px-4 py-2 mt-4 ml-16 text-lg leading-none text-center text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">
        Sign Up
      </a>
      </Link>
    </div>
    </nav>
  )
}












