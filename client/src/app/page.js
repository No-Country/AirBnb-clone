

import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Cards from "../app/components/HouseCard/Cards/Cards"
import AnfitrionModal from "./components/AnfitrionModal/AnfitrionModal";
import Filtros from "./components/Filtros";
export default function page() {

    return(
        <>
          <nav>
           <Navbar/>
          </nav>
          <header>
            <Hero/>
            <h1 className="font-bold text-[24px] px-[80px] mt-[20px] md:text-[30px]">Descubre Lugares</h1>
            <Filtros />
          </header>
          <main>
            <Cards/>
          </main>
          <AnfitrionModal/>
        </>
    )
    
}