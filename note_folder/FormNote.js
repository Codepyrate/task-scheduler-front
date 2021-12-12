import React from "react"

export default function FormNote() {
    return (
        <div  >
            {/* test_dev */}
            <header className="grid grid-cols-3 p-2 mb-1 text-4xl text-center bg-slate-200 gap-x-20 ">
                <p className="font-thin">Logo</p>
                <p className="font-medium text-center ">Add Note Form</p>
                <p className="font-thin">Log out</p>
                
            </header>

            <main className="mt-24">
                <form className='flex-col justify-center w-10/12 p-2 mx-auto rounded-md shadow-2xl bg-zinc-400'>
                    <h1 className="my-4 text-4xl font-bold text-center ">
                        New Note       </h1>
                    <div className="break-normal texter-center ">
                        <label className="texter-center">Note name: </label>
                        <input name="Note" className="flex-auto w-10/12 by-gray-100" placeholder="inter your note name?" />
                    </div>

                    <div className="flex w-3.2/4 mx-auto my-5 justify-around break-normal">
                        <div className="flex-col w-1/4 break-normal">
                            <h2> Day </h2>
                            <input name="day" className="" placeholder="inter day?" />
                        </div>

                        <div className="flex-col w-1/4 break-normal ">
                            <h2> Time  </h2>
                            <input name="time" className="" placeholder="inter Time?" />
                        </div>

                        <div className="flex-col w-1/4 break-normal ">
                            <h2> Note </h2>
                            <input name="note" className="" placeholder="inter Note?" />
                        </div>
                        <button className="w-1/6 bg-yellow-100" >Add Note</button>
                    </div>
                </form>

            </main>
            <footer className="grid w-full grid-cols-3 p-2 font-thin text-center bg-slate-200 mt-80 gap-x-20 ">
                <p>Contact-us </p>
                <p className="">@Code-pyraits </p>
                <p>About-us</p>
                
            </footer>
        </div>
    )
}