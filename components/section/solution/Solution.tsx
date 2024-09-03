import React from "react";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import { FaLightbulb, FaHandsHelping, FaTree, FaRecycle, FaCogs, FaAccessibleIcon } from "react-icons/fa";

type Props = {};

const valeurs = [
  {
    title: "Innovation continue",
    icon: <FaLightbulb />,
  },
  {
    title: "Engagement communautaire",
    icon: <FaHandsHelping />,
  },
  {
    title: "Responsabilité environnementale",
    icon: <FaTree />,
  },
  {
    title: "Economie circulaire",
    icon: <FaRecycle />,
  },
  {
    title: "Qualité et Durabilité",
    icon: <FaCogs />,
  },
  {
    title: "Accessibilité et praticité",
    icon: <FaAccessibleIcon />,
  },
];

const Valeurs: React.FC<Props> = () => {
  return (
    <div className="text-center py-10 bg-white text-black">
      {/* Titre principal */}
      <Reveal>
        <h2 className="text-4xl font-bold text-green-600 mb-4">Nos valeurs</h2>
      </Reveal>

      {/* Description */}
      <Reveal>
        <p className="text-lg mb-8 px-4 md:px-20 lg:px-44">
          Chez Plastikôo, nos valeurs sont au cœur de tout ce que nous faisons.
          Elles reflètent notre engagement envers l'environnement et la
          communauté, orientant chaque étape de notre mission pour un futur plus
          durable.
        </p>
      </Reveal>

      {/* Grille des valeurs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {valeurs.map((valeur, index) => (
          <RevealLeft key={index}>
            <div className="flex flex-col items-center">
              <div className="text-green-600 text-6xl mb-4">{valeur.icon}</div>
              <h3 className="text-xl font-bold text-black">{valeur.title}</h3>
            </div>
          </RevealLeft>
        ))}
      </div>
    </div>
  );
};

export default Valeurs;
