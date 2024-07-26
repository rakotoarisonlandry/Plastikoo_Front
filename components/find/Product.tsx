import { Image } from "antd";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { Reveal } from "../utils/Reveal";
import { Button } from "../ui/button";
type Props = {};
const products = [
  {
    title: "Briques",
    description:
      "Découvrez nos briques durables et écologiques, parfaites pour toutes vos constructions.",
    image: "/3dBrique.png",
  },
  {
    title: "Tuiles ",
    description:
      "Optez pour nos tuiles résistantes et respectueuses de l'environnement, idéales pour une toiture durable.",
    image: "/simulationbrique.png",
  },
  {
    title: "Articles ménagers",
    description:
      "Simplifiez votre quotidien avec nos articles ménagers fabriqués à partir de plastique recyclé.",
    image: "/cuvette.png",
  },
];
function Product({}: Props) {
  return (
    <div className="text-center py-10  text-white">
      <Reveal>
        <h2 className="text-[40px] pr-72 pl-72 font-bold text-secondary mb-2">
          Decouvrez nos produit 100% plastiques recyclés
        </h2>
      </Reveal>
      <div className="mt-24 mb-10 text-center justify-center flex animate-bounce">
        <FaArrowDownLong className="text-[40px] text-primary" />
      </div>
      <div className="flex justify-center flex-wrap">
        {products.map((product, index) => (
          <Reveal key={index}>
            <div className="bg-transparent text-dark border-primary border-[2px] rounded-xl p-4 m-4 w-64 text-center">
              <div className="mb-4">
                <Image
                  src={`${product.image}`}
                  alt="image"
                  width="230"
                  height="230"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 ">{product.title}</h3>
              <p className="mb-4 text-start text- text-[15px] line-clamp-3">
                {product.description}
              </p>
              <button className="bg-primary mb-4 text-white py-2 px-10 rounded hover:bg-blue-600 transition duration-300">
                Decouvrir
              </button>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-5 ">
          <Button className="bg-transparent border-2 text-[15px] hover:scale-y-105 font-bold hover:scale-x-105 transition duration-300 hover:text-white border-primary text-primary">
            Autre Produits
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

export default Product;
