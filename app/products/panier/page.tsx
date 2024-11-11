import React from "react";
import Homepage from "@/components/section/header/Homepage";
import Contact from "@/app/contact/page";
import Image from "next/image";

const AutreProduitPage: React.FC = () => {
  return (
    <div>
      <Homepage />
      <div className="flex items-center justify-center">
        <div className="flex space-x-8 bg-white p-6 rounded-xl">
          <div className="w-80 h-80 bg-secondary rounded-xl flex items-center justify-center">
            <Image
              src="/tinyhouse.png"
              alt="Tiny House"
              width={300}
              height={300}
            />
          </div>

          {/* Détails du produit */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl text-dark font-bold mb-1">Tiny House</h2>
              <p className="text-dark font-bold mb-4">Pack basique</p>

              {/* Options inclus */}
              <h3 className="text-lg font-semibold mb-2">Options Inclus</h3>
              <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                <p className="flex items-center">
                  <span className="mr-2 text-green-600">✔</span> Structure
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

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="w-60 flex justify-center p-2 bg-primary rounded text-white font-semibold hover:bg-green-700"
        >
          Ajouter un autre produit
        </button>
      </div>

      {/* Form Section */}
      <div className="flex mt-11 w-full h-screen justify-center items-center">
        <div className="bg-dark p-8 flex justify-center w-full h-full text-white">
          <div className=" w-[50%] text-white">
            <h3 className="text-center text-2xl font-semibold mb-6">
              Détails de Facturation
            </h3>
            <form className="space-y-4  ">
              <div className="grid grid-cols-2 gap-20 mb-7">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Votre Nom"
                    className="p-2 rounded bg-white  border-gray-600 text-dark w-full"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Prenom
                  </label>
                  <input
                    type="text"
                    placeholder="Votre Prénom"
                    className="p-2 rounded bg-white  border-gray-600 text-dark w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-20 mb-7">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Adresse de livraison
                  </label>
                  <input
                    type="email"
                    placeholder="Ex: plastikoo@gmail.com"
                    className="p-2 rounded bg-white  border-gray-600 text-dark w-full"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Adresse de livraison
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de l'entreprise"
                    className="p-2 rounded bg-white  border-gray-600 text-dark w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-center text-white font-semibold mb-2">
                  Adresse de livraison
                </label>
                <select className="w-full p-2 rounded bg-white  border-gray-600 text-dark">
                  <option>Analamanga</option>
                  {/* Add other options as needed */}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-20 mb-7">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Adresse de livraison
                  </label>
                  <input
                    type="text"
                    placeholder="Ville"
                    className="p-2 rounded bg-white  border-gray-600 text-dark w-full"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Adresse de livraison
                  </label>
                  <input
                    type="text"
                    placeholder="Adresse"
                    className="p-2 rounded bg-white  border-gray-600 text-dark w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-20 mb-7">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Adresse de livraison
                  </label>
                  <input
                    type="text"
                    placeholder="Code Postal"
                    className="p-2 rounded bg-white border border-gray-600 text-dark w-full"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Adresse de livraison
                  </label>
                  <input
                    type="text"
                    placeholder="Tél. fixe"
                    className="p-2 rounded bg-white  border-gray-600 text-dark w-full"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[50%] p-2 mt-4 bg-primary rounded  text-white font-semibold hover:bg-green-700"
                >
                  Recevoir le devis
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default AutreProduitPage;
