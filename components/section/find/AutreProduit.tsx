import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import Image from "next/image";

const SectionProduit: React.FC = () => {

  return (
    <section>
      <Reveal>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 
              className=" text-[28px] sm:text-[30px] lg:text-[40px] lg:text-4xl  mb-2 text-orange font-black lg:mb-4 text-red"
              style={
                {
                  fontFamily:"Montserrat",
                  fontWeight:900
                }
              }>
              Découvrez nos Tiny constructions
            </h2>
            <p className="text-[28px] sm:text-[30px] lg:text-[40px] lg:text-4xl font-semibold mb-5 lg:mb-12 text-secondary"
              style={
                {
                  fontFamily:"Montserrat",
                  fontWeight:500
                }
              }
            >
              Construit à partir de plastique recyclé
            </p>
            <p 
              className="text-[14px] mb-12 lg:px-80 text-dark"
              style={
                {
                  fontFamily:"Montserrat",
                  fontWeight:500,
                  fontSize: 14
                }}
            >
              Découvrez <strong style={{fontFamily:"Montserrat",fontWeight:900, fontSize:14}}>nos Tiny constructions</strong>, une solution d&lsquo;immobilier
              responsable qui allie innovation, durabilité et impact
              environnemental. Composées à 90% de matériaux recyclés, ces
              structures écologiques contribuent directement à la réduction de
              la pollution plastique.
            </p>
            <div className="flex  justify-center flex-wrap gap-8">
              <RevealLeft>
                <div className="bg-black text-white border-primary border-[2px] rounded-xl p-4 w-80 h-[100%] text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={100}
                    height={20}
                    src="/tinyhouse.png"
                    alt="Tiny House"
                    className="w-full h-80 object-cover mb-4 rounded"
                  />
                  <h3 
                    className="text-[22px] font-bold font-montserrat mb-3"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: "bold",
                      fontSize:22
                    }}
                  >
                    Tiny House
                  </h3>
                  <p 
                    className="text-dark-300 mb-4 lg:text-[12px] text-[14px] font-semibold font-montserrat line-clamp-3"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: 600,
                      fontSize:14
                    }}
                  >
                    Construisez des habitats écologiques avec nos briques,
                    idéales pour un espace de vie confortable.
                  </p>
                  <Link href="/products/TinyHouse">
                    <button 
                      className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 text-[20px] font-bold font-montserrat"
                      style= {{
                        fontFamily:"Montserrat",
                        fontWeight: "bold",
                        fontSize:20
                      }}
                    >
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>

              <RevealLeft>
                <div className="bg-black text-white border-primary border-[2px] rounded-xl p-4 w-80 h-[100%] text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={100}
                    height={20}
                    src="/tinyclassroom.png"
                    alt="Tiny Classroom"
                    className="w-full h-80 object-cover mb-4 rounded"
                  />
                  <h3 
                    className="text-[22px] font-bold font-montserrat mb-3"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: "bold",
                      fontSize:22
                    }} 
                  >
                    Tiny Classroom
                  </h3>
                  <p 
                    className="text-gray-300 mb-4 lg:text-[12px] text-[14px] font-semibold font-montserrat line-clamp-3"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: 600,
                      fontSize: 14
                    }}
                  >
                    Explorez des salles de classes conçues à partir de nos
                    briques pour un environnement d&lsquo;apprentissage
                    inspirant.
                  </p>
                  <Link href="/products/TinyClassroom">
                    <button 
                      className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 text-[20px] font-bold font-montserrat"
                      style= {{
                        fontFamily:"Montserrat",
                        fontWeight: "bold",
                        fontSize:20
                      }}
                    >
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>

              <RevealLeft>
                <div className="bg-black text-white border-primary border-[2px] rounded-xl p-4 w-80 h-[100%] text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/tinylibrary.png"
                    alt="Tiny Library"
                    width={100}
                    height={20}
                    className="w-full h-80 object-cover mb-4 rounded"
                  />
                  <h3 
                    className="text-[22px] font-bold font-montserrat mb-3"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: "bold",
                      fontSize:22
                    }}
                  >
                    Tiny Library
                  </h3>
                  <p 
                    className="text-gray-300 mb-4 lg:text-[12px] text-[14px] font-semibold font-montserrat line-clamp-3"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: 600,
                      fontSize:14
                    }}
                  >
                    Créez un espace de lecture agréable parfait pour stimuler
                    l&lsquo;esprit, éveiller la curiosité et encourager
                    l&lsquo;apprentissage.
                  </p>
                  <Link href="/products/TinyLibrary">
                    <button 
                      className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 text-[20px] font-bold font-montserrat"
                      style= {{
                        fontFamily:"Montserrat",
                        fontWeight: "bold",
                        fontSize:20
                      }}
                    >
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>
            </div>

            <div className="mt-12">
              <Link href="/products/AutreProduit">
                <button 
                  className="bg-white border-2 border-primary text-primary py-2 px-8 font-bold hover:bg-primary hover:text-white transition-colors"
                  style= {{
                    fontFamily:"Montserrat",
                    fontWeight: 600,
                    fontSize:24
                  }}
                  >
                  Autres Produits
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="bg-white lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 
              className="text-[28px] sm:text-[30px] lg:text-[40px] lg:text-4xl  mb-2 text-orange font-black lg:mb-4 text-red"
              style= {{
                fontFamily:"Montserrat",
                fontWeight: 900,
              }}
            >
              Découvrez nos produits
            </h2>
            <p 
              className="text-[28px] sm:text-[30px] lg:text-[40px] text-3xl mb-10 text-primary"
              style= {{
                fontFamily:"Montserrat",
                fontWeight: 5000
              }}
            >
              100% plastiques recyclés
            </p>

            <div className="flex justify-center flex-wrap gap-8">
              <RevealLeft>
                <div className="bg-white text-dark border-primary border-[2px] rounded-xl p-4 w-80 h-[100%] text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={100}
                    height={20}
                    src="/briques.png"
                    alt="Briques"
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 
                    className="text-[22px] font-bold font-montserrat mb-3 text-dark"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: "bold",
                      fontSize:22
                    }}
                  >
                    Briques
                  </h3>
                  <p 
                    className="text-gray-700 mb-4 text-[15px] font-semibold font-montserrat line-clamp-3"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: 600,
                      fontSize:15
                    }}
                  >
                    Découvrez nos briques durables et écologiques, parfaites
                    pour toutes vos constructions.
                  </p>
                  <Link href="/products/Briques">
                    <button 
                      className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 text-[20px] font-bold font-montserrat"
                      style= {{
                        fontFamily:"Montserrat",
                        fontWeight: "bold",
                        fontSize:20
                      }}
                    >
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>

              {/* Produit 2 */}
              <RevealLeft>
                <div className="bg-white text-dark border-primary border-[2px] rounded-xl p-4 w-80 h-[100%] text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={100}
                    height={20}
                    src="/tuile.png"
                    alt="Tuiles"
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 
                    className="text-[22px] font-bold font-montserrat mb-3 text-dark"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: "bold",
                      fontSize:22
                    }}
                  >
                    Tuiles
                  </h3>
                  <p 
                    className="text-gray-700 mb-4 text-[15px] font-semibold font-montserrat line-clamp-3"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: 600,
                      fontSize:15
                    }}
                  >
                    Optez pour nos tuiles résistantes et respectueuses de
                    l&lsquo;environnement, idéales pour une toiture durable.
                  </p>
                  <Link href="/products/Tuiles">
                    <button 
                      className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 text-[20px] font-bold font-montserrat"
                      style= {{
                        fontFamily:"Montserrat",
                        fontWeight: "bold",
                        fontSize:20
                      }}
                    >
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>

              <RevealLeft>
                <div className="bg-white text-dark border-primary border-[2px] rounded-xl p-4 w-80 h-[100%] text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    width={100}
                    height={20}
                    src="/door.png"
                    alt="Porte"
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 
                    className="text-[22px] font-bold font-montserrat mb-3 text-dark"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: "bold",
                      fontSize:22
                    }}
                  >
                    Porte
                  </h3>
                  <p 
                    className="text-gray-700 mb-4 text-[15px] font-semibold font-montserrat line-clamp-3"
                    style= {{
                      fontFamily:"Montserrat",
                      fontWeight: 600,
                      fontSize:15
                    }}
                  >
                    Découvrez des portes uniques conçues à partir de plastique
                    recyclé.
                  </p>
                  <Link href="/products/Portes">
                    <button 
                      className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 text-[20px] font-bold font-montserrat"
                      style= {{
                        fontFamily:"Montserrat",
                        fontWeight: "bold",
                        fontSize:20
                      }}
                    >
                      Découvrir
                    </button>
                  </Link>
                </div>
              </RevealLeft>
            </div>

            <div className="my-12">
              <Link href="/products/AutreProduit">
                <button 
                  className="bg-white border-2 border-primary text-primary py-2 px-8 font-bold hover:bg-primary hover:text-white transition-colors"
                  style= {{
                    fontFamily:"Montserrat",
                    fontWeight: 600,
                    fontSize:24
                  }}
                >
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
