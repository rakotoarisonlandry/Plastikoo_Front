import { FaRecycle } from "react-icons/fa";
import { GiWaterRecycling } from "react-icons/gi";
import { TbTransformFilled } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactNode } from "react";

export interface ProcessItem {
  arrow: ReactNode;
  icon: ReactNode;
  titre: string;
  description: string;
  bgColor: string;
}


export const process: ProcessItem[] = [
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
      "Une fois ces déchets plastiques collectés, ils sont soigneusement triés et nettoyés pour éliminer les impuretés. Ce processus de tri et de nettoyage est essentiel pour assurer la qualité des matériaux recyclés et passent ensuite par des procédés de recyclage avancés, transformant les déchets en matières premières prêtes à être réutilisées.",
  },
];
