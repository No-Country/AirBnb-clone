import React from "react";
import Image from "next/image";
import { GiRoundStar } from "react-icons/gi";

export default function AnfitrionCard(props) {


    return (
        <div className="flex m-4 mt-0 bg-white shadow-2xl py-3 rounded-3xl border border-t-0">
            <div className="w-3/4 flex flex-col justify-center items-center ">
                <div className="rounded-full w-24 h-24 align-middle overflow-hidden">
                    <Image
                        src={props.imagen}
                        alt={props.nombre}
                        width={200}
                        height={200}
                    />
                </div>
                <p className="text-center text-3xl font-bold text-slate-800">
                    {props.nombre}
                </p>
                <p>
                    Anfitrión
                </p>
            </div>
            <div className="w-1/2 p-4">
                <div className="flex flex-col border-b pb-4">
                    <p className="text-gray-800 font-bold text-2xl">{props.evalucaciones}</p>
                    <p className="text-gray-800 text-[0.60rem] font-bold">evaluaciones</p>
                </div>
                <div className="flex flex-col border-b pb-4">
                    <div className="flex items-center gap-1">
                        <p className="text-gray-800 font-bold text-2xl">{props.calificacion}</p>
                        <GiRoundStar className="ml-1" />
                    </div>
                    <p className="text-gray-800 text-[0.60rem] font-bold">Calificación</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-800 font-bold text-2xl">{props.experiencia}</p>
                    <p className="text-gray-800 text-[0.60rem] font-bold">años de experienci..</p>
                </div>
            </div>
        </div>
    )

}