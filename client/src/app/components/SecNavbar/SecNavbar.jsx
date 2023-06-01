import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLeft } from 'react-icons/ai'
import SecUserMenu from './SecUserMenu';

import logoPrimary from './logoPrimary.png'
import compiPrimary from './compiPrimary.png'

function SecNavbar() {
  return (
    <nav className='h-[64px] md:h-[80px] bg-white border-b-[1px] border-[#ddd] fixed top-0 left-0 w-full'>
      <div className='h-full w-full flex justify-between items-center px-[20px] md:px-[100px]'>
        <Link href="/" className='md:hidden'>
          <AiOutlineLeft />
        </Link>
        <Link href="/" className='sm:hidden'>
          <Image src={logoPrimary} alt='' width={40} height={40} />
        </Link>

        {/* Desktop */}
        <Link href="/" className='hidden sm:block'>
          <Image src={compiPrimary} alt='' width={100} />
        </Link>
        <div className='hidden md:block'>
          <SecUserMenu />
        </div>
      </div>
    </nav>
  );
};

export default SecNavbar;