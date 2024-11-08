"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation';
import { Reveal } from "../utils/Reveal";
import { FaPaperPlane } from "react-icons/fa"; 

type Props = {};

const HeaderCommunity: React.FC<Props> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [profileExpanded, setProfileExpanded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    router.push("/community/login");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setProfileExpanded(!profileExpanded);
  };

  if (isAuthenticated === null) {
    return <div>Chargement...</div>; 
  }

  return (
    <div className="block mb-20">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 backdrop-filter backdrop-blur-lg bg-opacity-70">
        <nav className="max-w-7xl py-1.5 pt-6 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Reveal>
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-dark font-bold text-lg">
                  <Image src="/logo.png" width="170" height="170" alt="logo" />
                </Link>
              </div>
            </Reveal>
            <div className="flex-grow flex justify-center items-center">
              <Reveal>
              <p className="text-primary text-center font-bold">
                  Votre engagement pour un avenir durable se construit ici !
                </p>
              </Reveal>
            </div>
            {isAuthenticated && (
              <div className="flex items-center space-x-4">
                <Link href="/community">
                  <Button className="bg-secondary text-white hover:bg-secondary-dark transition-all duration-300">
                    Notre communauté
                  </Button>
                </Link>
                <div className="relative">
                  <Image
                    src="/profil.png"
                    alt="Profile Avatar"
                    width={40}
                    height={40}
                    className={`rounded-full cursor-pointer transition-transform duration-300 ${
                      profileExpanded ? "transform scale-125" : ""
                    }`}
                    onClick={toggleDropdown}
                  />
                  {dropdownVisible && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full text-left px-3 py-1.5 bg-green-500 text-white hover:bg-green-600 transition-colors duration-200 rounded-md text-sm"
                      >
                        <FaPaperPlane className="mr-2 text-white" />
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderCommunity;
