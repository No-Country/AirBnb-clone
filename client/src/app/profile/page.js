import React from 'react';
import SecNavbar from '../components/SecNavbar/SecNavbar';
import ProfileCard from '../components/ProfileCard/ProfileCard';

function Page() {
  return (
    <>
      <SecNavbar />
      <main className='pt-[80px] md:pt-[100px] px-7 md:px-[100px]'>
        <ProfileCard />
      </main>
    </>
  );
};

export default Page;