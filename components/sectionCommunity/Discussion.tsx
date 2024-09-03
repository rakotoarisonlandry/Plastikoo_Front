"use client";
import React from "react";
import Image from "next/image";
import { FaHeart, FaComment, FaLink, FaSearch, FaEllipsisV, FaPaperPlane } from "react-icons/fa";

function Discussion() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">

      <div className="p-4 flex justify-center">
        <div className="flex items-center border border-gray-300 rounded-lg w-full max-w-4xl">
          <input
            type="text"
            placeholder="Rechercher..."
            className="p-4 w-full border-none outline-none rounded-l-lg text-lg"
          />
          <button className="bg-green-500 text-white p-4 rounded-r-lg text-lg">
            <FaSearch />
          </button>
        </div>
      </div>

   
      <div className="flex-grow p-4 flex flex-col items-center">
       
        <div className="w-full max-w-5xl bg-white border border-gray-300 rounded-lg p-6 mb-8 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Image src="/profil.png" alt="Avatar de l'utilisateur" width={80} height={80} className="rounded-full" />
              <div>
                <h3 className="text-xl font-bold">Andry007</h3>
                <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
            </div>
            <button className="text-gray-600 text-xl">
              <FaEllipsisV />
            </button>
          </div>
          <div className="mt-6">
            <Image src="/pub.png" alt="Image de publication" width={900} height={450} className="rounded-lg" />
          </div>
          <div className="flex items-center mt-4 space-x-6">
            <button className="text-green-500 flex items-center text-lg"><FaHeart className="mr-2" /> 98</button>
            <button className="text-gray-600 flex items-center text-lg"><FaComment className="mr-2" /> 223</button>
            <button className="text-gray-600 flex items-center text-lg"><FaLink className="mr-2" /></button>
          </div>

          <div className="mt-6 bg-gray-100 p-6 rounded-lg">

            <div className="flex items-center space-x-4 mb-6">
              <input
                type="text"
                placeholder="Votre commentaire"
                className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              />
              <button className="ml-2 text-green-500 text-xl">
                <FaPaperPlane />
              </button>
            </div>

            <div className="flex items-start space-x-6">
              <Image src="/profil.png" alt="Avatar de l'utilisateur" width={60} height={60} className="rounded-full" />
              <div>
                <h3 className="text-base font-bold">Mahery1920</h3>
                <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                <div className="flex items-start space-x-6 mt-4 ml-8">
                  <Image src="/profil.png" alt="Avatar de l'utilisateur" width={50} height={50} className="rounded-full" />
                  <div>
                    <h3 className="text-base font-bold">Yvon14843</h3>
                    <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 mt-6">
              <Image src="/profil.png" alt="Avatar de l'utilisateur" width={60} height={60} className="rounded-full" />
              <div>
                <h3 className="text-base font-bold">Njaka12</h3>
                <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl bg-white border border-gray-300 rounded-lg p-6 mb-8 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Image src="/profil.png" alt="Avatar de l'utilisateur" width={80} height={80} className="rounded-full" />
              <div>
                <h3 className="text-xl font-bold">Njaka12</h3>
                <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              </div>
            </div>
            <button className="text-gray-600 text-xl">
              <FaEllipsisV />
            </button>
          </div>
          <div className="mt-6">
            <Image src="/pub.png" alt="Image de publication" width={900} height={450} className="rounded-lg" />
          </div>
          <div className="flex items-center mt-4 space-x-6">
            <button className="text-green-500 flex items-center text-lg"><FaHeart className="mr-2" /> 80</button>
            <button className="text-gray-600 flex items-center text-lg"><FaComment className="mr-2" /> 150</button>
            <button className="text-gray-600 flex items-center text-lg"><FaLink className="mr-2" /></button>
          </div>

          <div className="mt-6 bg-gray-100 p-6 rounded-lg">

            <div className="flex items-center space-x-4 mb-6">
              <input
                type="text"
                placeholder="Votre commentaire"
                className="w-full p-4 border border-gray-300 rounded-lg text-lg"
              />
              <button className="ml-2 text-green-500 text-xl">
                <FaPaperPlane />
              </button>
            </div>

            <div className="flex items-start space-x-6">
              <Image src="/profil.png" alt="Avatar de l'utilisateur" width={60} height={60} className="rounded-full" />
              <div>
                <h3 className="text-base font-bold">Mahery1920</h3>
                <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                <div className="flex items-start space-x-6 mt-4 ml-8">
                  <Image src="/profil.png" alt="Avatar de l'utilisateur" width={50} height={50} className="rounded-full" />
                  <div>
                    <h3 className="text-base font-bold">Yvon14843</h3>
                    <p className="text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mb-8">
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg shadow-md text-xl">Publier un Post</button>
        </div>
      </div>
    </div>
  );
}

export default Discussion;
