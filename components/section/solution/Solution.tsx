import React from "react";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import {
  FaLightbulb,
  FaHandsHelping,
  FaTree,
  FaRecycle,
  FaCogs,
  FaAccessibleIcon,
} from "react-icons/fa";

type Props = {};

const valeurs = [
  {
    title: "Engagement communautaire",
    icon: <FaLightbulb />,
  },
  {
    title: "Responsabilité environnementale",
    icon: <FaHandsHelping />,
  },
  {
    title: "Qualité et Durabilité ",
    icon: <FaTree />,
  },
];

const Valeurs: React.FC<Props> = () => {
  return (
    <div className=" py-10 text-justify lg:text-center bg-white text-black">
      {/* Titre principal */}
      <Reveal>
        <h2 className="text-4xl font-bold text-primary mb-8">Nos valeurs</h2>
      </Reveal>

      {/* Description */}
      <Reveal>
        <p className=" text-[15px] lg:text-lg mb-24 font-bold text-dark  mx-10 md:px-20 lg:px-44">
          Chez Plastikôo, nos valeurs sont au cœur de tout ce que nous faisons.
          Elles reflètent notre engagement envers l'environnement et la
          communauté, orientant chaque étape de notre mission pour un futur plus
          durable.
        </p>
      </Reveal>

      {/* Grille des valeurs */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {valeurs.map((valeur, index) => (
          <RevealLeft key={index}>
            <div className="flex flex-col w-9 items-center">
              <div className="text-primary text-[45px] lg:text-[90px] mb-4">
                {valeur.icon}
              </div>
              <h3 className=" font-bold text-[15px] lg:text-[20px] text-dark">
                {valeur.title}
              </h3>
            </div>
          </RevealLeft>
        ))}
      </div>
    </div>
  );
};

export default Valeurs;
