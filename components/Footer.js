import React from 'react'
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

// import Link from "next/link";


function Footer() {
    return (
        <div className="" >
            <footer className="h-16 mt-56 bg-teal-700 ring-4 ring-teal-300 ring-inset">


                <div class="grid grid-cols-7 gap-4 items-center m-7 text-white">
                    <div >©Codepyrate| LTUC - ASAC</div>
                    <div ><AiFillLinkedin /></div>
                    <div ><AiFillFacebook /></div>

                </div>
               



            </footer>



        </div>
    )
}

export default Footer
