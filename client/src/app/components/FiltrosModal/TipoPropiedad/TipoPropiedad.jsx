import React from 'react';
import Image from 'next/image';
import casa from './casa.jpg'
import apartamento from './apartamento.jpg'
import huespedes from './huespedes.jpg'

const TipoPropiedad = () => {
  return (
    <div className='border-b-[1px] border-[#dddddd]'>
      <h2 className='text-[22px] font-semibold'>Tipo de propiedad</h2>
      <div className='grid grid-cols-auto-fit gap-[20px] p-[20px]'>


        <div>
          <input 
            type="checkbox" 
            name="tipo" 
            id="casa" 
            className='tp-checked hidden'
            value="casa"
          />
          <label 
            htmlFor="casa" 
            className='p-4 flex flex-col justify-between w-full h-[150px] rounded-lg border-[1px] border-[#dddddd] hover:border-black hover:cursor-pointer transition-all'
          >
            <span>
              <Image src={casa} alt="" className='w-[32px] h-[32px]' />
            </span>
            <span className='font-semibold md:text-[22px]'>
              Casa
            </span>
          </label>
        </div>

        <div>
          <input type="checkbox" name="tipo" id="apartamento" className='tp-checked hidden' value="apartamento" />  
          <label 
            htmlFor="apartamento" 
            className='p-4 flex flex-col justify-between w-full h-[150px] rounded-lg border-[1px] border-[#dddddd] hover:border-black hover:cursor-pointer transition-all'
          >
            <span>
              <Image src={apartamento} alt="" className='w-[32px] h-[32px]' />
            </span>
            <span className='font-semibold md:text-[22px]'>
              Apartamento
            </span>
          </label>
        </div>


        <div>
          <input type="checkbox" name="tipo" id="huespedes" className='tp-checked hidden' value="huespedes" />
          <label 
            htmlFor="huespedes" 
            className='p-4 flex flex-col justify-between w-full h-[150px] rounded-lg border-[1px] border-[#dddddd] hover:border-black hover:cursor-pointer transition-all'
          >
            <span>
              <Image src={huespedes} alt="" className='w-[32px] h-[32px]' />
            </span>
            <span className='font-semibold md:text-[22px]'>
              Huespedes
            </span>
          </label>
        </div>


      </div>
    </div>
  );
};

export {TipoPropiedad};