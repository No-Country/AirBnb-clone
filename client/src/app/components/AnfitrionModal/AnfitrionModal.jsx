import React from "react";
import { FiX } from "react-icons/fi"
import AnfitrionCard from "./AnfitrionCard/AnfitrionCard";
import Confirmada from "./AnfitrionCard/Confirmada";

export default function AnfitrionModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#f0efe9] rounded-2xl overflow-hidden w-11/12 h-[90%] max-w-sm border">
        <div className="bg-[#f0efe9] p-4 cursor-pointer">
          <div className="inline-block rounded-full p-2 hover:bg-white">
            <FiX className="w-5 h-5 text-black" onClick={onClose} />
          </div>
        </div>
          <AnfitrionCard/>
          <div className="m-5">
            <p>Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure, minus corporis nobis, deserunt totam hic obcaecati accusamus vitae accusantium modi libero consequatur sed illo? Odit illum dolorem natus accusamus.</p>
          </div>
          <Confirmada/>
      </div>
    </div>
  )

}

function Modalstyle(params) {

}