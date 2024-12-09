import Image from "next/image";
import React from "react";
import { Reveal } from "../../utils/Reveal";

type Props = {};

function Mission({}: Props) {
  return (
    <>
    <div className="hidden lg:flex flex-col ">
      <div className="bg-linear flex flex-col items-center justify-center text-center overflow-hidden h-auto py-8 sm:p-10 md:p-16 lg:p-24">
        <Reveal>
          <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white mb-5 font-montserrat" style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 40 }}>
            Notre mission
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-white mb-6 text-[15px] px-4 sm:text-[16px] md:text-[18px] font-semibold sm:px-10 md:px-5 lg:px-4 font-montserrat">
            Notre mission est de réduire l&lsquo;impact des déchets plastiques sur
            l&lsquo;environnement<br/> en éduquant et sensibilisant la communauté. Nous
            collectons et transformons<br/> ces déchets en matériaux de construction
            innovants pour construire des <br/>infrastructures écologiques.
          </p>
        </Reveal>
        <Reveal>
          <button className="bg-white rounded-lg text-primary px-12 sm:px-16 md:px-18 lg:px-20 py-2 hover:scale-105 transition duration-300">
            Découvrir
          </button>
        </Reveal>
      </div>
    </div>
    <div className="flex lg:hidden flex-col">
      <div className="bg-linear flex flex-col items-center justify-center text-center overflow-hidden h-auto py-8 sm:p-10 md:p-16 lg:p-24">
        <Reveal>
          <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-black text-white mb-5 font-montserrat" style={{ fontFamily: 'Montserrat', fontWeight: 900 }}>
            Notre mission
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-white mb-6 text-[15px] px-4 sm:text-[16px] md:text-[18px] font-semibold sm:px-10 md:px-5 lg:px-4 font-montserrat">
            Notre mission est de réduire l&lsquo;impact des déchets plastiques sur
            l&lsquo;environnement en éduquant et sensibilisant la communauté. Nous
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
    </div>
    </>
  );
}

export default Mission;
