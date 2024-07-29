"use client";
import React from "react";
import { FaRecycle } from "react-icons/fa";
import { GiWaterRecycling } from "react-icons/gi";
import { TbTransformFilled } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { Reveal } from "../../utils/Reveal";
import { RevealRight } from "../../utils/RevealRight";
import { RevealLeft } from "../../utils/RevealLeft";
type Props = {};

const process = [
  {
    arrow: <FaArrowRightLong />,
    icon: <GiWaterRecycling />,
    titre: "Recolte",
    description:
      "Plastikôo met en place une collecte des déchets plastiques auprès des particuliers, des ménages, des associations ou des entreprises. Nous encourageons activement la communauté à participer à notre initiative en nous fournissant leurs déchets plastiques, contribuant ainsi à la préservation de notre environnement tout en soutenant l'économie locale.",
    bgColor: "bg-orange",
  },
  {
    arrow: <FaArrowRightLong />,
    icon: <FaRecycle />,
    titre: "Recyclage",
    description:
      "Après les matières recyclés, Plastikôo donne une seconde vie aux déchets plastiques en les convertissant en matériaux de construction écologiques, tels que des briques, des tables et des chaises etc. Cette initiative ne se contente pas de réduire la pollution plastique, mais elle offre également des solutions durables et abordables pour les projets de construction à Madagascar.",
    bgColor: "bg-primary",
  },
  {
    arrow: <FaArrowRightLong />,
    icon: <TbTransformFilled />,
    titre: "Transformation",
    bgColor: "bg-secondary",
    description:
      "  Une fois ces déchets plastiques collectés, ils sont soigneusement triés et nettoyés pour éliminer les impuretés. Ce processus de tri et de nettoyage est essentiel pour assurer la qualité des matériaux recyclés et passent ensuite par des procédés de recyclage avancés, transformant les déchets en matières premières prêtes à être réutilisées.",
  },
];

const Task = (props: Props) => {
  return (
    <div className="p-14 bg-gray-100">
      <div className="text-center mb-8">
        <Reveal>
          <h1 className="text-[40px] font-bold text-primary mt-7">
            Ce que nous faisons
          </h1>
        </Reveal>
        <Reveal>
          <p className="mt-4 pr-56 pt-4 pb-6  pl-56 text-dark font-semibold">
            Plastikôo transforme les déchets plastiques en solutions durables.
            Nous collectons et recyclons les plastiques pour concevoir et
            fabriquer des matériaux de construction innovants et écologiques,
            contribuant ainsi à réduire la pollution plastique de la ville
            d’Antananarivo.
          </p>
        </Reveal>
      </div>

      <div className="flex justify-center items-center space-x-6 ">
        <div>
          <RevealLeft>
            <Image
              src="/dechet.png"
              width="400"
              height="400"
              alt="dechetIllustration"
            />
          </RevealLeft>
        </div>
        <div>
          <Reveal>
            <FaArrowRightLong className="text-[40px] text-primary" />
          </Reveal>
        </div>
        <div>
          <RevealRight>
            <Image src="/brique.png" width="400" height="400" alt="Recyclage" />
          </RevealRight>
        </div>
      </div>
      <div className="grid grid-cols-1 w-[80%] ml-[10%] mt-auto md:grid-cols-3 gap-5">
        {process.map((item, index) => (
          // <Reveal>

          <Reveal key={index}>
            <div
              className={`${item.bgColor} hover:translate-y-3   text-white  transition duration-300 rounded-lg shadow-lg p-6 flex flex-col`}
            >
              <div className="text-6xl text-start text-dark mb-4">
                {item.icon}
              </div>
              <h2 className="text-[30px] font-bold mb-2">{item.titre}</h2>
              <p className="opacity-80 line-clamp-5   mb-4 text-[15px] text-start">
                {item.description}
              </p>
              <button className="bg-white flex space-x-4 text-center justify-center   items-center text-secondary p-2.5  rounded-xl hover:scale-x-105 hover:scale-y-105 transition duration-300">
                <div>En savoir plus</div>
                <div>{item.arrow}</div>
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Task;
