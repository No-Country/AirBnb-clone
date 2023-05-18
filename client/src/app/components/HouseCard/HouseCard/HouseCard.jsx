import React from "react";
import HouseCardImage from "../HouseCard_Image/HouseCardImage"
import {AiTwotoneStar} from "react-icons/ai"

const HouseCard = (props) => {
    return (
        <div className="pr-3 pl-3 pb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4.5 cursor-pointer">
            <HouseCardImage image={props.image} alfitrionImage={props.anfitrion.image}/>
            <div className="m-1">
                <div className="flex justify-between mt-3 ">
                    <p className="font-semibold">{props.lugar}</p>
                    <div className="flex font-normal gap-1">
                    <AiTwotoneStar className="mt-1"/>
                    <p className="text-black ">{props.estrellas}</p>
                    </div>
                </div>
                <p className="text-stone-500">Quedate en el alojamiento de {props.anfitrion.name}</p>
                <p className="text-stone-500" >{props.fecha}</p>
                <p className="font-semibold mt-1">{props.precio} USD<spam className="font-normal"> noche</spam></p>
            </div> 
        </div>
    )
}
export default HouseCard;