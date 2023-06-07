"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Cards from "../app/components/HouseCard/Cards/Cards";
import AnfitrionModal from "./components/AnfitrionModal/AnfitrionModal";
import Categorias from "./components/Categorias";
import { FiltrosModal } from "./components/FiltrosModal/FiltrosModal";
import { Login } from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import allActions from "@/store/actions";

export default function Page() {
  const dispatch = useDispatch();
  const [modalFiltros, setModalFiltros] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const accommodations = useSelector((state)=>state.accommodation.accommodations.accommodation)

  useEffect(() => {
    dispatch(allActions.accommodationsActions.getAccommodations());
    dispatch(allActions.authActions.refreshToken());
  }, [dispatch]);

  const handleOpenModal = () => {
    event.stopPropagation();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    event.stopPropagation();
    setModalOpen(false);
  };

  return (
    <>
        <nav>
          <Navbar />
        </nav>
        <header>
          <Hero />
        </header>
        <main>
          {modalFiltros && (
            <FiltrosModal
              modalFiltros={modalFiltros}
              setModalFiltros={setModalFiltros}
            />
          )}
          <h1 className="font-bold text-[24px] px-[80px] mt-[20px] md:text-[30px]">
            Descubre Lugares
          </h1>
          <Categorias
            modalFiltros={modalFiltros}
            setModalFiltros={setModalFiltros}
          />
          <Cards handleOpenModal={handleOpenModal} accommodations={accommodations}/>
        </main>
        <AnfitrionModal isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
}
