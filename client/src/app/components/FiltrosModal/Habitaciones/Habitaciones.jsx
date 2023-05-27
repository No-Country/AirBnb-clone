import React from 'react';

const Habitaciones = () => {
  return (
    <div className='mt-3 pb-3'>
      <h2 className='text-[22px] font-semibold'>Habitaciones y camas</h2>

      <p className='my-3'>Habitaciones</p>
      <div className='flex gap-4 overflow-scroll scrollbar-hide'>
        <input type="radio" name='habitaciones' className='hab-input hidden' id='h-cualquiera' value="cualquiera" />
        <label htmlFor="h-cualquiera" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>Cualquiera</span>
        </label>

        <input type="radio" name='habitaciones' className='hab-input hidden' id='h-1' value="1"/>
        <label htmlFor="h-1" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>1</span>
        </label>

        <input type="radio" name='habitaciones' className='hab-input hidden' id='h-2' value="2"/>
        <label htmlFor="h-2" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>2</span>
        </label>

        <input type="radio" name='habitaciones' className='hab-input hidden' id='h-3' value="3"/>
        <label htmlFor="h-3" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>3</span>
        </label>

        <input type="radio" name='habitaciones' className='hab-input hidden' id='h-4' value="4"/>
        <label htmlFor="h-4" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>4</span>
        </label>

        <input type="radio" name='habitaciones' className='hab-input hidden' id='h-5' value="5"/>
        <label htmlFor="h-5" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>5</span>
        </label>

        <input type="radio" name='habitaciones' className='hab-input hidden' id='h-6' value="6"/>
        <label htmlFor="h-6" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>6</span>
        </label>

        <input type="radio" name='habitaciones' className='hab-input hidden' id='h-7' value="7"/>
        <label htmlFor="h-7" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>7</span>
        </label>

        <input type="radio" name='habitaciones' className='hab-input hidden' id='h-8+' value="8+"/>
        <label htmlFor="h-8+" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>8+</span>
        </label>
      </div>

      <p className='my-3'>Camas</p>
      <div className='flex gap-4 overflow-scroll scrollbar-hide'>
        <input type="radio" name='camas' className='hab-input hidden' id='c-cualquiera' value="cualquiera" />
        <label htmlFor="c-cualquiera" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>Cualquiera</span>
        </label>

        <input type="radio" name='camas' className='hab-input hidden' id='c-1' value="1"/>
        <label htmlFor="c-1" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>1</span>
        </label>

        <input type="radio" name='camas' className='hab-input hidden' id='c-2' value="2"/>
        <label htmlFor="c-2" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>2</span>
        </label>

        <input type="radio" name='camas' className='hab-input hidden' id='c-3' value="3"/>
        <label htmlFor="c-3" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>3</span>
        </label>

        <input type="radio" name='camas' className='hab-input hidden' id='c-4' value="4"/>
        <label htmlFor="c-4" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>4</span>
        </label>

        <input type="radio" name='camas' className='hab-input hidden' id='c-5' value="5"/>
        <label htmlFor="c-5" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>5</span>
        </label>

        <input type="radio" name='camas' className='hab-input hidden' id='c-6' value="6"/>
        <label htmlFor="c-6" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>6</span>
        </label>

        <input type="radio" name='camas' className='hab-input hidden' id='c-7' value="7"/>
        <label htmlFor="c-7" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>7</span>
        </label>

        <input type="radio" name='camas' className='hab-input hidden' id='c-8+' value="8+"/>
        <label htmlFor="c-8+" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>8+</span>
        </label>
      </div>

      <p className='my-3'>Baños</p>
      <div className='flex gap-4 overflow-scroll scrollbar-hide'>
        <input type="radio" name='banos' className='hab-input hidden' id='b-cualquiera' value="cualquiera" />
        <label htmlFor="b-cualquiera" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>Cualquiera</span>
        </label>

        <input type="radio" name='banos' className='hab-input hidden' id='b-1' value="1"/>
        <label htmlFor="b-1" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>1</span>
        </label>

        <input type="radio" name='banos' className='hab-input hidden' id='b-2' value="2"/>
        <label htmlFor="b-2" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>2</span>
        </label>

        <input type="radio" name='banos' className='hab-input hidden' id='b-3' value="3"/>
        <label htmlFor="b-3" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>3</span>
        </label>

        <input type="radio" name='banos' className='hab-input hidden' id='b-4' value="4"/>
        <label htmlFor="b-4" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>4</span>
        </label>

        <input type="radio" name='banos' className='hab-input hidden' id='b-5' value="5"/>
        <label htmlFor="b-5" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>5</span>
        </label>

        <input type="radio" name='banos' className='hab-input hidden' id='b-6' value="6"/>
        <label htmlFor="b-6" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>6</span>
        </label>

        <input type="radio" name='banos' className='hab-input hidden' id='b-7' value="7"/>
        <label htmlFor="b-7" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>7</span>
        </label>

        <input type="radio" name='banos' className='hab-input hidden' id='b-8+' value="8+"/>
        <label htmlFor="b-8+" className='border-[1px] border-[#dddddd] inline-block px-[20px] py-[10px] rounded-full transition-all hover:border-black hover:cursor-pointer'>
          <span className='transition-all'>8+</span>
        </label>
      </div>
    </div>
  );
};

export {Habitaciones};