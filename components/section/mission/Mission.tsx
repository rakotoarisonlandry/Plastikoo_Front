import Image from "next/image";
import React from "react";
import { Reveal } from "../../utils/Reveal";

type Props = {};

function Mission({}: Props) {
  return (
    <div className="bg-linear flex flex-col items-center justify-center text-center overflow-hidden h-auto py-8 sm:p-10 md:p-16 lg:p-24">
      <Reveal>
        <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-5">
          Notre mission
        </h1>
      </Reveal>
      <Reveal>
        <p className="text-white mb-6 text-[15px] px-4 sm:text-[16px] md:text-[18px] font-semibold sm:px-10 md:px-5  lg:px-4">
          Notre mission est de réduire l'impact des déchets plastiques sur
          l'environnement en éduquant et sensibilisant la communauté. Nous
          collectons et transformons ces déchets en matériaux de construction
          innovants pour construire des infrastructures écologiques.
        </p>
      </Reveal>
      <Reveal>
        <button className="bg-white rounded-lg text-primary px-12 sm:px-16 md:px-18 lg:px-20 py-2 hover:scale-105 transition duration-300">
          Découvrir
        </button>
      </Reveal>
    </div>
  );
}

export default Mission;
