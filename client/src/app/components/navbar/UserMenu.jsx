"use client"

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useState } from 'react'
import Link from 'next/link'

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <div className=''>
            <div className='flex items-center gap-3' onClick={handleOpenModal}>
                <div className='hidden md:block text-sm text-white py-3 px-4 select-none'>
                    Modo anfitrión
                </div>
                <div className='flex items-center gap-3 p-4 md:py-1 md:px-2 bg-white border-[1px] border-[#A1A1A1] rounded-full cursor-pointer hover:shadow-md transition'>
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && <div className='
            flex
            flex-col
            items-left
            bg-white
            absolute
            overflow-hidden
            right-20
            top-16
            p-3
            pe-8
            gap-2
            rounded-lg
            shadow-md
            '>
                <Link href="/login">Registrarse o iniciar sesión</Link>
                <span className='border-b pb-2'>Pon tu espacio en Compi</span>
                <span>Ayuda</span>
            </div>}
        </div>
    )
}

export default UserMenu