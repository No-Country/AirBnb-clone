import React, { useState, useEffect } from 'react';
import Image from "next/image";
const Calificacion = (props) => {
    const texts = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis at asperiores doloremque quas error quia explicabo accusamus iste porro ipsam, aliquam quidem, repellat ut sit? Sint nulla voluptatum ipsum.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, libero similique? Incidunt consectetur, provident iste ex qui aspernatur sed expedita fugiat maxime pariatur, a exercitationem quas inventore officiis! Distinctio, quod.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vero. Deserunt praesentium eum, voluptates porro illum modi distinctio mollitia animi a. Quis in aliquam harum ducimus saepe cumque eveniet odit?',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === props.reseñas.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const renderTexts = props.reseñas.map((text, index) => (
        <div
            key={index}
            className={`transition-opacity duration-500 ease-in ${currentIndex === index ? 'opacity-100' : 'opacity-0 hidden'}`} style={{ height: `${100 / texts.length}%` }}>
            <div className='flex gap-3 items-center '>

                <div className="rounded-full w-10 h-10 align-middle overflow-hidden z-50">
                    <Image
                        src={text.imagen}
                        alt="Imagen del anfitrion ${i}"
                        width={200}
                        height={200}
                    />
                </div>
                <p>{text.nombre}</p>
            </div>
            <p>{text.text}</p>
        </div>
    ));

    return <div className="p-2 max-w-xs mx-auto">{renderTexts}</div>;
};

export default Calificacion;
