import React from 'react';
import Homepage from '@/components/section/header/Homepage';
import Contact from '@/app/contact/page';
import Image from 'next/image';

const AutreProduitPage: React.FC = () => {
  return (
    <div>
      <Homepage />
      <div className="flex items-center justify-center">
      <div className="flex space-x-8 bg-white p-6 rounded-xl">
        <div className="w-80 h-80 bg-secondary rounded-xl flex items-center justify-center">
          <Image src="/tinyhouse.png" alt="Tiny House" width={300} height={300} />
        </div>

        {/* Détails du produit */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-1">Tiny House</h2>
            <p className="text-gray-500 mb-4">Pack basique</p>
            
            {/* Options inclus */}
            <h3 className="text-lg font-semibold mb-2">Options Inclus</h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-1">
              <p className="flex items-center">
                <span className="mr-2  text-green-600">✔</span> Structure
              </p>
              <p className="flex items-center ">
                <span className="mr-2 text-green-600">✔</span> Porte
              </p>
              <p className="flex items-center ">
                <span className="mr-2 text-green-600">✔</span> Murs
              </p>
              <p className="flex items-center ">
                <span className="mr-2 text-green-600">✔</span> Toiture
              </p>
              <p className="flex items-center ">
                <span className="mr-2 text-green-600">✔</span> Fenêtres
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-green-600">✔</span> Base
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Quantité</h3>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full text-lg font-semibold flex items-center justify-center hover:bg-gray-300">
                -
              </button>
              <span className="text-xl font-semibold">01</span>
              <button className="w-10 h-10 bg-gray-200 text-gray-600 rounded-full text-lg font-semibold flex items-center justify-center hover:bg-gray-300">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Contact />
    </div>
  );
}

export default AutreProduitPage;
