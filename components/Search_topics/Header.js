import React, { useState } from "react";
import dateTime from "date-time";

function Header(props) {
  const [page, setPage] = useState("");
  function handlerTask() {
    setPage("t");
    props.pageFromChild(page);
  }
  function handlerGame() {
      let a ='g'
    setPage(a);
    props.pageFromChild(page);
  }
  function handlerNote() {
    setPage("n");
    props.pageFromChild(page);
  }
  function handlerSearch() {
    let a = 's'
    setPage(a);
    props.pageFromChild(page);
  }
  return (
    <nav className="flex items-center justify-between  flex-wrap bg-teal-700 ... ring-4 ring-teal-300 ring-inset p-6 ">
      <div className="flex items-center flex-shrink-0 text-white ">
        <img
          className="fill-current h-8 w-8 mr-2"
          width="80"
          height="80"
          viewBox="0 0 54 54"
          src="https://ps.w.org/modern-events-calendar-lite/assets/icon-256x256.png?rev=2573779"
        ></img>
        <span className="font-semibold fofnt-'Playball' text-3xl text-gray-200 mt-2 tracking-tight">
          Task Scheduler
        </span>
      </div>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"> */}
      <div className=" mt-4  ml-48 lg:flex-grow grid grid-cols-6 text-xl">
        <a
          href="#responsive-header"
          onClick={handlerTask}
          className="text-teal-200 hover:text-white border-collapse "
        >
          Tasks
        </a>
        <a
          href="#responsive-header"
          onClick={handlerNote}
          className="text-teal-200 hover:text-white"
        >
          Notes
        </a>
        <a
          href="#responsive-header"
          onClick={handlerSearch}
          className="text-teal-200 hover:text-white "
        >
          Search Topics
        </a>

        <a
          href="#responsive-header"
          onClick={handlerGame}
          className="text-teal-200 hover:text-white ml-8"
        >
          Entertainment
        </a>
        <a
          href="#"
          className="inline-block  px-4 py-2 text-lg text-center leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 ml-16"
        >
          Log in
        </a>
        <a
          href="#"
          className="inline-block  px-4 py-2 text-lg text-center leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 ml-16"
        >
          Sign in
        </a>
      </div>

      {/* </div> */}
      <div className="text-gray-100 ml-14 mt-2">
        {dateTime({ showTimeZone: false })}
      </div>
    </nav>
  );
}

export default Header;
