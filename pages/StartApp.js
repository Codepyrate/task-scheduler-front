
import React,{useState} from 'react'
import Header from '../components/Search_topics/Header'
import SearchTopics from '../components/Search_topics/SearchTopics'
import Game from '../components/ticTacToe/Game'
export default function StartApp() {
    const [state, setState] = useState('h')
    function getPage(page){
       
        setState(page)       
      
    }
    return (
        <div className=' bg-slate-100'>
            <Header pageFromChild={getPage}/>
          
            {state=='s'?<SearchTopics/>:<Game/> }
            
           
        </div>
    )
}

