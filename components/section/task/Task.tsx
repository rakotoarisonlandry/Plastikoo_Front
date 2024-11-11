"use client";

import React from "react";
import { process } from "../../utils/Data";
import Image from "next/image";
import { Reveal } from "../../utils/Reveal";
import { FaDownload } from "react-icons/fa";
import { ReactNode } from "react";
import { PiVideoFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
export interface ProcessItem {
  arrow: ReactNode;
  icon: ReactNode;
  titre: string;
  description: string;
  bgColor: string;
  text_color: string;
}

const ProcessCard = ({ item }: { item: ProcessItem }) => (
  <div
    className={`${item.bgColor} lg:hover:z-50 hover:translate-y-3 text-white transition duration-300 rounded-2xl shadow-lg px-8 py-4 flex flex-col`}
  >
    <div className={`text-6xl text-start ${item.text_color} mb-4`}>
      {item.icon}
    </div>
    <h2 className="lg:text-[30px] text-[20px] font-bold mb-2">{item.titre}</h2>
    <p className="opacity-80 hidden lg:block space-x-5 line-clamp-6 mb-4 font-semibold text-[15px] text-start">
      {item.description}
    </p>
  </div>
);

const Task = () => (
  <div className="p-14 bg-gray-100">
    <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start lg:space-x-8 w-full">
      <div className="text-left px-4 md:px-12 lg:px-24 mb-8 w-full lg:w-1/2">
        <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-primary mt-7">
          Ce que nous faisons
        </h1>
        <Reveal>
          <p className="mt-4 pb-6 text-[14px] md:text-[16px] text-dark font-semibold">
            PLASTIKÔO collecte les déchets plastiques et les transforme en
            matériaux de construction pour bâtir des infrastructures durables.
          </p>
        </Reveal>
        <div className="block">
          <button className="bg-secondary mb-2 flex items-center py-2 justify-start text-white px-6 md:px-8 rounded-lg hover:scale-x-105 hover:scale-y-105 transition duration-300">
            <div className="text-[15px] md:text-[14px]">
              Vidéo de présentation
            </div>
            <PiVideoFill className="text-white ml-2" />
          </button>
          <Link href="https://expo.dev/accounts/landrybrigea/projects/plastikoo_mobile/builds/b9a34e51-7f9b-4261-974e-5479d931e35c">
            <button className="bg-orange flex items-center py-2 justify-start text-white px-6 md:px-8 rounded-lg hover:scale-x-105 hover:scale-y-105 transition duration-300">
              <div className="text-[15px] md:text-[14px]">
                Telecharger l'APK Plastikôo
              </div>
              <FaDownload className="text-white ml-2" />
            </button>
          </Link>
        </div>
      </div>
      <Image
        src="/notre-solution.png"
        width="400"
        height="400"
        className=" lg:w-[50%] mr-0 lg:mr-12"
        alt="dechet"
      />
    </div>

    <div className="justify-start">
      {/* <div className="my-4"> */}
      <h1 className="text-primary my-6 ml-[8%] sm:text-4xl lg:text-5xl font-bold text-[28px]">
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
