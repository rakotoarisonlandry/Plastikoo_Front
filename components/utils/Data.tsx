import { FaRecycle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa"; // Ajout de FaTrash pour l'icône poubelle
import { MdHouse } from "react-icons/md"; // Importation de l'icône pour la construction
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
    icon: <FaTrash  />,
    titre: "Collecte",
    description:
    "Plastikôo collecte les déchets plastiques via des machines automatiques, installées dans des zones d’affluences. Les utilisateurs reçoivent des récompenses pour chaque bouteille déposée, encourageant ainsi le geste de recyclage et la protection de l’environnement.",
    bgColor: "bg-orange",
  },
  {
    arrow: <FaArrowRightLong />,
    icon: <FaRecycle />,
    titre: "Recyclage",
    description:
      "Plastikôo s’engage à transformer ces déchets plastiques en matériaux de construction utiles. Une fois collectés, ces déchets sont triés et nettoyés pour éliminer les impuretés. Ils sont ensuite fondus, moulés en briques et autres matériaux de construction écologiques, prêts à être utilisés dans divers projets.",
    bgColor: "bg-primary",
  },
  {
    arrow: <FaArrowRightLong />,
    icon: <MdHouse className="text-400xl" />, 
    titre: "Construction",
    description:
      "Les briques en plastique recyclé sont utilisées pour construire des infrastructures modernes, solides et éco-responsables, adaptées à des projets comme les Tiny Houses, Libraries et Classrooms.",
    bgColor: "bg-secondary",
  },
];