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
    <div></div>
  );
};

export default SectionCommunity;
