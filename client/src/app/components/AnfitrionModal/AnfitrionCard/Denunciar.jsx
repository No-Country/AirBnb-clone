import React from "react";
import { MdFlag } from 'react-icons/md';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Denunciar(params) {
    return (
        <div className="flex gap-3 m-7">
            <MdFlag className="text-xl"/>
            <p className="underline font-semibold ">Denunciar este perfil</p>
        </div>
    )
}