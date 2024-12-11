import React from "react";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";

import EngagementIcon from '/public/svg/engagement.svg';
import QualiteIcon from '/public/svg/qualite.svg';
import ResponsabiliteIcon from '/public/svg/responsabilite.svg';



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
    // title: "Engagement communautaire",
    // icon: <FaLightbulb />,
    title: (
      <>
        <span>Engagement</span>
        <br />
        <span>communautaire</span>
      </>
    ),
    icon: <EngagementIcon />

  },
  {
    title: (
      <>
        <span>Responsabilité</span>
        <br />
        <span>environnementale</span>
      </>),
    // icon: <FaHandsHelping />,
    icon: <ResponsabiliteIcon />

  },
  {
    title: (
      <>
        <span>Qualité et</span>
        <br />
        <span>Durabilité</span>
      </>
    ),
    // icon: <FaTree />,
    icon: <QualiteIcon />
  },
];

const Valeurs: React.FC<Props> = () => {
  return (
    <div className=" py-10 text-justify lg:text-center bg-white text-black">
      {/* Titre principal */}
      <Reveal>
      <h2 
        className="text-[28px] sm:text-[30px] lg:text-[40px] font-dark font-montserrat text-primary mb-8"
        style={{ fontFamily: 'Montserrat', fontWeight: 900 }}
      >
        Nos valeurs
      </h2>
        {/* <h2 
          className="text-[40px] font-black font-montserrat text-primary mb-8"
          style={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: 40 }}
        >
          Nos valeurs
        </h2> */}
      </Reveal>

      {/* Description */}
      <Reveal>
        <p 
          className="text-[14px] lg:text-lg mb-24 font-bold font-montserrat text-dark mx-10 md:px-20 lg:px-44"
        >
          Chez Plastikôo, nos valeurs sont au cœur de tout ce que nous faisons.
          Elles reflètent notre engagement envers l&apos;environnement et la communauté,
          orientant chaque étape de notre mission pour un futur plus durable.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:px-60 px-6 mx-auto">
        {valeurs.map((valeur, index) => (
          <RevealLeft key={index}>
            <div
              className={`flex flex-col items-center text-center`}
              style={{
                marginLeft: index === 0 ? '0%' : index === 2 ? '-0%' : '0', // Ajuste les marges
              }}
            >
              <div className="text-primary text-[45px] sm:text-[60px] md:text-[80px] lg:text-[90px] mb-4">
                {valeur.icon}
              </div>
              <h3 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-dark">
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
