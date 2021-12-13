export default function HandleNote(props) {
    
    
    return (
        <div  >
        <form onSubmit={props.noteHandler} className='flex-col justify-center w-10/12 p-2 mx-auto rounded-md shadow-2xl bg-zinc-400'>
            <h1 className="my-4 text-4xl font-bold text-center ">
                New Note  </h1>
            <div className="break-normal texter-center ">
                <label className="texter-center">Note Title: </label>
                <input name="t_note" className="flex-auto w-10/12 by-gray-100" placeholder="inter your note name?" />
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
                    <input name="d_note" className="" placeholder="inter Note?" />
                </div>
                <button className="w-1/6 bg-yellow-100" >Add Note</button>
            </div>
        </form>



        </div >
    )
}