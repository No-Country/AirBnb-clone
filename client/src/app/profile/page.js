import React from 'react';
import SecNavbar from '../components/SecNavbar/SecNavbar';

function Page() {
  return (
    <>
      <SecNavbar />
      <main className='pt-[64px] md:pt-[80px] h-[20000px]'>
        Hello World
      </main>
    </>
  );
};

export default Page;