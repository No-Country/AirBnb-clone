"use client"

import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Login/Register";
import { useState } from "react";

export default function Page() {
  const [register, setRegister] = useState(false)

  return(
      <>
        <Navbar />
        <main className="min-h-screen bg-[url('/images/home.png')] bg-fixed bg-cover bg-no-repeat bg-center">
          <div className='pt-[100px] md:pt-[185px] h-full w-full px-[20px]'>
            {
              !register ?
              <Login setRegister={setRegister} /> :
              <Register setRegister={setRegister} />
            }
          </div>
        </main>
      </>
  )
    
}