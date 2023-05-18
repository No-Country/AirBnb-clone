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

const Filtros = () => {
  return (
    <div className="h-[78px] bg-red-500 w-full flex overflow-hidden relative">
      {/* Categorias */}
      <div className="h-full w-full bg-white flex justify-between md:justify-evenly px-[15px] overflow-scroll scrollbar-hide gap-[20px]">
        <label htmlFor="habitaciones" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="habitaciones" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={habitaciones} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Habitaciones</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>

        <label htmlFor="piscinas" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="piscinas" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={piscinas} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Piscinas</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>

        <label htmlFor="campo" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="campo" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={campo} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Campo</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>

        <label htmlFor="cabanas" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="cabanas" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={cabanas} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Cabañas</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>

        <label htmlFor="playa" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="playa" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={playa} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Playa</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>

        <label htmlFor="populares" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="populares" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={populares} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Populares</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>

        <label htmlFor="barcos" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="barcos" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={barcos} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Barcos</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>

        <label htmlFor="tropical" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="tropical" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={tropical} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Tropical</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>

        <label htmlFor="lagos" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="lagos" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={lagos} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Lagos</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>

        <label htmlFor="yurtas" className="h-[56px] bg-white min-w-max my-auto hover:cursor-pointer f-hoverlabel">
          <input type="radio" id="yurtas" name="category" className="absolute w-[1px] h-[1px] top-0 left-0" />
          <div className='flex flex-col w-full h-full justify-evenly items-center relative'>
              <Image src={yurtas} width={24} height={24} alt='' className='opacity-[0.61] f-hoverimg'/>
              <p className="text-[12px] text-[#717171] f-hoverparagraph">Yurtas</p>
              <div className='f-after absolute w-full h-[2px] bg-white bottom-[-3px]'></div>
          </div>
        </label>
      </div>

      {/* Boton Filtro */}
      <div className="hidden md:flex h-full w-[115px] bg-white md:justify-center md:items-center">
        <button className='bg-white w-[90px] h-[48px] rounded-[15px] border-solid border-[1px] border-[#dddddd]'>
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
