"use client"

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '@/store/actions'

const UserMenu = () => {
    const dispatch = useDispatch()
    const token = useSelector((state) => state);

    return (
        <div className=''>
            <div className='flex items-center gap-3'>
                {!token?<div 
                className='hidden md:block text-sm text-white py-3 px-4 select-none'>
                    Modo anfitrión
                </div>:null}
                <div className='flex items-center gap-3 p-4 md:py-1 md:px-2 bg-white border-[1px] border-[#A1A1A1] rounded-full cursor-pointer hover:shadow-md transition'>
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMenu