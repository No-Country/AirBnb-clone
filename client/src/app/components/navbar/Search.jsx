"use client"

import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className='border-[1px] bg-white w-full md:w-3/4 lg:w-2/4 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='text-sm font-bold px-6 flex-1'>
                        Destino
                        <div className='text-sm text-[#717171] flex gap-3'>
                            Buscar destinos
                        </div>
                    </div>
                    <div className='hidden sm:block text-sm font-bold px-6 border-x-[1px] flex-1'>
                        Fechas
                        <div className='text-sm pr-2 text-gray-600 flex gap-3'>
                            Introduce fechas
                        </div>
                    </div>
                    <div className='hidden sm:block text-sm font-bold px-6 flex-1'>
                        Viajeros
                        <div className='text-sm pr-2 text-gray-600 flex gap-3'>
                            Añade viajeros
                        </div>
                    </div>
                    <div className='text-sm pl-6 pr-3 text-gray-600 flex items-center gap-3'>
                        <div className='p-2 bg-rose-500 rounded-full text-white'>
                            <BiSearch size={35} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search