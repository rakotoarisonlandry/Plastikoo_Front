"use client"; 

import React, { useState } from "react";
import Homepage from "@/components/section/header/Homepage";
import Contact from "@/app/contact/page";
import Image from "next/image";

const PanierPage: React.FC = () => {
  const [isSummaryVisible, setSummaryVisible] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Lorem ipsum dolor", price: 1500, selected: false, quantity: 1 },
    { id: 2, name: "Lorem ipsum dolor", price: 1500, selected: false, quantity: 1 },
    { id: 3, name: "Lorem ipsum dolor", price: 1500, selected: false, quantity: 1 },
    { id: 4, name: "Lorem ipsum dolor", price: 1500, selected: false, quantity: 1 },
  ]);

  const handleConfirmClick = () => {
    setSummaryVisible(true);
  };

  const toggleSelectProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, selected: !product.selected } : product
      )
    );
  };

  const selectAllProducts = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, selected: true }))
    );
  };

  const removeSelectedProducts = () => {
    setProducts((prevProducts) => prevProducts.filter((product) => !product.selected));
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const adjustQuantity = (id: number, adjustment: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: Math.max(0, product.quantity + adjustment) } : product
      )
    );
  };

  const totalEstimated = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col md:flex-row items-start">

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl md:flex-1">
        <h2 className="text-2xl font-bold mb-4">Panier</h2>
        <div className="flex justify-between items-center mb-4">
          <button onClick={selectAllProducts} className="text-green-500 hover:text-green-700">
            Sélectionner Tous Les articles
          </button>
          <button onClick={removeSelectedProducts} className="text-green-500 hover:text-green-700">
            Supprimer les articles sélectionnés
          </button>
        </div>


        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="relative flex items-center p-4 border border-gray-200 rounded-lg">

              <button
                onClick={() => removeProduct(product.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <i className="fas fa-times"></i>
              </button>


              <input
                type="checkbox"
                className="mr-4 h-5 w-5 text-green-500 rounded-full"
                checked={product.selected}
                onChange={() => toggleSelectProduct(product.id)}
              />


              <Image src="/image.png" alt="Produit" className="w-48 h-48 object-cover rounded-lg mr-4" />

              <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-heart"></i>
                  </button>
                  <button onClick={() => removeProduct(product.id)} className="text-gray-500 hover:text-gray-700">
                    <i className="fas fa-trash"></i>
                  </button>
                  <p className="text-lg font-bold">{product.price} Ar</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button onClick={() => adjustQuantity(product.id, -1)} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-minus-circle text-2xl"></i>
                </button>
                <span className="text-lg">{product.quantity}</span>
                <button onClick={() => adjustQuantity(product.id, 1)} className="text-gray-500 hover:text-gray-700">
                  <i className="fas fa-plus-circle text-2xl"></i>
                </button>
              </div>
            </div>
          ))}
        </div>


        <button
          onClick={handleConfirmClick}
          className="w-full bg-green-500 text-white py-3 mt-8 rounded-lg text-lg font-semibold"
        >
          Confirmer la commande
        </button>
      </div>

      {isSummaryVisible && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mt-6 md:mt-0 md:ml-6">
          <h2 className="text-3xl font-bold mb-6">Résumé</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>Sous-total</span>
              <span>{totalEstimated} ar</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Frais de livraison</span>
              <span>45000000 ar</span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>Total estimé</span>
              <span>{totalEstimated + 45000000} ar</span>
            </div>
          </div>

          <button className="w-full bg-red-500 text-white py-3 mt-8 rounded-lg text-lg font-semibold">
            PAIEMENT
          </button>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Payez avec</h3>
            <div className="flex justify-around mb-8">
              <Image src="/orangeMoney.png" alt="Orange Money" className="h-12" />
              <Image src="/mvola.png" alt="MVola" className="h-12" />
              <Image src="/airtel.png" alt="Airtel Money" className="h-12" />
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      )}
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div>
      <Homepage />
      <PanierPage />
      <Contact />
    </div>
  );
};

export default Page;

