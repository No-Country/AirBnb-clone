"use client";
import React from "react";
import Carousel from "../HouseCard_Image/Carousel/Carousel";
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';
import { useRouter } from "next/navigation";
const HouseCardImage = (props) => {
   
    const router = useRouter()

    return (
        <div className="relative cursor-pointer">
  <RiHeart3Fill className="absolute text-3xl top-3 right-3 text-black z-10 opacity-50 pt-0.5 " />
  <RiHeart3Line className="absolute text-3xl top-3 right-3 text-white z-10 pt-0.5" />
  <div onClick={props.handleOpenModal} className="absolute w-10 z-50 bottom-4 left-4 bg-gray-300 transition-all p-1 rounded-full hover:bg-white hover:shadow-sm hover:shadow-white max-w-lg max-h-10 overflow-hidden">
    <img className="rounded-full " src={props.hostImage} />
  </div>
            <Carousel>
                {
                    props.image.map((s, i) => (
                        <img
                        onClick={() => router.push("/rooms")}
                        key={i}
                        className="lg:min-h-[15rem] xl:min-h-[20.5rem] "
                        src={s}
                        alt={`Picture of the house ${i}`}
                        width={1000}
                        height={1000}
                        />
                        ))
                    }
            </Carousel>
                    </div>
    )
}
export default HouseCardImage;