import { usePrice } from './usePrice';
import {BsCurrencyDollar} from 'react-icons/bs'

const RangoPrecios = () => {
  const { currentPrice: minPrice, changePrice: changeMinPrice } = usePrice(10)
  const { currentPrice: maxPrice, changePrice: changeMaxPrice } = usePrice(1000)

  return (
    <div className='border-b-[1px] border-[#dddddd] mt-3'>
      <h2 className='text-[22px] font-semibold'>Rango de precios</h2>

      <div className='flex items-center gap-[15px] mt-2 py-[20px] md:px-[30px]'>
        <label htmlFor='minPrice' className='flex flex-1 border-[1px] border-[#c1c1c1] h-[52px] rounded-lg relative'>

          <span>
            <BsCurrencyDollar className='absolute left-1 top-[24px]' />
          </span>

          <p className='absolute text-[11px] left-2 top-1 text-[#818181]'>Mínimo</p>

          <input type="number" name='minPrice' id='minPrice' value={minPrice} onChange={changeMinPrice} className='rp-input w-full rounded-lg pt-3 pl-5' />
        </label>

        <div className='h-[1px] w-[16px] bg-[#c1c1c1]'>
          {/* separador */}
        </div>

        <label htmlFor='maxPrice' className='flex flex-1 border-[1px] border-[#c1c1c1] h-[52px] rounded-lg relative'>

          <span>
            <BsCurrencyDollar className='absolute left-1 top-[24px]' />
          </span>

          <p className='absolute text-[11px] left-2 top-1 text-[#818181]'>Mínimo</p>

          <input type="number" name='maxPrice' id='maxPrice' value={maxPrice} onChange={changeMaxPrice} className='rp-input w-full rounded-lg pt-3 pl-5' />
        </label>
      </div>
    </div>
  );
};

export {RangoPrecios};