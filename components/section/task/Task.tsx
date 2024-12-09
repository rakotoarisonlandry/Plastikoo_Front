"use client";

import React, { useState } from "react";
import { process } from "../../utils/Data";
import Image from "next/image";
import { Reveal } from "../../utils/Reveal";
import { FaDownload } from "react-icons/fa";
import { ReactNode } from "react";
import { PiVideoFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { AutoComplete } from "antd";
export interface ProcessItem {
  arrow: ReactNode;
  icon: ReactNode;
  titre: string;
  description: string;
  bgColor: string;
  text_color: string;
  image_icon: string;
}

const ProcessCard = ({ item }: { item: ProcessItem }) => (
  <div
    className={`${item.bgColor} lg:hover:z-50 hover:translate-y-3 text-white transition duration-300 rounded-2xl shadow-lg px-8 py-4 flex flex-col lg:items-start items-center`}
  >
    <div className={`mb-4 ${item.text_color} text-center`}>
      {/* Taille des icônes ajustée pour différents écrans */}
      <div className="text-5xl md:text-6xl lg:text-7xl">
        {item.icon}
      </div>
    </div>
    <h2 className="lg:text-[30px] text-[15px]  font-black mb-2 text-center" style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 40 }} >
      {item.titre}
    </h2>
    <p className="opacity-80 hidden lg:block space-x-5 line-clamp-6 mb-4 font-semibold text-[15px] text-start">
      {item.description}
    </p>
  </div>
);
// const ProcessCard = ({ item }: { item: ProcessItem }) => (
//   <div
//     className={`${item.bgColor} lg:hover:z-50 hover:translate-y-3 text-white transition duration-300 rounded-2xl shadow-lg px-8 py-4 flex flex-col lg:items-start items-center`}
//   >
//     <div className={`mb-4 ${item.text_color} text-center`}>
//       {/* Taille des icônes ajustée pour différents écrans */}
//       <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
//         {item.icon}
//       </div>
//     </div>
//     <h2 className="lg:text-[30px] text-[15px] font-bold mb-2 text-center">
//       {item.titre}
//     </h2>
//     <p className="opacity-80 hidden lg:block space-x-5 line-clamp-6 mb-4 font-semibold text-[15px] lg:text-start">
//       {item.description}
//     </p>
//   </div>
// );

// const ProcessCard = ({ item }: { item: ProcessItem }) => (
//   <div
//     className={`${item.bgColor} lg:hover:z-50 hover:translate-y-3 text-white transition duration-300 rounded-2xl shadow-lg px-8 py-4 flex flex-col`}
//   >
//     <div className={`text-xl  text-start ${item.text_color} mb-4`}>
//       {item.icon}
//     </div>
//     <h2 className="lg:text-[30px] text-[20px] font-bold mb-2">{item.titre}</h2>
//     <p className="opacity-80 hidden lg:block space-x-5 line-clamp-6 mb-4 font-semibold text-[15px] text-start">
//       {item.description}
//     </p>
//   </div>
// );

// const handleCardClick = () => {
//   if (window.innerWidth < 768) { // Vérifie si l'écran est petit (moins de 768px)
//     setIsOpen(!isOpen); // Bascule l'état
//   }
// };
// const [isOpen, setIsOpen] = useState(false);
// const ProcessCard = ({ item }: { item: ProcessItem }) => (
//   <div
//   onClick={handleCardClick}
//   className={`${item.bgColor} lg:hover:z-50 hover:translate-y-3 text-white transition duration-300 rounded-2xl shadow-lg px-8 py-4 flex flex-col lg:items-start items-center`}
// >
//   <div className={`mb-4 ${item.text_color} text-center`}>
//     <div className="text-[15px] md:text-xl lg:text-7xl">
//       {item.icon}
//     </div>
//   </div>
//   <h2 className="lg:text-[30px] text-[15px] font-bold mb-2 text-center">
//     {item.titre}
//   </h2>
  
//   {/* Affichage conditionnel de la description */}
//   <p className={`opacity-80 hidden lg:block space-x-5 line-clamp-6 mb-4 font-semibold text-[15px] lg:text-start ${isOpen ? 'block' : 'hidden'}`}>
//     {item.description}
//   </p>

//   {/* Afficher la description en plein écran pour les petits écrans */}
//   {isOpen && (
//     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
//       <div className="bg-white p-4 rounded-lg max-w-md w-full">
//         <h2 className="text-xl font-bold">{item.titre}</h2>
//         <p className="mt-2">{item.description}</p>
//         <button onClick={() => setIsOpen(false)} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">Fermer</button>
//       </div>
//     </div>
//   )}
// </div>
// );


