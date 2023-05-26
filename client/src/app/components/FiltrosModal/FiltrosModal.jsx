import React, {useEffect, useRef} from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { TipoPropiedad } from './TipoPropiedad/TipoPropiedad';
import { RangoPrecios } from './RangoPrecios/RangoPrecios';
import { Habitaciones } from './Habitaciones/Habitaciones';

const FiltrosModal = ({ modalFiltros, setModalFiltros }) => {
  /* useRef para animacion entrance/exit */
  const animContainer = useRef()
  const closeModal = () => {
    /* setTimeout tiene que tener los mismo ms que la animacion(en global.css) */
    animContainer.current.classList.add('fade-out-bottom')
    setTimeout(() => {
      setModalFiltros(false);
    }, 300)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    console.log(`Has seleccionado la propiedad Tipo ${fields.tipo}, con un rango de precio de ${fields.minPrice} - ${fields.maxPrice}. Con una cantidad de ${fields.habitaciones} habitaciones, ${fields.camas} camas, ${fields.banos} baños.`)
  }

  /* Evitar scroll en el body cuando el modal este abierto */
  useEffect(() => {
    document.body.style.overflow =  "hidden";
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [modalFiltros])

  return (
    <div className='z-[200] w-screen h-screen flex justify-center items-center bg-[#00000080] fixed top-0 left-0 pt-[16px]'>
    <div className='z-[200] w-screen h-screen flex justify-center items-center fixed top-0 left-0 pt-[16px] fade-in-bottom' ref={animContainer}>
      <form className='w-full h-full bg-white rounded-t-lg md:w-[750px] md:h-[680px] overflow-y-scroll scrollbar-hide relative top-0 left-0' onSubmit={handleSubmit}>

        {/* Header */}
        <div className='h-[60px] w-full rounded-t-lg flex bg-white justify-center items-center border-b-[1px] border-[#dddddd] fixed md:w-[750px] z-[210]'>
          <button 
            type='button'
            className='flex justify-center items-center w-[25px] h-[25px] absolute top-[20px] left-[20px] rounded-full hover:bg-[#dddddd] transition-all duration-[300ms]' 
            onClick={closeModal}
          >
            <AiOutlineClose className='w-[20px] h-[20px]' />
          </button>
          <h1 className='text-[#000] text-[18px] font-bold text-center'>Filtros</h1>
        </div>

        {/* Sections */}
        <div className='px-[16px] py-[76px]'>
          <section>
            <TipoPropiedad />
          </section>

          <section>
            <RangoPrecios />
          </section>

          <section>
            <Habitaciones />
          </section>
        </div>

        {/* Footer */}
        <div className='h-[80px] w-full bg-white fixed bottom-0 border-t-[1px] border-[#c1c1c1] md:bottom-[40px] md:w-[750px] md:rounded-b-lg flex justify-between items-center px-[20px]'>
          <input type="reset" value="Quitar todo" className='underline font-semibold'/>

          <button type='submit' className='bg-black w-[150px] h-[50px] text-white rounded-lg'>Mostrar lugares</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export {FiltrosModal};