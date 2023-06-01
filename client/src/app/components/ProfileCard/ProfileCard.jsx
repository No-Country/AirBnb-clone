import autoprefixer from 'autoprefixer';
import Image from 'next/image';
import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai'

const casas = [
  {
    lugar: "París, Francia",
    fecha: "2023-06-10",
    precio: "$250",
    estrellas: "4.5",
    image: [
      "https://a0.muscache.com/im/pictures/2fd67464-8da1-419d-b8f7-dcb840a1be0a.jpg",
      "https://a0.muscache.com/im/pictures/6d517f4c-1380-42c6-80a6-dd69dbd7aba6.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/721e87f3-19c6-409c-96f4-c4127125d812.jpg",
      "https://a0.muscache.com/im/pictures/ca9725e8-03fc-46b3-9379-c9b8833b0673.jpg?im_w=720"
    ],
    anfitrion: {
      image: "https://a0.muscache.com/im/pictures/user/f9edeea8-4f4b-44e3-bf06-981455370526.jpg?im_w=240",
      name: "Jean Dupont"
    }
  },
  {
    lugar: "Nueva York, Estados Unidos",
    fecha: "05 al 10 de jul.",
    precio: "$180",
    estrellas: "4",
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/80e077fa-8985-483e-9946-8c088fbd8e78.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/279e191e-784b-405f-9cfd-7ed9ce4010cf.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/a1cf4c19-a156-439d-bb5c-8d0e13544ed0.jpeg?im_w=720"
    ],
    anfitrion: {
      image: "https://a0.muscache.com/im/pictures/user/3952231f-2593-4ef5-b4c4-efce6ee4db2e.jpg?im_w=240",
      name: "Emily Johnson"
    }
  },
  {
    lugar: "Roma, Italia",
    fecha: "2023-08-20",
    precio: "$220",
    estrellas: "5",
    image: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-635437605163910390/original/eaf8887f-410f-41e4-be1b-88c2a74fbfcf.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-635437605163910390/original/427b9c9e-27a1-45ce-9f04-0609eb74cb48.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-635437605163910390/original/e22d9d0e-fa0b-48e1-9d35-ab7c3463b357.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-635437605163910390/original/0db5cffd-7f0d-4e13-bd59-39cb9861cdaa.jpeg?im_w=720"
    ],
    anfitrion: {
      image: "https://a0.muscache.com/im/pictures/user/6f7bc718-b4c6-4c8c-907e-333c93056dae.jpg?im_w=240",
      name: "Giovanni Rossi"
    }
  },
  {
      lugar: "Londres, Reino Unido",
      fecha: "2023-09-15",
      precio: "$180",
      estrellas: "4.5",
      image: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/b325b883-9c3d-4dc4-91c4-ae5b03aa76ff.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/1d456613-b0cc-40d5-9ba3-9e9f83069084.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/8db472a7-802b-46c7-b215-23513ee2e3fe.jpeg?im_w=720"
      ],
      anfitrion: {
        image: "https://a0.muscache.com/im/pictures/user/cf9ea239-eca1-4213-bd63-b3753acd4066.jpg?im_w=240",
        name: "Sophie Brown"
      }
    },
    {
      lugar: "Tokio, Japón",
      fecha: "2023-10-20",
      precio: "$200",
      estrellas: "5",
      image: [
        "https://a0.muscache.com/im/pictures/monet/Select-33747689/original/2903e59d-01f8-4c0d-9d19-e119f0c2d603?im_w=720",
        "https://a0.muscache.com/im/pictures/monet/Select-33747689/original/e9b089e9-5a1a-4135-a597-1166421fc804?im_w=720",
        "https://a0.muscache.com/im/pictures/monet/Select-33747689/original/5cdabe17-b34d-488f-9da1-15769fb93e9f?im_w=720",
        "https://a0.muscache.com/im/pictures/monet/Select-33747689/original/22e7f8b0-607d-46ba-bfbd-cf2f05bfd3b7?im_w=720"
      ],
      anfitrion: {
        image: "https://a0.muscache.com/im/pictures/user/f7c1bf25-b192-4568-9c13-133c374b2b1f.jpg?im_w=240",
        name: "Kenji Nakamura"
      }
    },
    {
      lugar: "Sídney, Australia",
      fecha: "2023-11-12",
      precio: "$220",
      estrellas: "4",
      image: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-576599054777073307/original/53e611cc-b827-4cec-850e-c1db1274de43.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-576599054777073307/original/93d7e82d-3bf8-4236-87b2-27369f4ccbd4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-576599054777073307/original/4bea3adf-5d39-4ec6-9358-a4381ec4dbe8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-576599054777073307/original/24c189dd-7193-4006-919b-f828588282a4.jpeg?im_w=720"
      ],
      anfitrion: {
        image: "https://a0.muscache.com/im/pictures/user/4f4e7207-0be9-4498-9299-24092613f0e8.jpg?im_w=240",
        name: "Olivia Anderson"
      }
    },
    {
      lugar: "Barcelona, España",
      fecha: "2023-12-05",
      precio: "$190",
      estrellas: "4.5",
      image: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/d037ba05-1237-4b00-9092-8fa71bada83e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/56fa0968-e9de-4a21-83b3-ad80ed33a3a1.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/88cec5b3-01ab-4d26-8597-bd3b1fc36e01.jpeg?im_w=720"
      ],
      anfitrion: {
        image: "https://a0.muscache.com/im/pictures/user/67e7e986-e02c-45f7-a613-fa66017bf425.jpg?im_w=240",
        name: "Carlos García"
      }
    },
    {
      lugar: "Río de Janeiro, Brasil",
      fecha: "2024-01-18",
      precio: "$150",
      estrellas: "4",
      image: [
        "https://a0.muscache.com/im/pictures/airflow/Hosting-629652398313106706/original/0620e8a0-0b5a-4991-b5e2-5277b8cc6a13.jpg?im_w=720",
        "hhttps://a0.muscache.com/im/pictures/airflow/Hosting-629652398313106706/original/3c255531-f32c-40af-9d06-a997f53d25a9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/airflow/Hosting-629652398313106706/original/d86c074b-ca6c-4418-90b9-91f27ed64914.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/airflow/Hosting-629652398313106706/original/fe227dc2-52b8-46e0-88e0-a6b08960d7da.jpg?im_w=720"
      ],
      anfitrion: {
        image: "https://a0.muscache.com/im/pictures/user/82130759-fbba-4012-ac60-51d5b0e4801e.jpg?im_w=240",
        name: "Isabela Oliveira"
      }
    }
];

