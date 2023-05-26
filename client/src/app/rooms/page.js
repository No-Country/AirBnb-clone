"use client"
import Gallery from "../components/HouseCardDetail/Gallery";
import Title from "../components/HouseCardDetail/Title";

const Rooms = () => {
    return (
        <div className="flex flex-col items-center px-[50px] pt-44">
            <div className="">
                <Title />
                <Gallery />
            </div>
        </div>
    )
}

const casa = [
    {
        lugar: "París, Francia",
        fecha: "2023-06-10",
        precio: "$250",
        estrellas: "4.5",
        image: [
            "https://a0.muscache.com/im/pictures/2fd67464-8da1-419d-b8f7-dcb840a1be0a.jpg",
            "https://a0.muscache.com/im/pictures/6d517f4c-1380-42c6-80a6-dd69dbd7aba6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/721e87f3-19c6-409c-96f4-c4127125d812.jpg",
            "https://a0.muscache.com/im/pictures/ca9725e8-03fc-46b3-9379-c9b8833b0673.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ca9725e8-03fc-46b3-9379-c9b8833b0673.jpg?im_w=720"
        ],
        anfitrion: {
            image: "https://a0.muscache.com/im/pictures/user/f9edeea8-4f4b-44e3-bf06-981455370526.jpg?im_w=240",
            name: "Jean Dupont"
        }
    }
];

export default Rooms