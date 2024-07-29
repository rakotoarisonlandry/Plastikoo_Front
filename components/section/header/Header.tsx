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
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === path
        ? "text-black font-bold"
        : "text-gray-700 hover:text-black"
    }`;

  return (
    <div className="block mb-20">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        {/* <Reveal> */}
        <nav className="max-w-7xl py-1.5 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Reveal>
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-black font-bold text-lg">
                  <Image src="/logo.png" width="170" height="170" alt="logo" />
                </Link>
              </div>
            </Reveal>
            <div className="flex items-center font-semibold space-x-8">
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
                <Link href="/contact" className={linkClasses("/contact")}>
                  Contact
                </Link>
              </Reveal>
              <Reveal>
                <Link href="/community" className={linkClasses("/community")}>
                  <Button className="bg-secondary text-white">
                    Notre communauté
                  </Button>
                </Link>
              </Reveal>
            </div>
          </div>
        </nav>
        {/* </Reveal> */}
      </header>
    </div>
  );
}

export default Header;
