'use client';

import React from 'react';
import { Reveal } from "../utils/Reveal"; 

type Props = {}

const SectionHistoire: React.FC<Props> = () => {
  return (
    <section className="py-16 px-4 bg-white text-dark relative">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold text-center text-green-500">Notre histoire</h2>
        </Reveal>
        <div className="mt-8 grid gap-8">
          <Reveal>
            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold text-blue-600">Comment ça a commencé?</h3>
              <p className="text-lg">
              Plastikôo est né d'une vision partagé et d'une prise de conscience face à l'urgence environnementale. À Antananarivo, comme dans d'autres régions de Madagascar, les déchets plastiques envahissent nos plages, nos océans et nos villes. Leur quantité ne cesse d’augmenter, mettant en danger notre écosystème et notre santé. Pour répondre à ce défi croissant, Plastikôo a été créé avec une mission claire : collecter ces déchets plastiques et les transformer en matériaux innovants pour bâtir des infrastructures plus respectueuses de l’environnement.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold text-blue-600">D'où vient l'initiative?</h3>
              <p className="text-lg">
              L’idée de Plastikôo a émergé d’une réflexion profonde sur les conséquences de la pollution plastique à Madagascar. Conscients de l’ampleur du problème, nous avons décidé d'agir différemment en proposant des solutions concrètes et innovantes. Inspirés par la volonté de protéger notre planète et de construire un avenir plus propre, nous avons combiné technologie, écologie et créativité pour transformer une menace en opportunité. Plastikôo se distingue par sa démarche unique : donner une seconde vie aux plastiques tout en contribuant à la construction d’un Madagascar plus durable.
              </p>
            </div>
          </Reveal>
         
            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold text-blue-600">Où en sommes nous aujourd'hui?</h3>
              <p className="text-lg">
              Actuellement, Plastikôo est en phase de prototypage et de recherche. Nos équipes travaillent constamment sur les premiers tests de nos machines de collecte automatisées et sur la création de matériaux de construction à base de plastiques recyclés. Nous réalisons des essais pour assurer la qualité et la résistance des produits finaux, tout en perfectionnant continuellement nos méthodes de recyclage.
              </p>
            </div>
            <h1 className="text-3xl font-bold text-red-500 text-center mb-12">Notre mission</h1>
        </div>
        <div className="absolute bottom-0 right-0 p-8">
          <img src="/logoVert.png" alt="Logo" className="h-48 w-48 object-contain"/>
        </div>
      </div>
    </section>
  );
};

export default SectionHistoire;
