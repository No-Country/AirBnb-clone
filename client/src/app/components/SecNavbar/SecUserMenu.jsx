"use client"

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'

const SecUserMenu = () => {
    return (
        <div className=''>
            <div className='flex items-center'>
                <div className='flex items-center gap-3 p-4 md:py-1 md:px-2 bg-white border-[1px] border-[#A1A1A1] rounded-full cursor-pointer hover:shadow-md transition'>
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecUserMenu