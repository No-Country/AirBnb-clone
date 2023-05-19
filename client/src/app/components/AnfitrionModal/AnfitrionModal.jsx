import React from "react";


export default function AnfitrionModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    
    return(
        <div className="bg-black opacity-90 p-96">
            <div className="bg-white w-24 h-24"> 
                NOMBRE APELLIDO
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
    
}

function Modalstyle(params) {
        
}