import React from 'react';
import Link from 'next/link'; 
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import Image from 'next/image';

const SectionProduit: React.FC = () => {
  return (
    <section>

      <Reveal>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">

            <h2 className="text-4xl font-bold mb-4 text-red-600">Découvrez nos produits</h2>
            <p className="text-3xl font-semibold mb-12 text-green-600">100% plastiques recyclés</p>
            
            <div className="flex justify-center flex-wrap gap-8">
              
              <RevealLeft>
                <div className="bg-white text-black border-primary border-[2px] rounded-xl p-4 w-72 min-h-[450px] text-center shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Ajout de min-h-[450px] pour uniformiser la hauteur */}
                  <Image src="/briques.png" alt="Briques" className="w-full h-48 object-cover mb-4 rounded" width={170} height={40}/>
                  <h3 className="text-lg font-semibold mb-3 text-black">Briques</h3>
                  <p className="text-gray-700 mb-4 text-[14px]">Découvrez nos briques durables et écologiques, parfaites pour toutes vos constructions.</p>
                  <Link href="/products/Briques">
                    <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>
              
              {/* Produit 2 */}
              <RevealLeft>
                <div className="bg-white text-black border-primary border-[2px] rounded-xl p-4 w-72 min-h-[450px] text-center shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Ajout de min-h-[450px] */}
                  <Image src="/tuile.png" alt="Tuiles" className="w-full h-48 object-cover mb-4 rounded" width={170} height={40} />
                  <h3 className="text-lg font-semibold mb-3 text-black">Tuiles</h3>
                  <p className="text-gray-700 mb-4 text-[14px]">Optez pour nos tuiles résistantes et respectueuses de l'environnement, idéales pour une toiture durable.</p>
                  <Link href="/products/Tuiles">
                    <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>
              
              {/* Produit 3 */}
              <RevealLeft>
                <div className="bg-white text-black border-primary border-[2px] rounded-xl p-4 w-72 min-h-[450px] text-center shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Ajout de min-h-[450px] */}
                  <Image src="/door.png" alt="Porte" className="w-full h-48 object-cover mb-4 rounded" width={170} height={40} />
                  <h3 className="text-lg font-semibold mb-3 text-black">Porte</h3>
                  <p className="text-gray-700 mb-4 text-[14px]">Découvrez des portes uniques conçues à partir de plastique recyclé.</p>
                  <Link href="/products/Portes">
                    <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>
            </div>

            <div className="mt-12">
              <Link href="/products/AutreProduit">
                <button className="bg-white border-2 border-primary text-primary py-2 px-8 font-bold hover:bg-primary hover:text-white transition-colors">
                  Autres Produits
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">

            <h2 className="text-4xl font-bold mb-4 text-red-600">Découvrez notre catalogue d’infrastructure</h2>
            <p className="text-3xl font-semibold mb-12 text-blue-600">Réaliser à partir de nos briques</p>
            
            <div className="flex justify-center flex-wrap gap-8">
              
            <RevealLeft>
            <div className="bg-black text-white border-primary border-[2px] rounded-xl p-4 w-72 min-h-[450px] text-center shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Ajout de min-h-[450px] */}
              <Image src="/tinyhouse.png" alt="Tiny House" className="w-full h-48 object-cover mb-4 rounded" width={170} height={40}/>
              <h3 className="text-lg font-semibold mb-3">Tiny House</h3>
              <p className="text-gray-300 mb-4 text-[14px]">"Construisez des maisons durables et abordables avec nos briques, idéales pour un espace de vie écologique et confortable."</p>
              <Link href="/products/TinyHouse">
                <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 mt-4"> {/* Ajout de mt-4 pour aligner le bouton */}
                  Découvrir
                </button>
              </Link>
            </div>
          </RevealLeft>

              
                <RevealLeft>
                  <div className="bg-black text-white border-primary border-[2px] rounded-xl p-4 w-72 min-h-[450px] text-center shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Ajout de min-h-[450px] */}
                    <Image src="/tinyclassroom.png" alt="Tiny Classroom" className="w-full h-48 object-cover mb-4 rounded" width={170} height={40}/>
                    <h3 className="text-lg font-semibold mb-3">Tiny Classroom</h3>
                    <p className="text-gray-300 mb-4 text-[14px]">"Explorez des salles de classes conçues à partir de nos briques pour un environnement d’apprentissage propre et inspirant."</p>
                    <Link href="/products/TinyClassroom">
                      <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                        Découvrir
                      </button>
                    </Link>
                  </div>
                </RevealLeft>
              
              <RevealLeft>
                <div className="bg-black text-white border-primary border-[2px] rounded-xl p-4 w-72 min-h-[450px] text-center shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Ajout de min-h-[450px] */}
                  <Image src="/tinylibrary.png" alt="Tiny Library" className="w-full h-48 object-cover mb-4 rounded" width={170} height={40}/>
                  <h3 className="text-lg font-semibold mb-3">Tiny Library</h3>
                  <p className="text-gray-300 mb-4 text-[14px]">"Créez un espace de lecture agréable et confortable avec nos briques, parfait pour stimuler l’esprit, éveiller la curiosité et encourager l’apprentissage."</p>
                  <Link href="/products/TinyLibrary">
                    <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>
            </div>


            <div className="mt-12">
              <Link href="/products/AutreProduit">
                <button className="bg-white border-2 border-primary text-primary py-2 px-8 font-bold hover:bg-primary hover:text-white transition-colors">
                  Autres Produits
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default SectionProduit;

