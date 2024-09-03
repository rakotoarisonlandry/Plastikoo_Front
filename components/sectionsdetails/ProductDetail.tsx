import React from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

interface Product {
  nom: string;
  description: string;
  image: string;
  prix: string;
}

interface ProductDetailProps {
  product: Product;
  smallImages: string[];
  relatedProducts: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, smallImages, relatedProducts }) => {
  return (
    <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      {/* Barre de recherche */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-4xl">
          <input
            type="text"
            placeholder="Recherche"
            className="w-full p-4 border border-gray-300 rounded-l-lg pr-12 text-base sm:text-lg"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4 bg-green-500 text-white rounded-r-lg">
            <FaSearch className="text-xl" />
          </button>
        </div>
      </div>

      {/* Détails du produit */}
      <div className="flex flex-col lg:flex-row justify-between items-start mb-6 space-y-4 lg:space-y-0">
        <img
          src={product.image}
          alt={product.nom}
          className="w-full lg:w-1/2 h-64 object-cover rounded"
        />

        <div className="lg:ml-8 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.nom}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl sm:text-2xl font-semibold mb-4">{product.prix}</p>

          <div className="flex flex-wrap space-x-2 space-y-2 mb-4">
            {smallImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Small ${index}`}
                className="w-16 h-16 object-cover rounded"
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center space-x-4">
            <Link href="/panier">
              <button className="w-full lg:w-auto bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition duration-300 mb-2 lg:mb-0">
                Acheter maintenant
              </button>
            </Link>
            <button className="w-full lg:w-auto bg-gray-200 text-black py-2 px-6 rounded hover:bg-gray-300 transition duration-300">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>

      {/* Produits similaires */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Trouver des produits similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={relatedProduct.image}
                alt={relatedProduct.nom}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{relatedProduct.nom}</h3>
              <p className="text-gray-700 mb-2">{relatedProduct.description}</p>
              <p className="text-lg font-semibold mb-4">{relatedProduct.prix}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
