import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";
import AnfitrionCard from "./AnfitrionCard/AnfitrionCard";
import Confirmada from "./AnfitrionCard/Confirmada";
import Descripcion from "./AnfitrionCard/Descripcion";
import Denunciar from "./AnfitrionCard/Denunciar";
export default function AnfitrionModal({ isOpen, onClose }) {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])
  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
  }

  const modalContainerStyle = {
    backgroundColor: "white",
    borderRadius: "2xl",
    overflowY: "auto",
    width: "11/12",
    height: "90%",
    maxWidth: "sm",
    scrollbarWidth: "none",
    scrollbarColor: "transparent transparent",
  };

  return (
    <div onClick={closeModal} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl overflow-hidden w-11/12 h-[90%] max-w-sm border" onClick={(e) => e.stopPropagation()} style={modalContainerStyle}>
        <div className="bg-white border-b p-3 sticky top-0">
          <div onClick={closeModal} className=" cursor-pointer inline-block rounded-full p-2 hover:bg-slate-100">
            <FiX className="w-5 h-5 text-black" />
          </div>
        </div>
        <AnfitrionCard />
        <Descripcion/>
        <Confirmada />
        <Denunciar/>
      </div>
    </div>
  );
}
