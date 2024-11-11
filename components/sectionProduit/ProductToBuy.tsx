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
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-start justify-center space-x-11 w-full p-8">
        <div className=" w-[17.6%] h-[100%] mt-8 rounded-2xl justify-center">
          <Slide {...properties}>
            {slideImages.map((slideImage, index) => (
              <div key={index} className="rounded-2xl">
                <Image
                  className="rounded-xl"
                  src={slideImage.url}
                  alt={slideImage.caption}
                  width={5000}
                  height={12}
                  style={{ height: "460px", width: "auto", objectFit: "cover" }}
                />
              </div>
            ))}
          </Slide>
          <div className="flex items-center justify-center mt-11 space-x-6">
            <Image
              src="/slide3.png"
              alt="slide 1"
              width={5000}
              height={12}
              className="rounded-xl"
              style={{ height: "150px", width: "150px", objectFit: "cover" }}
            />
            <Image
              src="/slide1.png"
              alt="slide 1"
              width={5000}
              height={12}
              className="rounded-xl"
              style={{ height: "150px", width: "150px", objectFit: "cover" }}
            />
            <Image
              src="/slide2.png"
              alt="slide 1"
              width={5000}
              height={12}
              className="rounded-xl"
              style={{ height: "150px", width: "150px", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="w-[22%] p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-2 text-start">Tiny House</h2>
          <p className="text-dark w-[100%]  text-[14px] pr-20 mb-4 text-start">
            Notre tiny house est une solution d&apos;habitat innovante et
            respectueuse de l&apos;environnement. Construite à partir de briques
            en plastique 100% recyclé, elle allie confort et durabilité. Facile
            à assembler, elle offre un espace de vie moderne tout en réduisant
            l&apos;empreinte carbone. Optez pour un mode de vie simple,
            écologique et durable avec notre tiny house.
          </p>

          {/* Prix */}
          <div className="text-start mb-4">
            <p className="text-sm text-dark line-through font-bold">
              75 000 000 Ariary
            </p>
            <p className="text-2xl font-semibold text-green-600 mr-2">
              50 000 000 Ariary
            </p>
          </div>

          {/* Choix du pack */}
          <div className=" text-start mb-4">
            <h3 className="text-lg font-semibold">Choisissez votre pack</h3>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pack"
                  value="basic"
                  className="mr-2"
                />
                Pack basique
              </label>
              <label className="flex items-center">
                <input type="radio" name="pack" value="eco" className="mr-2" />
                Pack eco
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pack"
                  value="comfort"
                  className="mr-2"
                />
                Pack Confort
              </label>
            </div>
          </div>
          <div className="mb-4 text-start">
            <h3 className="text-lg font-semibold">Avantages du Produit</h3>
            <div className="flex space-x-2 mt-2">
              <Image
                src="/construction.png"
                alt="Construction gratuite"
                width={100}
                height={100}
              />
              <Image
                src="/garantie.png"
                alt="10 ans de garantie"
                width={100}
                height={100}
              />
              <Image
                src="/service.png"
                alt="Service après-vente"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Options inclus */}
          <div className="mb-4 text-start">
            <h3 className="text-lg font-semibold">Options Inclus</h3>
            <ul className="list-disc list-inside">
              <li>Structure</li>
              <li>Murs</li>
              <li>Fenêtres</li>
            </ul>
          </div>

          {/* Options à choisir */}
          <div className="mb-4 text-start">
            <h3 className="text-lg font-semibold">Options à choisir</h3>
            <div className="flex items-start space-x-8">
              <div className="flex flex-col">
                <label className="flex items-center">
                  <input type="checkbox" name="furniture" className="mr-2" />
                  Meubles
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="appliances" className="mr-2" />
                  Électroménagers
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" name="energy" className="mr-2" />
                  Autonome en énergie électrique
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="water" className="mr-2" />
                  Réservoir d&apos;eau
                </label>
              </div>
            </div>
          </div>

          {/* Quantité et bouton d'action */}
          <div className="flex items-center mt-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 p-2 border rounded-lg mr-4"
            />
            <Link href="/products/panier"  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-primary">
              Obtenir un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductToBuy;
