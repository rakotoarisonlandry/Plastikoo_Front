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
    },
    { id: 2, title: "02", content: "Création d’ emplois " },
    { id: 3, title: "03", content: "Sensibilisation  et éducation" },
    { id: 4, title: "04", content: "Promouvoir l’économie circulaire " },
    { id: 5, title: "05", content: "Innovation continue " },
    { id: 6, title: "06", content: "Reduction de l’empreinte carbone " },
  ];

  const handleCardClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="p-20 bg-gray-100">
      <Reveal>
        <h1 className="text-center text-3xl font-bold mb-8" id="binding">
          Nos engagement
        </h1>
      </Reveal>
      <div className="grid grid-cols-1 w-[50%] ml-[25%] mt-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <Reveal key={item.id}>
            <div
              onClick={() => handleCardClick(item.id)}
              className={`p-5 flex flex-col   justify-center items-start cursor-pointer transition-all duration-300 ${
                selectedId === item.id
                  ? `bg-green-500 text-white rounded-xl ${
                      item.id === 1
                        ? "translate-x-[-15px] translate-y-[-15px]"
                        : item.id === 2
                        ? "translate-x-0 translate-y-[-15px]"
                        : item.id === 3
                        ? "translate-x-3 translate-y-[-15px]"
                        : item.id === 4
                        ? "translate-x-[-15px] translate-y-3"
                        : item.id === 5
                        ? "translate-x-0 translate-y-3"
                        : "translate-x-3 translate-y-3"
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
              style={{ minHeight: "150px", width: "200px" }} // Adjust the height and width as needed
            >
              <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
              <p className="text-[15px] font-bold">{item.content}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Binding;
