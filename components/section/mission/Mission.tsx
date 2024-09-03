import Image from "next/image";
import React from "react";
import { Reveal } from "../../utils/Reveal";

type Props = {};

function Mission({}: Props) {
  return (
    <div className="bg-linear items-center justify-center text-center overflow-hidden h-1/2 p-24 sm:p-12 md:p-16">
      <Image
        src="/logoVert.png"
        alt="background"
        width="350"
        height="350"
        className="absolute mt-[-60px] left-[-120px] sm:mt-[-40px] sm:left-[-80px] md:mt-[-50px] md:left-[-100px]"
      />
      <Image
        src="/logobleu.png"
        alt="background"
        width="350"
        height="350"
        className="absolute mt-[-60px] right-[-120px] sm:mt-[-40px] sm:right-[-80px] md:mt-[-50px] md:right-[-100px]"
      />
      <Reveal>
        <h1 className="text-4xl font-bold text-white mb-5 sm:text-3xl md:text-4xl">
          Notre mission
        </h1>
      </Reveal>
      <Reveal>
        <p className="text-white mb-6 pr-56 pl-56 text-[16px] font-semibold sm:pr-10 sm:pl-10 md:pr-24 md:pl-24">
          Notre mission est de réduire la pollution environnementale en
          transformant les déchets plastiques en matériaux de construction de
          haute qualité. Nous vous offrons des produits durables et abordables,
          conçus pour bâtir un avenir plus propre et écologiques.
        </p>
      </Reveal>
      <Reveal>
        <button className="bg-white rounded-lg text-primary px-20 py-2 hover:scale-x-105 hover:scale-y-105 transition duration-300 sm:px-16 md:px-18">
          Découvrir
        </button>
      </Reveal>
    </div>
  );
}

export default Mission;
