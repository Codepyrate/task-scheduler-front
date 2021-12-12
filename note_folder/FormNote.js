import {useState} from "react"
import Footer from "./Footer" 
import Header from "./Header"
import Main from "./Main";
export default function FormNote() {
    const [sotreData, setStoreData] = useState("");
    console.log("sotreData test");
   
      function noteHandler(event) {
          event.preventDefault();
          const sotreData = {
            note: event.target.t_note.value,
            day: event.target.day.value,
            time: event.target.time.value,
            d_note: event.target.d_note.value
          }
          setStoreData(sotreData)
          console.log(sotreData);
        //   console.log("sotreData");
         
      }
    return (
        <div  >
            <Header/>

            <Main sotreData={sotreData} noteHandler={noteHandler} />
            <Footer/>
        </div>
    )
}