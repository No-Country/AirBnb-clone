"use client"
import React,{useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Cards from "../app/components/HouseCard/Cards/Cards"
import AnfitrionModal from "./components/AnfitrionModal/AnfitrionModal";
export default function page(params) {

    const [modalOpen, setModalOpen] = useState(false);

     const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };

    return(
        <>
            <Navbar/>
            <Hero/>
            <Cards handleOpenModal={handleOpenModal}/>
            <AnfitrionModal isOpen={modalOpen} onClose={handleCloseModal} />
        </>
    )
    
}