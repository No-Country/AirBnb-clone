"use client"

import logoGoogle from './google.svg'
import React, {useRef} from 'react';
import Image from 'next/image';
import allActions from '@/store/actions';
import { useDispatch } from 'react-redux';

const Login = ({ setRegister }) => {
  const container = useRef();
  const dispatch = useDispatch();

  const handleRegister = () => {
    container.current.classList.add('fade-out')
    /*  */
    setTimeout(() => {
      setRegister(true)
    }, 400)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const {email,password} = Object.fromEntries(new window.FormData(e.target))
    console.log(email,password)
    dispatch(allActions.authActions.login(email,password))
    console.log(`Has iniciado sesión con el correo ${email}`);
  }

  return (
    <div className='bg-white border-[1px] border-[#757575] rounded-xl md:max-w-[566px] md:mx-auto pb-[20px]' ref={container}>

      <div className='h-[64px] w-full flex justify-center items-center border-b-[1px] border-[#dddddd]'>
        <p className='font-bold'>Iniciar sesión o registrarse</p>
      </div>

      <form 
        onSubmit={handleSubmit}
        className='p-[20px]'
      >
        <h3 className='text-[20px] md:text-[24px] font-semibold'>Te damos la bienvenida a Compi</h3>

        <div className='relative border-[1px] border-[#c1c1c1] rounded-t-md  mt-[20px] h-[56px]'>
          <p className='absolute text-[12px] left-[15px] top-[5px] text-[#757575]'>Ingresa tu correo electrónico:</p>
          <input 
            type="email" 
            name='email'
            className='w-full rounded-t-md h-full pt-[15px] pl-[15px]'
          />
        </div>

        <div className='relative border-[1px] border-[#c1c1c1] rounded-b-md h-[56px] translate-y-[-1px]'>
          <p className='absolute text-[12px] left-[15px] top-[5px] text-[#757575]'>Ingresa tu contraseña:</p>
          <input 
            type="password" 
            name='password'
            className='w-full rounded-b-md h-full pt-[15px] pl-[15px]' 
          />
        </div>

        <button 
          className='w-full mt-[20px] bg-[#f43f5e] h-[48px] rounded-md font-semibold text-white hover:cursor-pointer'
        >
          Ingresar
        </button>
      </form>

      <div className='flex w-full gap-[8px] px-[20px] items-center'>
        <div className='w-[100px] h-[1px] bg-[#dddddd] flex-1'>
        </div>
        <p className='text-[12px]'>o</p>
        <div className='w-[100px] h-[1px] bg-[#dddddd] flex-1'>
        </div>
      </div>


      <div className='px-[20px]'>
        <button 
            className='w-full mt-[20px] bg-white h-[48px] rounded-md font-semibold text-black border-[1px] border-black hover:cursor-pointer'
            onClick={handleRegister}
          >
            Registrarse
        </button>
      </div>

      <div className='px-[20px]'>
        <button 
            className='w-full mt-[20px] bg-white h-[48px] rounded-md font-semibold text-black border-[1px] border-black hover:cursor-pointer relative'
            onClick={handleRegister}
          >
            <Image 
              src={logoGoogle} 
              alt="Google Logo"
              width={20}
              height={20}
              className='absolute top-[14px] left-[14px] md:left-[25px]'
            />
            <span>
              Continúa con Google
            </span>
        </button>
      </div>
    </div>
  );
};

export {Login};