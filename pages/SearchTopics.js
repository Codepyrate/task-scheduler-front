import React from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'



function Search_topics() {

    let results = []
    let related_Q = []

    const [input, setInput] = useState('');
    const [device, setdevice] = useState([]);
    const [quest, setdata] = useState([]);

    const handleinput = async () => {
        console.log(input)

        await axios.get(`https://tasks-scheduler-apps.herokuapp.com/search?q=${input}`).then(response => {
            console.log(response.data.knowledge_graph)
            results = response.data.knowledge_graph
            related_Q = response.data.related_questions
            console.log(related_Q)

            // setdevice(response.data)
        })
        console.log(results, 'result')
        setdevice(results)
        setdata(related_Q)
        console.log(device)
        console.log(quest)
    }





    return (
        <div className='relative'>
            <Header />
            <div className=" h-full bg-slate-100 w-11/12 border-2 m-auto drop-shadow-md border-gray-100  mb-auto ">
                <div className="w-80  mt-6   grid grid-cols-3 gap-96 border-x-0 " >
                    <div className="w-80  mt-6 mr-10 ml-10  grid grid-rows-6 grid-flow-col gap-4  ">
                        <img alt="image" src="https://media.istockphoto.com/photos/goal-plan-action-text-on-note-pad-picture-id1284696245?b=1&k=20&m=1284696245&s=170667a&w=0&h=C5x9jqbc3oKHdmB52tBv-BKdYnLBaL-NH5gw9_pdSGc=" />
                        <img alt="image" src="https://media.istockphoto.com/photos/flipping-of-wooden-cube-block-for-change-2021-to-2022-year-for-merry-picture-id1306669120?b=1&k=20&m=1306669120&s=170667a&w=0&h=OPcBy2EUkv2R5AV54XJqNniU2wNh2DI_dSZEcgDW6A0=" className="w-full relative h-50 ease-in-out" />
                        <img alt="image" src="https://media.istockphoto.com/photos/asian-lady-typing-laptop-calendar-cafe-concept-picture-id598084402?b=1&k=20&m=598084402&s=170667a&w=0&h=ZH5ueGA9SOl-aVzUXiKKGQXbfzYLTcBEaZ31d_EsdEU=" className="w-full relative h-50 ease-in-out" className="w-full relative h-50 ease-in-out " />


                    </div>
                    <div className="bg-teal-400 w-full  float-right"
                    >
                        <div className="container  grid ml-72 mt-12 justify-center items-center">
                            <div className="relative">
                                <div className="absolute top-4 left-3 "> <i className="fa  fa-search text-gray-500  hover:text-gray-800"></i> </div> <input type="text" className="h-14 w-96 pl-10 pr-20  rounded-lg z-0 focus:shadow focus:outline-none border-gray-300" onChange={e => { setInput(e.target.value) }} name="input" placeholder=" Search anything..." />
                                <div className="absolute top-2 right-2"> <button onClick={() => handleinput()} className="h-10 w-20 text-white rounded-lg bg-teal-500 hover:bg-gray-400">Search 🔍</button> </div>
                            </div>
                           
                            <div class="max-w-sm rounded overflow-hidden mt-20"
                            >
                                <h1 className='font-bold text-4xl mb-2f italic text-teal-400'>{device.title} {device.artist} {device.name}</h1>
                                <div className='grid grid-cols-2 justify-center'>
                                    <h5 className='text-xs text-bold mt-4'>{device.type}</h5>

                                    <h4 className='text-xs text-bold mt-4'>{device.local_time}</h4>
                                </div>
                                {device.length > 0 && device.map(item => {
                                    return (
                                        <img alt="h" src={item} />
                                    )
                                })}

                                <br />
                                <p className='text-black-400 text-xl mt-6'>
                                    {device.description}

                                </p>
                                <p className='text-black-400 text-xl mt-6'>
                                    {device.speed}
                                    {device.clubs_and_teams}

                                </p>
                                <p className='text-red-400 text-xl mt-6'>
                                    {device.weather}
                                    {device.kingdom}
                                </p>
                                <link href={device.source} />
                                <br />
                                <br />
                                <br />
                                {quest.length > 0 && quest.map(item => {
                                    return (
                                        <>

                                            <ul>

                                                <li>{item.question} : <h1 className='text-blue-500'>{item.link}  </h1>  </li>
                                                <br />
                                            </ul>
                                        </>

                                    )
                                })}
                            </div>

                        </div>

                    </div>
                    <div className=" w-full  float-right"
                    >
                        <div className="w-80  mt-6 ml-64 grid grid-rows-6 gap-4  ">
                            <img alt="image" src="https://media.istockphoto.com/photos/goal-plan-action-text-on-note-pad-picture-id1284696245?b=1&k=20&m=1284696245&s=170667a&w=0&h=C5x9jqbc3oKHdmB52tBv-BKdYnLBaL-NH5gw9_pdSGc=" />
                            <img alt="image" src="https://media.istockphoto.com/photos/flipping-of-wooden-cube-block-for-change-2021-to-2022-year-for-merry-picture-id1306669120?b=1&k=20&m=1306669120&s=170667a&w=0&h=OPcBy2EUkv2R5AV54XJqNniU2wNh2DI_dSZEcgDW6A0=" className="w-full relative h-50 ease-in-out" />
                            <img alt="image" src="https://media.istockphoto.com/photos/asian-lady-typing-laptop-calendar-cafe-concept-picture-id598084402?b=1&k=20&m=598084402&s=170667a&w=0&h=ZH5ueGA9SOl-aVzUXiKKGQXbfzYLTcBEaZ31d_EsdEU=" className="w-full relative h-50 ease-in-out" className="w-full relative h-50 ease-in-out " />

                        </div>

                    </div>
                    
                </div>

            </div>
            <div className='absolute' >
                        <Footer />

                    </div>

        </div>

    )
}

export default Search_topics

// overflow-visible h-50 inset-0 transition-all ease-in-out duration-1000 transform translate-x-0 slide
// inset-0 transition-all ease-in-out duration-1000 transform translate-x-0 slide