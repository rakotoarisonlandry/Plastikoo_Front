import React from "react";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";

const Solutions: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Sensibilisation & éducation",
      description:
        "Plastikôo sensibilise et éduque sur l'importance du recyclage via des campagnes et des programmes éducatifs.",
      bgColor: "bg-gray-500",
      image: "/Vector.png",
      textColor: "text-white",
    },
     {
      id: 2,
      title: "Collecte automatisée",
      description:
        "Nous utilisons des machines innovantes pour la collecte des déchets plastiques, installées dans des lieux stratégiques.",
      bgColor: "bg-red-500",
      image: "/Vector2.png",
      textColor: "text-white",
    },
   
    {
      id: 3,
      title: "Transformation",
      description:
        "Les plastiques collectés sont triés et transformés en nouveaux produits essentiels pour la construction.",
      bgColor: "bg-green-500",
      image: "/Vector3.png",
      textColor: "text-black",
    },
    {
      id: 4,
      title: "Construction durable",
      description:
        "Les matériaux recyclés sont utilisés pour créer des constructions durables comme des briques et tuiles.",
      bgColor: "bg-blue-500",
      image: "/Vector4.png",
      textColor: "text-white",
    },
  ];

  return (
    <div className="p-10 bg-gray-100 flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold text-green-500 mb-8 text-center">Nos Solutions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
        {items.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl shadow-lg p-6 ${item.bgColor} flex flex-col items-center`} 
            style={{ height: "320px", width: "400px" }} // Hauteur réduite à 320px
          >
            {/* Section de Texte avec Reveal */}
            <Reveal>
              <div className="flex-1 flex flex-col justify-start items-start text-left">
                <h2 className={`text-2xl font-bold ${item.textColor}`}>{item.title}</h2>
                <p className={`mt-2 ${item.textColor} leading-relaxed text-base`}>{item.description}</p>
              </div>
            </Reveal>
            {/* Image section juste au-dessus du bouton */}
            <RevealLeft>
              <div className="mt-1 flex items-center justify-center"> {/* Réduction de la marge pour rapprocher l'image */}
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain opacity-85" />
              </div>
            </RevealLeft>
            {/* Bouton Découvrir directement sous l'image, avec une marge réduite */}
            <div className="mt-0 flex justify-center w-full"> {/* Réduction de la marge à 0 */}
              <button className="bg-white text-green-500 font-bold py-2 px-6 rounded-lg hover:bg-gray-200">
                Découvrir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
