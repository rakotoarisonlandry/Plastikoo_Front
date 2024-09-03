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
                Plastikoo est né d'une vision partagée et d'une prise de conscience urgente. Antananarivo, comme d'autres régions à Madagascar sont envahis par des déchets plastiques que ce soit sur nos plages, dans nos océans ou dans nos villes...
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold text-blue-600">D'où vient l'initiative?</h3>
              <p className="text-lg">
                L'idée de créer Plastikoo trouve ses racines dans notre profonde préoccupation pour l'environnement et notre désir de trouver des solutions durables aux défis posés par les déchets plastiques...
              </p>
            </div>
          </Reveal>
         
            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold text-blue-600">Où en sommes nous aujourd'hui?</h3>
              <p className="text-lg">
                Aujourd'hui, Plastikoo...
              </p>
            </div>
       
        </div>
        <div className="absolute bottom-0 right-0 p-8">
          <img src="/logoVert.png" alt="Logo" className="h-48 w-48 object-contain"/>
        </div>
      </div>
    </section>
  );
};

export default SectionHistoire;
