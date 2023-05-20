import React from 'react'
import Image from 'next/image'
/* Assets */
import habitaciones from '@assets/habitaciones.jpg'
import piscinas from '@assets/piscinas.jpg'
import campo from '@assets/campo.jpg'
import cabanas from '@assets/cabanas.jpg'
import playa from '@assets/playa.jpg'
import populares from '@assets/populares.jpg'
import barcos from '@assets/barcos.jpg'
import tropical from '@assets/tropical.jpg'
import lagos from '@assets/lagos.jpg'
import yurtas from '@assets/yurtas.jpg'
import filter from '@assets/filter.svg'

const Category = ({hfor, src, title}) => {
  return (
    <label htmlFor={hfor} className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
      <input type="radio" id={hfor} name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
      <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
          <Image src={src} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
          <p className="text-[12px] text-[#717171] f-hoverparagraph">{title}</p>
          <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
      </div>
    </label>
  )
}

const Filtros = () => {
  return (
    <div className="h-[78px] w-full flex overflow-hidden relative border-b-[1px]">
      {/* Boton filtro mobile */}
      <div className='flex flex-col justify-center align-center ml-[10px] md:hidden pr-[10px] border-r-[1px]'>
        <button className='w-[50px] h-[50px] rounded-full border-solid border-[1px]'>
          <Image src={filter} alt='' width={18} height={18} className='m-auto' />
        </button>
      </div>

      {/* Categorias */}
      <div className="h-full w-full bg-white flex justify-between md:justify-evenly px-[15px] overflow-scroll scrollbar-hide gap-[20px]">
        <Category src={habitaciones} title={"Habitaciones"} hfor={"habitaciones"} />
        <Category src={piscinas} title={"Piscinas"} hfor={"piscinas"} />
        <Category src={campo} title={"Campo"} hfor={"campo"} />
        <Category src={cabanas} title={"Cabañas"} hfor={"cabanas"} />
        <Category src={playa} title={"Playa"} hfor={"playa"} />
        <Category src={populares} title={"Populares"} hfor={"populares"} />
        <Category src={barcos} title={"Barcos"} hfor={"barcos"} />
        <Category src={tropical} title={"Tropical"} hfor={"tropical"} />
        <Category src={lagos} title={"Lagos"} hfor={"lagos"} />
        <Category src={yurtas} title={"Yurtas"} hfor={"yurtas"} />
      </div>

      {/* Boton Filtro Desktop */}
      <div className="hidden md:flex h-full w-[115px] bg-white md:justify-center md:items-center">
        <button className='bg-white w-[90px] h-[48px] rounded-[15px] border-solid border-[1px] border-[#dddddd] hover:border-[#000] transition-all'>
          <span className='flex justify-center gap-[8px]'>
            <Image src={filter} width={14} height={14} alt="" />
            <span className="text-[12px] font-bold">Filtros</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Filtros
