import HandleNote from '../components/note_folder/HandleNote'
import Note from "../components/note_folder/Note"
import {useState} from "react"
import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

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

            <Header/>
            {sotreData ?
                <Note sotreData={sotreData} />
                : <h2 className="text-center">noo</h2>
            }
            <HandleNote noteHandler={noteHandler} />
            <Footer/>
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
