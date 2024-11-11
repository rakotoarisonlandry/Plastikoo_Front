"use client";
import React, { useState } from "react";
import { Reveal } from "../../utils/Reveal";

type Props = {};

function Binding({}: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

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
      content: "Création d'emplois",
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
      content: "Promouvoir l'économie circulaire",
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
      content: "Reduction de l'empreinte carbone",
      description:
        "En réduisant les émissions de gaz à effet de serre liées à la production de plastiques neufs, nous contribuons à la lutte contre le changement climatique.",
    },
  ];

  const handleCardClick = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="lg:p-20 px-6 bg-gray-100">
      <Reveal>
        <h1
          className="text-center text-3xl font-bold mb-8 lg:mt-0 mt-10"
          id="binding"
        >
          Nos engagements
        </h1>
      </Reveal>
      <div className="grid grid-cols-2 w-[100%]  lg:w-[64%] lg:h-[64%] lg:ml-[20%] mt-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Reveal key={item.id}>
            <div
              onClick={() => handleCardClick(item.id)}
              className={`p-7 w-[180px] h-[180px] lg:w-[250px] lg:h-[230px] lg:flex lg:flex-col lg:justify-start lg:items-start cursor-pointer transition-all duration-300 ${
                selectedId === item.id
                  ? `bg-green-500 text-white  rounded-xl transform ${
                      item.id === 1
                        ? "translate-x-0 translate-y-[-15px] sm:translate-x-[5px] sm:translate-y-[5px] md:translate-x-[-10px] lg:translate-x-[-15px] lg:translate-y-[-15px]  md:translate-y-[-15px]"
                        : item.id === 2
                        ? "translate-x-0 translate-y-[-15px] sm:translate-y-[-5px] md:translate-y-[-10px] lg:translate-y-[-15px]"
                        : item.id === 3
                        ? "translate-x-0 sm:translate-x-[10px] md:translate-x-[5px] lg:translate-x-[15px] lg:translate-y-[-15px]"
                        : item.id === 4
                        ? "translate-x-[0px] sm:translate-x-[-5px] md:translate-x-[-10px] lg:translate-x-[-15px] lg:translate-y-[15px]"
                        : item.id === 5
                        ? "translate-x-0 sm:translate-y-[5px] md:translate-y-[10px] lg:translate-y-[15px]"
                        : "translate-x-[0px] sm:translate-x-[10px] md:translate-x-[5px] lg:translate-x-[15px] lg:translate-y-[15px]"
                    }`
                  : "bg-blue-500 text-white"
              } ${
                item.id === 1
                  ? "rounded-tl-xl"
                  : item.id === 3
                  ? "lg:rounded-tr-xl"
                  : item.id === 4
                  ? "lg:rounded-bl-xl"
                  : item.id === 2
                  ? "lg:rounded-bl-xl rounded-tr-xl"
                  : item.id === 5
                  ? "lg:rounded-bl-xl rounded-bl-xl"
                  : item.id === 6
                  ? "rounded-br-xl"
                  : ""
              }`}
              // style={{ height: "230px", width: "250px" }}
            >
              <h2
                className={`transition-all duration-300 ease-in-out ${
                  selectedId === item.id
                    ? "text-4xl lg:text-3xl  font-extrabold"
                    : "text-5xl lg:text-4xl font-bold mb-2"
                }`}
              >
                {item.title}
              </h2>
              <p
                className={`transition-all duration-300 ease-in-out ${
                  selectedId === item.id
                    ? "text-xl lg:text-[15px] font-extrabold justify-center mb-4"
                    : " text-[15px] font-bold mb-2"
                }`}
              >
                {item.content}
              </p>

              {selectedId === item.id && (
                <p className="text-[12px] lg:block hidden line-clamp-5  mt-2">
                  {item.description}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Binding;
