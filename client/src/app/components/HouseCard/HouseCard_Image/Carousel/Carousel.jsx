"use client";
import React, { useEffect } from "react"
import { useState } from "react"
import {MdNavigateNext, MdNavigateBefore} from "react-icons/md"
import {RxDotFilled} from "react-icons/rx"

export default function Carousel({ children: slides}) {
    const [mauseOver, setMauseOver] = useState(false)
    const [curr, setCurr] = useState(0)
    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    
    
    function handledMouseEnter(params) {
        setMauseOver(true)
    }
    function handledMouseLeave(){
        setMauseOver(false)
    }
    function crossClass() {
        return `p-1 text-3xl hover:w-8 hover:h-8 transition-all rounded-full shadow bg-white/80 text-gray-800 hover:bg-white  ${mauseOver ? "" : "hidden"}`
    }
    
    return(
        <div onMouseEnter={()=>handledMouseEnter()} onMouseLeave={()=>handledMouseLeave()} className="overflow-hidden relative rounded-xl">
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4 ">
                <MdNavigateBefore onClick={prev} className={crossClass()} />
                <MdNavigateNext onClick={next} className={crossClass()} />
            </div>
            <div className="absolute bottom-1 flex left-[40%] z-30 text-xl">
                {slides.map((e,i)=>
                {
                    return curr == i ? <RxDotFilled key={i} className="text-white"/> :
                    <RxDotFilled className="text-stone-400" key={i}/>
                }
                )}
            </div>
        </div>
    )
}