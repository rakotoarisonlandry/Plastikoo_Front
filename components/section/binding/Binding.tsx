"use client";
import React, { useState } from "react";
import { Reveal } from "../../utils/Reveal";

type Props = {};

function Binding({}: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(1);

  const items = [
    {
      id: 1,
      title: "01",
      content: "Valorisation des déchets plastiques",
      description:
        "En valorisant ces déchets, nous les transformons en matériaux de construction durables, contribuant ainsi à la préservation de l'environnement.",
    },
    {
      id: 2,
      title: "02",
      content: "Création d’emplois",
      description:
        "Nous favorisons la création d'emplois locaux en mettant en place des opportunités rémunératrices pour les personnes qui contribuent à la collecte et au triage des déchets plastiques via notre machine.",
    },
    {
      id: 3,
      title: "03",
      content: "Sensibilisation et éducation",
      description:
        "Nous nous engageons à informer et à éduquer la communauté sur les impacts négatifs des déchets plastiques et sur l'importance du recyclage pour un environnement plus propre.",
    },
    {
      id: 4,
      title: "04",
      content: "Promouvoir l’économie circulaire",
      description:
        "En réutilisant les déchets plastiques comme ressource, nous éliminons les déchets et réduisons la dépendance aux matières premières en créant des produits durables et innovants.",
    },
    {
      id: 5,
      title: "05",
      content: "Innovation continue",
      description:
        "Nous investissons continuellement dans la recherche et le développement de solutions innovantes pour améliorer les méthodes de recyclage et trouver de nouvelles applications pour les déchets plastiques, en utilisant des méthodes plus efficaces et durables.",
    },
    {
      id: 6,
      title: "06",
      content: "Reduction de l’empreinte carbone",
      description:
        "En réduisant les émissions de gaz à effet de serre liées à la production de plastiques neufs, nous contribuons à la lutte contre le changement climatique.",
    },
  ];

  const handleCardClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="p-20 bg-gray-100">
      <Reveal>
        <h1 className="text-center text-3xl font-bold mb-8" id="binding">
          Nos engagements
        </h1>
      </Reveal>
      <div className="grid grid-cols-1 w-[64%] h-[64%] ml-[20%] mt-auto md:grid-cols-2 lg:grid-cols-3 gap-1">
        {items.map((item) => (
          <Reveal key={item.id}>
            <div
              onClick={() => handleCardClick(item.id)}
              className={`p-5 flex flex-col justify-start items-start cursor-pointer transition-all duration-300 ${
                selectedId === item.id
                  ? `bg-green-500 text-white rounded-xl transform ${
                      item.id === 1
                        ? "translate-x-[-15px] translate-y-[-15px]"
                        : item.id === 2
                        ? "translate-x-0 translate-y-[-15px]"
                        : item.id === 3
                        ? "translate-x-[15px] translate-y-[-15px]"
                        : item.id === 4
                        ? "translate-x-[-15px] translate-y-[15px]"
                        : item.id === 5
                        ? "translate-x-0 translate-y-[15px]"
                        : "translate-x-[15px] translate-y-[15px]"
                    }`
                  : "bg-blue-500 text-white"
              } ${
                item.id === 1
                  ? "rounded-tl-xl"
                  : item.id === 3
                  ? "rounded-tr-xl"
                  : item.id === 4
                  ? "rounded-bl-xl"
                  : item.id === 6
                  ? "rounded-br-xl"
                  : ""
              }`}
              style={{ height: "230px", width: "250px" }}
            >
              <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
              <p className="text-[15px] font-bold">{item.content}</p>
              <p className="text-[12px] line-clamp-5  mt-2">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Binding;
