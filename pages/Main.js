import HandleNote from "../components/note_folder/HandleNote";
import Note from "../components/note_folder/Note";
import Header from "../components/Header"
import React from 'react'

export default function Main(props) {
    
   
    return (
        
        <div>
            <Header/>
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
