"use client"

import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Cards from "../app/components/HouseCard/Cards/Cards"
import AnfitrionModal from "./components/AnfitrionModal/AnfitrionModal";
import Categorias from "./components/Categorias";
import { FiltrosModal } from "./components/FiltrosModal/FiltrosModal";

export default function Page() {
  const [modalFiltros, setModalFiltros] = useState(false)

  return(
      <>
        <Navbar/>
        <header>
          <Hero/>
        </header>
        <main>
          {modalFiltros && <FiltrosModal modalFiltros={modalFiltros} setModalFiltros={setModalFiltros} />}
          <h1 className="font-bold text-[24px] px-[80px] mt-[20px] md:text-[30px]">Descubre Lugares</h1>
          <Categorias modalFiltros={modalFiltros} setModalFiltros={setModalFiltros} />
          <Cards/>
        </main>
        <AnfitrionModal/>
      </>
  )
    
}