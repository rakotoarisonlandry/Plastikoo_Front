import React from "react";
import { Reveal } from "../utils/Reveal";
import { RevealLeft } from "../utils/RevealLeft";
import Image from "next/image";

const AutreProduit: React.FC = () => {
  return (
    <section>
      {/* Section de Présentation des Autres Produits */}
      <Reveal>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            {/* Titre Principal */}
            <h2 className="text-4xl font-bold mb-4 text-red-600">
              Nos Autres Produits
            </h2>
            <p className="text-3xl font-semibold mb-12 text-green-600">
              100% plastiques recyclés
            </p>

            <div className="flex justify-center flex-wrap gap-8">
              {/* Produit 1 */}
              <RevealLeft>
                <div className="bg-white text-black border-primary border-[2px] rounded-xl p-4 w-64 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/tuile.png"
                    alt="Meubles"
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    Meubles
                  </h3>
                  <p className="text-gray-700 mb-4 text-[15px] line-clamp-3">
                    Découvrez nos meubles élégants fabriqués à partir de
                    plastique recyclé, parfaits pour un intérieur écologique.
                  </p>
                  <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                    Découvrir
                  </button>
                </div>
              </RevealLeft>

              {/* Produit 2 */}
              <RevealLeft>
                <div className="bg-white text-black border-primary border-[2px] rounded-xl p-4 w-64 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/brique3.png"
                    alt="Équipements de Jardin"
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    Équipements de Jardin
                  </h3>
                  <p className="text-gray-700 mb-4 text-[15px] line-clamp-3">
                    Transformez votre jardin avec nos équipements durables et
                    respectueux de l&apos;environnement.
                  </p>
                  <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                    Découvrir
                  </button>
                </div>
              </RevealLeft>

              {/* Produit 3 */}
              <RevealLeft>
                <div className="bg-white text-black border-primary border-[2px] rounded-xl p-4 w-64 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/brique4.png"
                    alt="Accessoires"
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    Accessoires
                  </h3>
                  <p className="text-gray-700 mb-4 text-[15px] line-clamp-3">
                    Explorez notre gamme d&apos;accessoires faits à partir de
                    plastique recyclé, alliant style et durabilité.
                  </p>
                  <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                    Découvrir
                  </button>
                </div>
              </RevealLeft>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AutreProduit;