const user = {
  email: 'ejemplo@gmail.com',
  firstName: 'Isa',
  lastName: 'Rodriguez',
  role: 'user',
  status: 'active',
  picture: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
  favorites: casas,
  placesForRent: [],
  placesRented: []
}


function ProfileCard() {
  return (
    <div className='flex flex-col md:flex-row md:gap-[100px]'>
      {/* "Aside" */}
      <div className='w-full md:min-w-[342px] md:max-w-[342px]'>

        {/* Card */}
        <div className='flex flex-col items-center w-full gap-[10px] bxShadowPrimary rounded-3xl py-6'>
          <div className='w-[104px] h-[104px}'>
            <Image src={user.picture} alt="" className='rounded-full w-full h-[104px] object-cover' width={104} height={104} />
          </div>
          <div className='text-center'>
            <h3 className='text-[31px] font-semibold'>
              {user.firstName}
            </h3>
            <p className='text-[14px] font-medium text-primary'>
              {user.role === 'user' && 'Huésped'}
            </p>
          </div>
        </div>

        {/* Informacion confirmada & Verificacion de Identidad */}
        <div className='flex flex-col w-full gap-[10px] mt-[20px] md:p-[20px] md:border-[1px] md:border-[#ddd] md:rounded-3xl'>
          {/* Informacion confirmada */}
          <div className='border-b-[1px] border-[#ddd] py-[20px]'>
            <div>
              <h2 className='font-medium text-[22px]'>Información confirmada de {user.firstName}</h2>
            </div>
            <div className='flex gap-[10px] items-center w-full
            mt-[10px]'>
              <span>
                <AiOutlineCheck className='w-[24px] h-[24px] text-primary' />
              </span>
              <span className='font-light'>
                Dirección de correo electrónico
              </span>
            </div>
          </div>

          {/* Verificacion de Identidad */}
          <div className='border-b-[1px] border-[#ddd] py-[20px] md:border-b-0'>
            <div>
              <h2 className='font-medium text-[22px]'>Verificacion de Identidad</h2>
              <p className='font-light'>Agrega el distintivo de verificación de identidad para que el resto de la comunidad sepa que eres quien dices ser.</p>
            </div>
            <button className='w-[173px] h-[48px] border-[1px] border-[#c1c1c1] rounded-lg font-medium mt-[15px] text-[#c1c1c1]' disabled>
              Obtén la insignia
            </button>
          </div>
        </div>
      </div>

      {/* "Main" */}
      <div className='w-full md:pr-[30px]'>
        <div className='border-b-[1px] border-[#ddd] py-[20px]'>
          <h1 className='text-[24px] font-bold md:text-[32px]'>Información sobre mí</h1>
          <p><b>Nombre:</b> {user.firstName}</p>
          <p><b>Apellido:</b> {user.lastName}</p>
          <p><b>Correo:</b> {user.email}</p>
          <p><b>Estado de la cuenta:</b> {user.status === 'active' && 'Activa'}</p>
        </div>
        <div className='py-[20px]'>
          <h1 className='text-[22px] font-medium'>Mis Favoritos</h1>
          <div className='flex gap-[20px] overflow-x-scroll scrollbar-hide mt-[20px] min-w-[300px] md:grid md:grid-cols-auto-fit md:max-w-[800px] md:overflow-x-visible'>
            {user.favorites.map((casa, index) => (
              <div key={index}>
                <div className='min-w-[100px] md:min-w-auto'>
                  <img src={casa.image[0]} alt="" className='rounded-lg object-cover w-full h-[100px]'/>
                </div>
                <div>
                  <p>{casa.lugar}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;