import HandleNote from "./HandleNote";
import Note from "./Note";

import React from 'react'

export default function Main(props) {
    console.log(props.sotreData, "main page");
   
    return (
        
        <div>
            {/* <Note sotreData={props.sotreData} /> */}

            <HandleNote noteHandler={props.noteHandler} />
            {props.sotreData ?
                <Note sotreData={props.sotreData} />
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
