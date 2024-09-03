"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Reveal } from "../utils/Reveal";
import { usePathname } from 'next/navigation'; 

type Props = {};

function Accueil({}: Props) {
  const pathname = usePathname(); 

  const getButtonClasses = (path: string) => {
    if (pathname === path) {
      return "bg-green-500 text-white";
    } else if (pathname === '/community' && path === '/plastikoo-educ') {
      return "bg-green-500 text-white";
    } else if (pathname === '/community' && path === '/discussion') {
      return "bg-white text-black";
    } else {
      return "bg-white text-black";
    }
  };

  return (
    <div className="relative h-[65vh] w-full overflow-hidden flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fond.png')" }}
      ></div>

      <div className="relative z-20 bg-white py-5 px-6 shadow-md w-full max-w-2xl pt-3 mt-12">
        <nav className="flex justify-center space-x-4 lg:space-x-8">
          <Link href="/" className={`text-black ${pathname === '/' ? 'font-bold' : 'font-normal'}`}>
            Accueil
          </Link>
          <Link
            href="/vision"
            className={`text-black ${pathname === '/vision' ? 'font-bold text-2xl' : 'font-black'}`}
          >
            Notre vision
          </Link>
          <Link href="/products" className={`text-black ${pathname === '/products' ? 'font-bold' : 'font-normal'}`}>
            Nos produits
          </Link>
          <Link href="/services" className={`text-black ${pathname === '/services' ? 'font-bold' : 'font-normal'}`}>
            Nos services
          </Link>
          <Link href="/contact" className={`text-black ${pathname === '/contact' ? 'font-bold' : 'font-normal'}`}>
            Contact
          </Link>
        </nav>
      </div>

      <div className="relative z-5 flex flex-col items-center justify-center h-full text-center text-white rounded-xl w-full max-w-4xl px-4 lg:px-0">
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-[32px] sm:text-[40px] w-full sm:w-[70%] font-extrabold text-green-500">
            <Reveal>Notre Communauté</Reveal>
          </h1>
          <Reveal>
            <p className="mt-2 text-[18px] sm:text-[24px] max-w-lg sm:max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Reveal>
        </div>
      
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-0 px-4">
          <div className="flex space-x-0">
            <Link href="/plastikoo-educ">
              <Button className={`rounded-none px-4 sm:px-6 py-2 border-none ${getButtonClasses('/plastikoo-educ')}`}>
                Plastikoo Educ
              </Button>
            </Link>
            <Link href="/discussion">
              <Button className={`rounded-none px-4 sm:px-6 py-2 border-none ${getButtonClasses('/discussion')}`}>
                Discussion
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
