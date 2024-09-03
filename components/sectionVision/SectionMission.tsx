import React from 'react';
import { Reveal } from "../utils/Reveal";
import { RevealLeft } from "../utils/RevealLeft";

const SectionMission = () => {
  return (
    <div className="bg-white min-h-screen p-8">

      <h1 className="text-3xl font-bold text-red-500 text-center mb-12">Notre mission</h1>

      <div className="max-w-7xl mx-auto space-y-6">

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-8 flex items-start space-x-6">
              <div className="flex-shrink-0 flex items-start">
                <h2 className="text-3xl font-bold text-red-500">01</h2>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-500">Collecter</h3>
                <p className="text-gray-700 mt-2 text-lg">
                  Nous utilisons des machines de récolte automatisées pour collecter et broyer les déchets plastiques. 
                  Les utilisateurs peuvent apporter leurs bouteilles et les insérer dans la machine, qui les broie automatiquement 
                  en échange d'un ticket avec une récompense monétaire.
                </p>
              </div>
            </div>

            <div className="bg-gray-300 h-48"></div>
          </div>
        </Reveal>


        <RevealLeft>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-300 h-48"></div>

            <div className="p-8 flex items-start space-x-6">
              <div className="flex-shrink-0 flex items-start">
                <h2 className="text-3xl font-bold text-red-500">02</h2>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-500">Recycler</h3>
                <p className="text-gray-700 mt-2 text-lg">
                  Une fois les déchets plastiques broyés, ils sont transportés puis nettoyés pour une meilleure qualité de produits. 
                  Ces matériaux sont ensuite fondus et transformés en matériaux de construction durable.
                </p>
              </div>
            </div>
          </div>
        </RevealLeft>


        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-8 flex items-start space-x-6">
              <div className="flex-shrink-0 flex items-start">
                <h2 className="text-3xl font-bold text-red-500">03</h2>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-500">Sensibiliser</h3>
                <p className="text-gray-700 mt-2 text-lg">
                  À travers nos actions, nous visons à éduquer et encourager la population à respecter et protéger 
                  l'environnement contre la prolifération des déchets plastiques.
                </p>
              </div>
            </div>

            <div className="bg-gray-300 h-48"></div>
          </div>
        </Reveal>


        <RevealLeft>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-gray-300 h-48"></div>

            <div className="p-8 flex items-start space-x-6">
              <div className="flex-shrink-0 flex items-start">
                <h2 className="text-3xl font-bold text-red-500">04</h2>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-500">Créer</h3>
                <p className="text-gray-700 mt-2 text-lg">
                  Plastikao construit des infrastructures modernes et innovantes à partir de plastiques recyclés 
                  pour améliorer l'habitat en offrant des maisons abordables, durables et confortables.
                </p>
              </div>
            </div>
          </div>
        </RevealLeft>


        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-8 flex items-start space-x-6">
              <div className="flex-shrink-0 flex items-start">
                <h2 className="text-3xl font-bold text-red-500">05</h2>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-500">Promouvoir</h3>
                <p className="text-gray-700 mt-2 text-lg">
                  L'économie circulaire est au cœur de notre mission en suivant les étapes : collecte, recyclage et 
                  transformation des déchets plastiques en matériaux de construction durables.
                </p>
              </div>
            </div>

            <div className="bg-gray-300 h-48"></div>
          </div>
        </Reveal>


        <RevealLeft>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-300 h-48"></div>


            <div className="p-8 flex items-start space-x-6">
              <div className="flex-shrink-0 flex items-start">
                <h2 className="text-3xl font-bold text-red-500">06</h2>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-500">Engager</h3>
                <p className="text-gray-700 mt-2 text-lg">
                  Plastikao s'engage à éduquer la communauté à travers des initiatives environnementales, 
                  en créant des impacts positifs pour encourager chacun à respecter l'environnement.
                </p>
              </div>
            </div>
          </div>
        </RevealLeft>
        
      </div>
    </div>
  );
};

export default SectionMission;