const Task = () => (
  <div className="p-9 md:p-14 bg-dark-100">
    <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start lg:space-x-8 w-full">
      <div className="text-left px-4 md:px-12 lg:px-24 mb-8 w-full lg:w-1/2">
        <h1 className="ml-[0%] text-[30px] md:text-[40px] text-primary mt-7" style={{ fontFamily: 'Montserrat', fontWeight: 900 }}>
          Ce que nous faisons
        </h1>
        <Reveal>
          <p className="mt-4 pb-6 text-[14px] text-dark"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            PLASTIKÔO collecte les déchets plastiques et les transforme en
            matériaux de construction pour bâtir des infrastructures durables.
          </p>
        </Reveal>
        <div className="block">
          <Link href="https://expo.dev/artifacts/eas/2Sa7W3tYkDAh8nTdJLzjBh.apk">
            <button className="bg-primary mb-2 flex items-center py-2 justify-start text-white px-4 md:px-8 rounded-lg hover:scale-x-105 hover:scale-y-105 transition duration-300" style={{ fontFamily: 'Montserrat', fontWeight: "bold", fontSize: '14px' }}>
              <div className="text-[15px] md:text-[14px]">
                Télécharger l&apos;application
              </div>
              <FaDownload className="text-white ml-2" />
            </button>
          </Link>
          <button className="bg-secondary flex items-center py-2 justify-between text-white px-6 md:px-8 rounded-lg hover:scale-x-105 hover:scale-y-105 transition duration-300" style={{ fontFamily: 'Montserrat', fontWeight: "bold", fontSize: '14px' }}>
            <div className="text-[15px] md:text-[14px]">
              Vidéo de présentation
            </div>
            <PiVideoFill className="text-white ml-2" />
          </button>
        </div>
      </div>
      <Image
        src="/notre-solution.png"
        width={578}
        height={498}
        // className=" lg:w-[50%] mr-0 lg:mr-12"
        alt="dechet"
      />
    </div>

    {/* Laptop */}
    <div className="hidden lg:flex flex-col items-center">
      <div className="justify-start">
        {/* <div className="my-4"> */}
        <h1 className="text-primary my-6 ml-[0%] md:ml-[8%] text-[30px] md:text-[40px] font-black" style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 40 }}>
          Nos solutions
        </h1>
        {/* </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:w-[80%] lg:ml-[8%] mt-auto gap-4 lg:gap-9">
          {process.map((item, index) => (
            <ProcessCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>

    {/* Mobile and tablette */}
    <div className="flex lg:hidden flex-col items-center">
      <div className="text-center lg:text-start">
        <h1 className="text-primary my-6 ml-[0%] md:ml-[8%] text-[30px] md:text-[40px] font-black" style={{ fontFamily: 'Montserrat', fontWeight: 900 }}>
          Nos solutions
        </h1>
      </div>
    
      {/* Grille adaptative */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-9">
        {process.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} lg:hover:z-50 hover:translate-y-3 text-white transition duration-300 rounded-2xl shadow-lg px-8 py-4 flex flex-col lg:items-start items-center`}
          >
            {/* Icône */}
            <div className={`mb-4 ${item.text_color} text-center lg:text-start`}>
              <div className="text-4xl md:text-5xl lg:text-6xl">{item.icon}</div>
            </div>
    
            {/* Titre */}
            <h2
              className="text-[20px] md:text-[25px] lg:text-[30px] font-black mb-2 text-center lg:text-start"
              style={{ fontFamily: 'Montserrat', fontWeight: 900 }}
            >
              {item.titre}
            </h2>
    
            {/* Description */}
            <p className="opacity-80 hidden md:block text-[14px] md:text-[15px] font-semibold text-center lg:text-start">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
);

const Step = ({
  imageSrc,
  imageAlt,
  description,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  description: string;
  className?: string;
}) => (
  <div className={`flex flex-col items-center ${className}`}>
    <Reveal>
      <Image
        src={imageSrc}
        width="150" // Réduire la taille de l'image (ajuste selon tes besoins)
        height="100"
        alt={imageAlt}
        className="mb-2" // Optionnel : Ajoute une marge en bas de l'image
      />
    </Reveal>
    <p className="text-[16px] text-center text-black font-semibold mt-1">
      {description}
    </p>
  </div>
);

const Arrow = () => (
  <Reveal>
    <FaArrowRightLong className="text-[40px] text-primary" />
  </Reveal>
);

export default Task;