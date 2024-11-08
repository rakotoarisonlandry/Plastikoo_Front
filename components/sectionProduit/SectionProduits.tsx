import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RevealLeft } from "../utils/RevealLeft";
import { Reveal } from "../utils/Reveal";
import ProductToBuy from "./ProductToBuy";

interface ProductProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  isDark?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  imageSrc,
  title,
  description,
  link,
  isDark,
}) => (
  <RevealLeft>
    <div
      className={`border-primary border-[2px] rounded-xl p-4 w-72 min-h-[450px] text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        isDark ? "bg-dark text-white" : "bg-white text-dark"
      }`}
    >
      <Image
        src={imageSrc}
        width={300}
        height={300}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3
        className={`text-lg font-bold mb-3 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mb-4 text-[14px] line-clamp-4 ${
          isDark ? "text-white" : "text-gray-700"
        }`}
      >
        {description}
      </p>
      <Link href={link}>
        <button
          className={`py-2 text-[14px] font-bold px-6 rounded-md mt-4 ${
            isDark
              ? "bg-primary text-white"
              : "bg-primary text-white hover:bg-blue-600"
          } transition duration-300`}
        >
          Ajouter au panier
        </button>
      </Link>
    </div>
  </RevealLeft>
);
const ProductCardInfrastructure: React.FC<ProductProps> = ({
  imageSrc,
  title,
  description,
  link,
  isDark,
}) => (
  <RevealLeft>
    <div
      className={`border-primary border-[2px] rounded-xl p-4 w-72 min-h-[450px] text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        isDark ? "bg-dark text-white" : "bg-white text-dark"
      }`}
    >
      <Image
        src={imageSrc}
        width={300}
        height={300}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3
        className={`text-lg font-bold mb-3 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mb-4 text-[14px] line-clamp-4 ${
          isDark ? "text-white" : "text-gray-700"
        }`}
      >
        {description}
      </p>
      <Link href={link}>
        <button
          className={`py-2 text-[14px] font-bold px-6 rounded-md mt-4 ${
            isDark
              ? "bg-primary text-white"
              : "bg-primary text-white hover:bg-blue-600"
          } transition duration-300`}
        >
          Decouvrir
        </button>
      </Link>
    </div>
  </RevealLeft>
);

const SectionProduit: React.FC = () => {
  const products = [
    {
      imageSrc: "/briques.png",
      title: "Briques",
      description:
        "Découvrez nos briques durables et écologiques, parfaites pour toutes vos constructions.",
      link: "/products/Briques",
    },
    {
      imageSrc: "/tuile.png",
      title: "Tuiles",
      description:
        "Optez pour nos tuiles résistantes et respectueuses de l'environnement, idéales pour une toiture durable.",
      link: "/products/Tuiles",
    },
    {
      imageSrc: "/door.png",
      title: "Porte",
      description:
        "Découvrez des portes uniques conçues à partir de plastique recyclé.",
      link: "/products/Portes",
    },
  ];

  const infrastructures = [
    {
      imageSrc: "/tinyclassroom.png",
      title: "Tiny Classroom",
      description:
        "Explorez des salles de classes conçues à partir de nos briques pour un environnement d'apprentissage propre et inspirant.",
      link: "/products/TinyClassroom",
      isDark: true,
    },
    {
      imageSrc: "/tinylibrary.png",
      title: "Tiny Library",
      description:
        "Créez un espace de lecture agréable et confortable avec nos briques, parfait pour stimuler l'esprit, éveiller la curiosité et encourager l'apprentissage.",
      link: "/products/TinyLibrary",
      isDark: true,
    },
    {
      imageSrc: "/tinyhouse.png",
      title: "Tiny House",
      description:
        "Construisez des maisons durables et abordables avec nos briques, idéales pour un espace de vie écologique et confortable.",
      link: "/products/TinyHouse",
      isDark: true,
    },
  ];

  return (
    <section>
      <Reveal>
        <div className="bg-white py-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-3xl font-semibold mb-4 text-primary">
              NOS TINY CONSTRUCTIONS
            </p>
            <ProductToBuy />
            <p className="text-[24px] font-extrabold mb-4 text-dark">
              Autres variations:
            </p>
            <div className="flex justify-center flex-wrap gap-8">
              {infrastructures.map((infrastructure) => (
                <ProductCard key={infrastructure.title} {...infrastructure} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="h-2 w-52 flex justify-around mx-auto bg-primary "></div>
      <Reveal>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-red-600">
              Découvrez nos autres produits
            </h2>
            <p className="text-3xl font-semibold mb-12 text-primary">
              100% plastiques recyclés
            </p>
            <div className="flex justify-center flex-wrap gap-8">
              {products.map((product) => (
                <ProductCardInfrastructure key={product.title} {...product} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default SectionProduit;
