"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button"; 
import { RevealLeft } from "../utils/RevealLeft"; 
import { useRouter } from 'next/navigation'; 

const SectionCommunity: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter(); 

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    return <div>Chargement...</div>; 
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Vous devez être connecté pour accéder à cette page</h1>
          <p className="text-sm sm:text-base mb-4">Veuillez vous <a href="/community/login" className="text-blue-500">connecter</a> pour continuer.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-6 sm:mb-8">
          Contenu Éducatif
        </h2>

        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <p className="text-base sm:text-lg text-gray-700 text-center max-w-full sm:max-w-3xl mb-4">
            Plastikoo transforme les déchets plastiques en solutions durables. Nous
            collectons et recyclons les plastiques pour concevoir et fabriquer des
            matériaux de construction innovants et écologiques, contribuant ainsi à
            réduire la pollution plastique de la ville d&apos;Antananarivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          <RevealLeft>
            <div className="relative">
              <Image
                src="/Union.png" 
                alt="Miniature Vidéo 1"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-white text-black p-2 sm:p-3 rounded-full">▶</Button>
              </div>
            </div>
          </RevealLeft>

          <div className="text-gray-700 flex flex-col justify-between">
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="text-gray-700 flex flex-col justify-between">
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <RevealLeft>
            <div className="relative">
              <Image
                src="/Unions.png" 
                alt="Miniature Vidéo 2"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-white text-black p-2 sm:p-3 rounded-full">▶</Button>
              </div>
            </div>
          </RevealLeft>
        </div>
      </div>
    </section>
  );
};

export default SectionCommunity;
