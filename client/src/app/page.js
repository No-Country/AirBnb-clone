import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Cards from "../app/components/HouseCard/Cards/Cards"
import AnfitrionModal from "./components/AnfitrionModal/AnfitrionModal";
export default function page(params) {

    return(
        <>
            <Navbar/>
            <Hero/>
            <Cards/>
            <AnfitrionModal/>
        </>
    )
    
}