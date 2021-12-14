import React from "react";
import { useAuth } from '../contexts/auth'


function LoginForm() {

    const { user, login } = useAuth()

    let onCreate=(e)=>{
        e.preventDefault()

        let user={
            username : e.target.username.value ,
            password : e.target.password.value,
        }
        login(user.username , user.password)
        }


    return (

        <div className="w-3/5 p-10 m-auto bg-green-200 rounded-lg">
            <form onSubmit={e => onCreate(e)} className='flex flex-col justify-center gap-3' >
                <label className="content-center ">
                    USERNAME :{" "}
                </label>
                <input
                    name="username"
                    placeholder=" username"
                    className="w-4/5 p-1 ml-24 rounded-xl"
                    min="0"
                />
                <br />
                <label className="content-center mx-2 ">
                    PASSWORD :{" "}
                </label>
                <input
                    name="password"
                    placeholder=" password"
                    type="password"
                    className="w-4/5 p-1 ml-24 rounded-xl"
                    min="0"
                />
                <button className="w-4/5 p-4 ml-24 bg-green-600 rounded-lg " type='submit' > Sign in</button>
            </form>
        </div>
    )
}

export default LoginForm