import React from 'react'
import {FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import Header from '../components/Header'
import Link from 'next/link'
export default function Login() {
    return (
      <div>
        <Header/>
        
        <div className="flex flex-col items-center justify-center h-full bg-gray-200 p-14">
             <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <div className="flex w-2/3 max-w-4xl bg-white shadow-2xl rounded-2xl">
          <div className="w-3/5 p-5">
            <div className="text-xl font-bold text-left ">
              <span className="text-teal-700">Task</span>Scheduler              
            </div>
            <div className="py-10">
              <h2 className="pb-2 text-2xl font-bold text-teal-700">Log In To You'r Account</h2>
              <div className="inline-block w-16 mb-2 border-2 border-teal-700 border-dashed"></div>

              </div>
              <p className="my-3 text-gray-400">Use Email And Password</p>
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center w-64 p-2 bg-gray-100">
                  <FaRegEnvelope className="mr-2 text-gray-400"/>
                  <input type="email" name="email" placeholder="Email" className="flex-1 text-sm bg-gray-100 outline-none " />
                </div>
                <div className="flex items-center w-64 p-2 bg-gray-100">
                  <MdLockOutline className="mr-2 text-gray-400"/>
                  <input type="password" name="password" placeholder="password" className="flex-1 text-sm bg-gray-100 outline-none " />
                </div>

              </div>
          </div>
          {/*Sign in */}
          <div className="w-2/5 px-2 pb-24 text-white bg-teal-700 rounded-tr-2xl rounded-br-2xl pt-36">
            <h2 className="mb-2 text-2xl font-bold "> Welcome,<span className="text-gray-900 ">Task</span>
            <span className="text-gray-700 ">Scheduler</span> </h2>
            <div className="inline-block w-16 mb-2 border-2 border-white border-dashed"></div>
            <p className="pb-10 mx-10 ">Make Your Life More Easy, When Use Scheduler-Task App, To Scheduler It.</p>
            <div className="inline-block px-12 py-2 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-teal-700">Log In</div>
            {/* <Link href="/Signup">
            <div className="inline-block px-12 py-2 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-teal-700">Go Sign Up</div>
            </Link> */}
            
          </div>
          {/*Sign up */}
        </div>
      </main>
        </div>



      </div>
        
    )
}
