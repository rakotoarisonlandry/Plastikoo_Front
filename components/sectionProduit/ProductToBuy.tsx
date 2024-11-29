"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Importing styles for the slideshow

function ProductToBuy() {
  const slideImages = [
    { url: "/slide3.png", caption: "Slide 1" },
    { url: "/slide1.png", caption: "Slide 2" },
    { url: "/slide2.png", caption: "Slide 3" },
  ];

  const properties = {
    prevArrow: (
      <button className="w-12 hidden h-12 bg-white text-primary rounded-full absolute ml-5 transform translate-y-1/2 top-1/2 justify-center items-center z-10">
        &#10094;
      </button>
    ),
    nextArrow: (
      <button className="w-12 h-12 hidden bg-white text-primary rounded-full absolute mr-5 transform -translate-y-1/2 top-1/2 justify-center items-center z-10">
        &#10095;
      </button>
    ),
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
      {/* Conteneur principal */}
      <div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-12 w-full max-w-6xl p-6 space-y-8 lg:space-y-0">
        {/* Section gauche - Carousel */}
        <div className="w-full lg:w-[40%] flex flex-col items-center px-4 lg:px-0">
          {/* Carrousel principal */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <Slide {...properties}>
              {slideImages.map((slideImage, index) => (
                <div key={index} className="rounded-2xl">
                  <Image
                    className="rounded-2xl object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
                    src={slideImage.url}
                    alt={slideImage.caption}
                    width={800}
                    height={600}
                    priority
                  />
                </div>
              ))}
            </Slide>
          </div>

          {/* Images miniatures */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            {["/slide3.png", "/slide1.png", "/slide2.png"].map((src, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`slide ${index + 1}`}
                  width={120}
                  height={120}
                  className="object-cover w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Section droite - Contenu */}
        <div className="w-[40%] md:w-[60%] bg-white p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Titre */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-start text-gray-800 leading-tight">
            Tiny House
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 text-start">
            Notre tiny house est une solution d&apos;habitat innovante et
            respectueuse de l&apos;environnement. Construite à partir de briques
            en plastique 100% recyclé, elle allie confort et durabilité. Facile
            à assembler, elle offre un espace de vie moderne tout en réduisant
            l&apos;empreinte carbone. Optez pour un mode de vie simple,
            écologique et durable avec notre tiny house.
          </p>

          {/* Prix */}
          <div className="mb-6">
            <p className="text-gray-400 text-start text-sm line-through font-bold">
              75 000 000 Ariary
            </p>
            <p className="text-green-600 text-start text-2xl font-semibold">
              50 000 000 Ariary
            </p>
          </div>

          {/* Packs */}
          <div className="mb-6">
            <h3 className="text-lg text-start font-semibold mb-4">
              Choisissez votre pack
            </h3>
            <div className="flex flex-wrap gap-4">
              {["Pack basique", "Pack eco", "Pack Confort"].map(
                (pack, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <input
                      type="radio"
                      name="pack"
                      value={pack.toLowerCase()}
                      className="accent-green-600"
                    />
                    {pack}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Avantages */}
          <div className="mb-6">
            <h3 className="text-lg text-start font-semibold mb-4">
              Avantages du Produit
            </h3>
            <div className="flex space-x-4 items-center justify-start">
              {["/construction.png", "/garantie.png", "/service.png"].map(
                (src, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-25 h-25 p-2 hover:scale-105 transition-transform"
                  >
                    <Image
                      src={src}
                      alt={`Avantage ${index + 1}`}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Options inclus */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-start mb-2">
              Options Inclus
            </h3>
            <ul className="list-disc text-start list-inside text-gray-600">
              <li>Structure</li>
              <li>Murs</li>
              <li>Fenêtres</li>
            </ul>
          </div>

          {/* Options supplémentaires */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Options à choisir</h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Meubles",
                "Électroménagers",
                "Autonome en énergie électrique",
                "Réservoir d'eau",
              ].map((option, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <input
                    type="checkbox"
                    name={option.toLowerCase()}
                    className="accent-green-600"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Quantité et bouton */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 p-2 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <Link
              href="/products/panier"
              className="px-6 py-3 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Obtenir un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductToBuy;
