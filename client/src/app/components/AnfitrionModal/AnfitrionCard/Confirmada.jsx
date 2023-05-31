import React from "react";
import {AiOutlineCheck} from "react-icons/ai"

export default function Confirmada(params) {

  return (
    <div className="m-7 border-y py-2 border-[#dddddd]">
      <p className="text-2xl text-stone-700 font-semibold my-3">Información confirmada de Nombre</p>
      <div className="flex items-center gap-1 my-3">
      <AiOutlineCheck className=" text-gray-800 text-2xl" />
        <p className="text-gray-800">Identidad</p>
      </div>
      <div className="flex items-center gap-1 my-3">
      <AiOutlineCheck className=" text-gray-800 text-2xl" />
        <p className="text-gray-800 ">Dirección de correo electrónico</p>
      </div>
      <div className="flex items-center gap-1 my-3">
        <AiOutlineCheck className=" text-gray-800 text-2xl" />
        <p className="text-gray-800">Número de teléfono</p>
      </div>
    </div>
  )

}