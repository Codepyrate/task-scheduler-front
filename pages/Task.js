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

    const handleDelete = (task) => {
        const updateArr = TaskList.filter(taskItem => TaskList.indexOf(taskItem) != TaskList.indexOf(task))
        setTaskList(updateArr)
    }

    return (
        <div>
            <div className='p-20'>
            <h2 className="flex justify-center text-2xl text-gray-600"> Task Manager </h2>
            </div>
            
            <form className='flex justify-center pb-6' >
                <input type="text" value={userInput} onChange={handleChange} placeholder='Add new Task' className='flex justify-center' /><button onClick={handleSubmit}  className="p-1 text-white bg-green-700 rounded-lg hover:bg-green-800">Add</button>
            </form>
            <ul className='flex grid justify-center grid-flow-col grid-rows-4 gap-4 bg-gray-300'>
                {
                    TaskList.length >=1 ? TaskList.map((task, idx) => {
                        return <li key={idx}>{task}
                        <button onClick={(e) => {
                            e.preventDefault()
                            handleDelete(task)
                        }} className="absolute p-1 text-white bg-red-600 rounded-lg right-20 hover:bg-red-700">❌</button></li>
                    })
                    : ''
                }
            </ul>
        </div>
    )
}
