import HandleNote from "./HandleNote";
import Note from "./Note";
import {useState} from "react"
import React from 'react'

export default function Main(props) {
    const [sotreData, setStoreData] = useState([]);
    console.log("sotreData test");
   
      function noteHandler(event) {
          event.preventDefault();
          const sotreData = {
            note: event.target.t_note.value,
            day: event.target.day.value,
            time: event.target.time.value,
            d_note: event.target.d_note.value
          }
          setStoreData(previous_props=>[...previous_props,sotreData])
          console.log(sotreData);
        //   console.log("sotreData");
         
      }
    // console.log(props.sotreData, "main page");
   
    return (
        
        <div>
            {/* <Note sotreData={props.sotreData} /> */}

            <HandleNote noteHandler={noteHandler} />
            {sotreData ?
                <Note sotreData={sotreData} />
                : <h2 className="text-center">noo</h2>
            }
        </div>
    )
}


// export default function Main(props) {
//   

//   return (
//     <main className="relative" >

//       <HandleNote noteHandler={props.noteHandler} />
//       {props.sotreData.length ? 
//         <Note sotreData={props.sotreData} />
//        : <h2 className="text-center">noo</h2>
//       }
//     </main>
//   );
// }
