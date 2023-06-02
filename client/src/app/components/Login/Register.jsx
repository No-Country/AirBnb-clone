"use client"

import allActions from '@/store/actions';
import React from 'react';
import {BsArrowLeft} from "react-icons/bs";
import { useDispatch } from 'react-redux';

const Register = ({setRegister}) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    const {email,password,repassword,nombre} = Object.fromEntries(new window.FormData(e.target))
    console.log(email,password,repassword)
    dispatch(allActions.authActions.register(email,password,repassword))
    console.log(`Hola ${nombre} te has registrado exitosamente con el correo ${email} y contraseña ${password}`);
  }

  const handleLogin = () => {
    setRegister(false)
  }

  return (
    <div className='bg-white border-[1px] border-[#757575] rounded-xl md:max-w-[566px] md:mx-auto pb-[20px] fade-in'>

      <div className='h-[64px] w-full flex justify-center items-center border-b-[1px] border-[#dddddd] relative'>
        <button 
          onClick={handleLogin}
          className='absolute top-[23px] left-[20px] hover:cursor-pointer'
        >
          <BsArrowLeft className='h-[20px] w-[20px]'/>
        </button>
        <p className='font-bold'>Registro</p>
      </div>

      <form 
        onSubmit={handleSubmit}
        className='p-[20px]'
      >
        <h3 className='text-[20px] md:text-[24px] font-semibold'>Gracias por preferir Compi</h3>

        <div className='relative border-[1px] border-[#c1c1c1] rounded-t-md  mt-[20px] h-[56px]'>
          <p className='absolute text-[12px] left-[15px] top-[5px] text-[#757575]'>Ingresa tu nombre:</p>
          <input 
            type="text" 
            name='nombre'
            className='w-full rounded-t-md h-full pt-[15px] pl-[15px]'
          />
        </div>

        <div className='relative border-[1px] border-[#c1c1c1] translate-y-[-1px] h-[56px]'>
          <p className='absolute text-[12px] left-[15px] top-[5px] text-[#757575]'>Ingresa tu primer apellido:</p>
          <input 
            type="text" 
            name='apellido'
            className='w-full h-full pt-[15px] pl-[15px]'
          />
        </div>

        <div className='relative border-[1px] border-[#c1c1c1] translate-y-[-2px] h-[56px]'>
          <p className='absolute text-[12px] left-[15px] top-[5px] text-[#757575]'>Ingresa tu correo electrónico:</p>
          <input 
            type="email" 
            name='email'
            className='w-full h-full pt-[15px] pl-[15px]'
          />
        </div>

        <div className='relative border-[1px] border-[#c1c1c1] h-[56px] translate-y-[-3px]'>
          <p className='absolute text-[12px] left-[15px] top-[5px] text-[#757575]'>Ingresa tu contraseña:</p>
          <input 
            type="password" 
            name='password'
            className='w-full h-full pt-[15px] pl-[15px]' 
          />
        </div>

        <div className='relative border-[1px] border-[#c1c1c1] rounded-b-md h-[56px] translate-y-[-4px]'>
          <p className='absolute text-[12px] left-[15px] top-[5px] text-[#757575]'>Repite tu contraseña:</p>
          <input 
            type="password" 
            name='repassword'
            className='w-full rounded-b-md h-full pt-[15px] pl-[15px]' 
          />
        </div>

        <button 
          className='w-full mt-[20px] bg-[#f43f5e] h-[48px] rounded-md font-semibold text-white hover:cursor-pointer'
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export {Register};