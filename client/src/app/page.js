import Filtros from '@/app/components/Filtros'
import Cards from './components/HouseCard/Cards/Cards'

export default function Home() {
  return (
    <main className="">
      <h1 className="font-bold text-[30px] px-[80px] mt-[50px]">Descubre Lugares</h1>
      <Filtros />
      <Cards />
    </main>
  )
}
