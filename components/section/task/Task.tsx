"use client";
import React from "react";
import { process } from "../../utils/Data";
import Image from "next/image";
import { Reveal } from "../../utils/Reveal";
import { RevealRight } from "../../utils/RevealRight";
import { RevealLeft } from "../../utils/RevealLeft";
import { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export interface ProcessItem {
  arrow: ReactNode;
  icon: ReactNode;
  titre: string;
  description: string;
  bgColor: string;
}

const ProcessCard = ({ item }: { item: ProcessItem }) => (
  <Reveal>
    <div
      className={`${item.bgColor} hover:translate-y-3 text-white transition duration-300 rounded-lg shadow-lg p-6 flex flex-col`}
    >
      <div className="text-6xl text-start text-dark mb-4">{item.icon}</div>
      <h2 className="text-[30px] font-bold mb-2">{item.titre}</h2>
      <p className="opacity-80 line-clamp-5 mb-4 text-[15px] text-start">
        {item.description}
      </p>
      <button className="bg-white flex space-x-4 text-center justify-center items-center text-secondary p-2.5 rounded-xl hover:scale-x-105 hover:scale-y-105 transition duration-300">
        <div>En savoir plus</div>
        <div>{item.arrow}</div>
      </button>
    </div>
  </Reveal>
);

const Task = () => (
  <div className="p-14 bg-gray-100">
    <div className="text-center mb-8">
      <Reveal>
        <h1 className="text-[40px] font-bold text-primary mt-7">
          Ce que nous faisons
        </h1>
      </Reveal>
      <Reveal>
        <p className="mt-4 pr-56 pt-4 pb-6 text-center pl-56 text-dark font-semibold">
        Plastikôo collecte les déchets plastiques à l'aide de machines automatisées,
        transformant ces matériaux en solutions innovantes pour construire des infrastructures écologiques et durables.
        </p>
      </Reveal>
    </div>

    <div className="flex justify-center items-center space-x-6 mb-10">
  <Step
    imageSrc="/dechet.png"
    imageAlt="dechetIllustration"
    description="Les dechets plastiques"
    className="flex flex-col items-center" // Ajoute Flexbox
  />
  <Arrow />
  <Step
  imageSrc="/Machine.png"
  imageAlt="Recyclage"
  description="sont recoltés à partir de notre machine"
  className="flex flex-col items-center -mt-9" // Ajoute une marge négative
/>
<Arrow />

  <Step
    imageSrc="/brique.png"
    imageAlt="Recyclage"
    description="Puis recyclés et transformés en briques"
    className="flex flex-col items-center" // Ajoute Flexbox
  />
  <Arrow />
  <Step
    imageSrc="/house.png"
    imageAlt="Recyclage"
    description="Pour construire des infrastructures"
    className="flex flex-col items-center" // Ajoute Flexbox
  />
</div>


    <div className="grid grid-cols-1 w-[80%] ml-[10%] mt-auto md:grid-cols-3 gap-5">
      {process.map((item, index) => (
        <ProcessCard key={index} item={item} />
      ))}
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
