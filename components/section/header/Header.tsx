"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaHome,
  FaLinkedin,
  FaProductHunt,
  FaServicestack,
  FaYoutube,
} from "react-icons/fa";
import { AiFillContacts, AiFillInstagram } from "react-icons/ai";
import { Reveal } from "../../utils/Reveal";
import { useRouter } from "next/navigation";
import { getApiBasePath } from "@/lib/apiConfig";
import {
  FaUser,
  FaCogs,
  FaSignOutAlt,
  FaBook,
  FaLifeRing,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdContactMail, MdOutlineMenu } from "react-icons/md";
import { GiNightVision } from "react-icons/gi";
type Props = {};
interface UserProfile {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  pseudo: string;
  img_profil: string;
  solde: number;
  date_naissance: string;
}
function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [profileExpanded, setProfileExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
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
  return (
    <div
      className={`fixed z-20 top-0 right-0 h-full w-full bg-white text-dark transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center bg-white p-4">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="text-dark font-bold text-lg">
            <Image src="/logo.png" width={130} height={130} alt="logo" />
          </Link>
        </div>
        <IoClose
          className="text-dark w-8 h-8 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="pt-7 bg-white h-screen">
        {/* Conteneur principal scrollable */}
        <div className=" max-h-[87%] overflow-y-auto">
          {/* Profil utilisateur */}
          <div className="flex mb-4 justify-center">
            {isAuthenticated && (
              <div className="select-none">
                <div className="flex justify-center">
                  <Image
                    src={`${getApiBasePath()}/uploads/${user.img_profil}`}
                    width={70}
                    height={70}
                    alt={`${user.prenom}'s profile`}
                    className="rounded-full h-14 w-14 cursor-pointer transition-transform duration-300"
                    onClick={toggleDropdown}
                  />
                </div>
                <h2 className="text-xl font-bold">@{user.pseudo}</h2>
              </div>
            )}
          </div>

          {/* Menu de navigation */}
          <ul className="flex flex-col items-start pl-6 space-y-4 mt-0">
            <li className="text-lg flex space-x-4 items-center cursor-pointer hover:bg-gray-100 hover:text-blue-700 px-4 py-2 rounded-md transition duration-200">
              <FaHome /> <Link href="/">Accueil</Link>
            </li>
            <li className="text-lg flex space-x-4 items-center cursor-pointer hover:bg-gray-100 hover:text-blue-700 px-4 py-2 rounded-md transition duration-200">
              <GiNightVision /> <Link href="/vision">Notre vision</Link>
            </li>
            <li className="text-lg flex space-x-4 items-center cursor-pointer hover:bg-gray-100 hover:text-blue-700 px-4 py-2 rounded-md transition duration-200">
              <FaProductHunt /> <Link href="/products">Nos produits</Link>
            </li>
            <li className="text-lg flex space-x-4 items-center cursor-pointer hover:bg-gray-100 hover:text-blue-700 px-4 py-2 rounded-md transition duration-200">
              <FaServicestack /> <Link href="/services">Nos services</Link>
            </li>
            <li className="text-lg flex space-x-4 items-center cursor-pointer hover:bg-gray-100 hover:text-blue-700 px-4 py-2 rounded-md transition duration-200">
              <MdContactMail /> <Link href="/contact">Contact</Link>
            </li>
            {isAuthenticated && (
              <li className="text-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 px-4 py-2 rounded-md transition duration-200">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  <FaSignOutAlt className="inline-block mr-2 text-red-500" />
                  Déconnexion
                </button>
              </li>
            )}
            {!isAuthenticated && (
              <li className="text-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 px-4 py-2 rounded-md transition duration-200">
                <button
                  onClick={() => router.push("/community/login")}
                  className="block w-full text-left px-4 py-2 text-primary hover:bg-gray-100"
                >
                  <FaSignOutAlt className="inline-block mr-2 text-primary" />
                  Se connecter
                </button>
              </li>
            )}
          </ul>

          {/* Bouton principal */}
          <div className="mt-10 px-6">
            <button
              onClick={() => router.push("/discussion")}
              className="w-full bg-dark text-white py-3 rounded-md hover:bg-gray-800"
            >
              Communauté
            </button>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex justify-center mt-10 pb-5 space-x-6 text-gray-500">
            <Link
              href="https://www.facebook.com/profile.php?id=61563259853880&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-blue-600 text-white rounded-full p-4 hover:scale-110 hover:shadow-lg transition-transform duration-300">
                <FaFacebookF className="w-5 h-5" />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/plastikoo.mg?igsh=a2p4dzQwa2owbzNi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full p-4 hover:scale-110 hover:shadow-lg transition-transform duration-300">
                <AiFillInstagram className="w-5 h-5" />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A104657918&keywords=plastik%C3%B4o%20madagascar&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=ef889f8d-aa9d-4d91-82eb-4f2bc81c9969&sid=t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-blue-700 text-white rounded-full p-4 hover:scale-110 hover:shadow-lg transition-transform duration-300">
                <FaLinkedin className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({}: Props) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [profileExpanded, setProfileExpanded] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
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
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
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
  const linkClasses = (path: string) =>
    `px-4 py-2 text-sm font-medium ${
      pathname === path ? "text-primary bg-white" : "text-white bg-primary"
    }`;

  return (
    <div className="block mb-20">
      <header className="select-none fixed top-0 left-0 right-0 bg-white shadow-lg z-50 backdrop-filter backdrop-blur-lg bg-opacity-70">
        <nav className="max-w-7xl py-1.5 pt-4 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop layout */}
          <div className="hidden lg:flex items-center justify-center space-x-32 h-20">
            <Reveal>
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-dark font-bold text-lg">
                  <Image src="/logo.png" width={170} height={170} alt="logo" />
                </Link>
              </div>
            </Reveal>
            <div className="justify-center items-center block space-y-7">
              <p className="text-primary text-center font-bold">
                Votre engagement pour un avenir durable se construit ici !
              </p>
              <div className="flex items-center font-semibold">
                <Reveal>
                  <Link href="/" className={linkClasses("/")}>
                    Accueil
                  </Link>
                </Reveal>
                <Reveal>
                  <Link href="/vision" className={linkClasses("/vision")}>
                    Notre vision
                  </Link>
                </Reveal>
                <Reveal>
                  <Link href="/products" className={linkClasses("/products")}>
                    Nos produits
                  </Link>
                </Reveal>
                <Reveal>
                  <Link href="/services" className={linkClasses("/services")}>
                    Nos services
                  </Link>
                </Reveal>
                <Reveal>
                  <Link href="/contact" className={linkClasses("/contact")}>
                    Contact
                  </Link>
                </Reveal>
              </div>
            </div>
            {isAuthenticated ? (
              <div className=" flex items-center space-x-4">
                <div className="select-none">
                  <Image
                    src={`${getApiBasePath()}/uploads/${user.img_profil}`}
                    width={40}
                    height={40}
                    alt={`${user.prenom}'s profile`}
                    className="rounded-full absolute right-20 top-8 select-none h-10 w-10 cursor-pointer  transition-transform duration-300 "
                    onClick={toggleDropdown}
                  />
                </div>
                <div className="absolute right-8 top-24 ">
                  {dropdownVisible && (
                    <div className=" w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                      <button
                        onClick={() => router.push("/discussion")}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <FaBook className="inline-block mr-2 text-gray-500" />
                        Communauté
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <FaUser className="inline-block mr-2 text-gray-500" />
                        Profile
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <FaCogs className="inline-block mr-2 text-gray-500" />
                        Parametre
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <FaLifeRing className="inline-block mr-2 text-gray-500" />
                        Help Center
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        <FaSignOutAlt className="inline-block mr-2 text-red-500" />
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
          <div className="sm:hidden relative items-center justify-between flex flex-row my-1">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-dark font-bold text-lg">
                <Image src="/logo.png" width={130} height={130} alt="logo" />
              </Link>
            </div>
            <MdOutlineMenu
              onClick={handleDrawerToggle}
              className="text-primary w-10 h-10"
            />
          </div>
          <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
        </nav>
      </header>
    </div>
  );
}

export default Header;
