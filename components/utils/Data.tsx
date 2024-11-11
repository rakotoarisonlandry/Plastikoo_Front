import { FaRecycle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineConstruction } from "react-icons/md";
import { ReactNode } from "react";
import { SiOpencollective } from "react-icons/si";
import { FaPeopleRoof } from "react-icons/fa6";
export interface ProcessItem {
  arrow: ReactNode;
  icon: ReactNode;
  titre: string;
  description: string;
  bgColor: string;
  text_color: string;
}

export const process: ProcessItem[] = [
  {
    arrow: <FaArrowRightLong />,
    icon: <FaPeopleRoof />,
    titre: "Sensibiliser",
    description:
      "Plastikôo s'engage à sensibiliser et éduquer la population sur l'importance de protéger l’environnement et les gestes de recyclages. Grâce à notre plateforme digitale, chacun peut apprendre des gestes éco-responsables, accéder à des contenus éducatifs, et suivre ses progrès pour un avenir plus propre.",
    bgColor: "bg-dark",
    text_color: "text-white",
  },
  {
    arrow: <FaArrowRightLong />,
    icon: <SiOpencollective />,
    titre: "Collecter",
    description:
      "Plastikôo collecte les déchets plastiques via des machines automatisées fixes et mobiles, installées dans des zones d’affluence et utilisées dans les quartiers. Ces machines offriront des récompenses aux utilisateurs pour chaque dépôt de plastique, encourageant ainsi un comportement plus responsable",
    bgColor: "bg-secondary",
    text_color: "text-white",
  },
  {
    arrow: <FaArrowRightLong />,
    icon: <FaRecycle />,
    titre: "Transformer",
    bgColor: "bg-primary",
    text_color: "text-white",
    description:
      "Plastikôo transforme ces déchets plastiques en matériaux de construction utiles. Une fois collectés, ces déchets sont triés et nettoyés pour éliminerTransformerles impuretés. Ils sont ensuite fondus, moulés en briques et autres matériaux de construction écologiques, prêts à être utilisés.",
  },
  {
    arrow: <FaArrowRightLong />,
    icon: <MdOutlineConstruction />,
    titre: "Construire ",
    text_color: "text-white",
    bgColor: "bg-orange",
    description:
      "Les briques en plastique recyclé sont utilisées pour construire des infrastructures modernes, solides et éco-responsables. Elles offrent un design attractif, sont personnalisables, faciles à assembler, et adaptées à divers projets comme des Tiny houses, library et classroom.",
  },
];