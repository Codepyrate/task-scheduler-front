import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Header from "../components/Header";
import { useAuth } from "../contexts/auth";
import Link from "next/link";
import { Alert } from "react-bootstrap";
export default function Login({ login }) {
  // const { user, login } = useAuth()
  const [signup, setSignup] = useState(false);

  function userConfirm() {
    setSignup(true);
  }

  let onCreate = (e) => {
    e.preventDefault();

    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    try {
      login(user.username, user.password);
    } catch {
      setSignup(true);
    }
  };
  return (
    <div className="">
      <Header />
      {signup && (
        <Alert
          variant="danger"
          className="text-center bg-red-600 font-bold from-orange-100"
        >
          Password or Email unCurrent Or maybe you still dont Sign Up
        </Alert>
      )}

      <form onSubmit={(e) => onCreate(e)} className="bg-gray-200 p-14">
        <div className="flex flex-col items-center justify-center h-full p-14  bg-gray-200">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
              <div className="w-3/5 p-5 ">
                <div className=" text-left font-bold text-xl mb-8">
                  <span className="text-teal-700">Task</span>Scheduler
                </div>
                <div className="pt-10 ">
                  <h2 className="text-2xl font-bold text-teal-700 pb-2">
                    Log In To You'r Account
                  </h2>
                  <div className="border-2 w-16 border-dashed border-teal-700 inline-block mb-2"></div>
                </div>
                <p className="text-gray-400 my-3">Use UserName, And Password</p>
                <div className="flex flex-col items-center gap-8 mt-8">
                  <div className="bg-gray-100 w-64  p-2 flex items-center">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                    required
                      type="text"
                      name="username"
                      placeholder="userName"
                      className=" bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                    required
                      type="password"
                      name="password"
                      placeholder="password"
                      className=" bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                </div>
              </div>
              {/*Sign in */}
              <div className="w-2/5 bg-teal-700 text-white rounded-tr-2xl rounded-br-2xl pt-36 pb-24 px-2">
                <h2 className=" text-2xl font-bold mb-2">
                  {" "}
                  Welcome,<span className=" text-gray-900">Task</span>
                  <span className=" text-gray-700">Scheduler</span>{" "}
                </h2>
                <div className="border-2 w-16 border-dashed border-white inline-block mb-2"></div>
                <p className=" mx-10 pb-10">
                  Make Your Life More Easy, When Use Scheduler-Task App, To
                  Scheduler It.
                </p>
                
                  <button type="submit" className="border-2 mb-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-teal-700">
                    Log In
                  </button>
                
                {/* <Link href="/Login">
    <div className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-teal-700">Go Log In</div>
    </Link> */}
              </div>
              {/*Sign up */}
            </div>
          </main>
        </div>
      </form>
    </div>
  );
}
