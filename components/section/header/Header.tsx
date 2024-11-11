"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { usePathname } from "next/navigation";
import { Reveal } from "../../utils/Reveal";

type Props = {};

function Header({}: Props) {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `px-4 py-2 text-sm font-medium ${
      pathname === path ? "text-primary bg-white" : "text-white bg-primary"
    }`;

  return (
    <div className="block mb-20">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 backdrop-filter backdrop-blur-lg bg-opacity-70">
        <nav className="max-w-7xl py-1.5 pt-6 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop layout */}
          <div className="hidden lg:flex items-center justify-center space-x-32 h-20">
            <Reveal>
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-black font-bold text-lg">
                  <Image src="/logo.png" width="170" height="170" alt="logo" />
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
            <Reveal>
              <Link href="/community">
                <Button className="bg-secondary text-white">
                  Notre communauté
                </Button>
              </Link>
            </Reveal>
          </div>

          {/* Tablet and smartphone layout */}
          <div className="flex flex-col lg:hidden items-center space-y-6">
            <Reveal>
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-black font-bold text-lg">
                  <Image
                    src="/logo.png"
                    width="120"
                    height="120"
                    alt="logo"
                    className="w-24 h-24"
                  />
                </Link>
              </div>
            </Reveal>
            <p className="text-primary text-center font-bold text-sm">
              Votre engagement pour un avenir durable se construit ici !
            </p>
            <div className="flex flex-col space-y-3 items-center font-semibold">
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
            <Reveal>
              <Link href="/community">
                <Button className="bg-secondary text-white text-xs py-2 px-4">
                  Notre communauté
                </Button>
              </Link>
            </Reveal>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
