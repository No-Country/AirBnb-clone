"use client"

import React from "react";
import HouseCardImage from "../HouseCard_Image/HouseCardImage"
import { AiTwotoneStar } from "react-icons/ai"
import { useRouter } from "next/navigation";

const HouseCard = ({lugar,fecha,precio,estrellas,image,handleOpenModal,anfitrion,hostImage}) => {

const router = useRouter()

    return (
        <div className="pr-3 pl-3 pb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4.5 cursor-pointer" >
            <HouseCardImage handleOpenModal={handleOpenModal} image={image} alfitrionImage={hostImage}/>

            <div className="m-1" onClick={() => router.push("/rooms")}>
                <div className="flex justify-between mt-3 ">
                    <p className="font-semibold">{lugar}</p>
                    <div className="flex font-normal gap-1">
                        <AiTwotoneStar className="mt-1" />
                        <p className="text-black ">{estrellas}</p>
                    </div>
                </div>
                <p className="text-stone-500">Quedate en el alojamiento de {anfitrion}</p>
                <p className="text-stone-500" >{fecha}</p>
                <p className="font-semibold mt-1">{precio} USD<spam className="font-normal"> noche</spam></p>
            </div>
        </div>
    )
}
export default HouseCard;