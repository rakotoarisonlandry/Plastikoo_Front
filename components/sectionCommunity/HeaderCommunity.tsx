"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Reveal } from "../utils/Reveal";
import { FaPaperPlane } from "react-icons/fa";
import { getApiBasePath } from "../../lib/apiConfig";

type Props = {};
interface UserProfile {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  pseudo: string;
  img_profil: string; // Assuming the URL to the profile image is a string
  solde: number; // Assuming solde is a numerical value
  date_naissance: string; // Use string to store the date in ISO format (YYYY-MM-DD)
}
const HeaderCommunity: React.FC<Props> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [profileExpanded, setProfileExpanded] = useState(false);
  const [user, setUser] = useState<UserProfile>({
    id: 0,
    nom: "",
    prenom: "",
    email: "",
    pseudo: "",
    img_profil: "",
    solde: 0,
    date_naissance: "",
  });

  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      setIsAuthenticated(authStatus === "true");

      if (authStatus === "true") {
        await fetchUserData();
      }
    };

    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        handleUnauthenticated();
        return;
      }

      try {
        const response = await fetch(`${getApiBasePath()}/utilisateur/infos`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          // Token is expired or invalid, handle logout
          console.warn("Token expired or invalid, redirecting to login.");
          handleUnauthenticated();
          return;
        }

        if (response.ok) {
          const data = await response.json();
          setUser(data[0]);
        } else {
          console.error("Error fetching user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    const handleUnauthenticated = () => {
      // Log out the user and redirect to the login page
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
      router.push("/community/login");
    };

    checkAuthStatus();
  }, [router]);
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("authToken");
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
          <div className="flex items-center justify-between">
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
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="">
                  <Image
                    src={`${getApiBasePath()}/uploads/${user.img_profil}`} // Dynamically load user's profile image
                    width={40}
                    height={40}
                    alt={`${user.prenom}'s profile`}
                    className={`rounded-full h-10 w-10 cursor-pointer  transition-transform duration-300 ${
                      profileExpanded ? "transform scale-125" : ""
                    }`}
                    onClick={toggleDropdown}
                  />
                </div>
                <div className="rounded-full relative">
                  {/* <Image
                    src="/profil.png"
                    alt="Profile Avatar"
                    width={40}
                    height={40}
                    className={`rounded-full cursor-pointer transition-transform duration-300 ${
                      profileExpanded ? "transform scale-125" : ""
                    }`}
                    onClick={toggleDropdown}
                  /> */}
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
            ) : (
              <Link href="/community">
                <Button className="bg-secondary text-white hover:bg-secondary-dark transition-all duration-300">
                  Notre communauté
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderCommunity;
