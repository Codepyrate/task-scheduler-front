import React from 'react'
import { useState } from 'react'

export default function Task() {
    const [userInput, setUserInput] = useState('')
    const [TaskList, setTaskList] = useState([])
    const handleChange = (e) =>{
        e.preventDefault()
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTaskList([
            userInput,
            ...TaskList
        ])
        setUserInput('')

    }


    return (
        <div>
            <div>
            <h2> Task Manager </h2>
            </div>
            
            <form>
                <input type="text" value={userInput} onChange={handleChange} placeholder='Add new Task'  /><button onClick={handleSubmit} >Add</button>
            </form>
            
        </div>
    )
}
