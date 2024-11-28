"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Reveal } from "../utils/Reveal";
import { usePathname } from "next/navigation";
import Header from "../section/header/Header";

type Props = {};

function Accueil({}: Props) {
  const pathname = usePathname();

  const getButtonClasses = (path: string) => {
    if (pathname === path) {
      return "bg-green-500 text-white";
    } else if (pathname === "/community" && path === "/discussion") {
      return "bg-green-500 text-white";
    } else if (pathname === "/community" && path === "/plastikoo-educ") {
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

      <div className="relative z-5 flex flex-col items-center justify-center h-full text-center text-white rounded-xl w-full max-w-4xl px-4 lg:px-0">
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-[32px] sm:text-[40px] w-full sm:w-[70%] font-extrabold text-green-500">
            <Reveal>Notre Communauté</Reveal>
          </h1>
          <Reveal>
            <p className="mt-2 text-[18px] sm:text-[24px] max-w-lg sm:max-w-2xl text-center">
            Ensemble, nous bâtissons un monde plus propre et respectueux de l&lsquo;environnement.
            </p>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-0 px-4">
          <div className="flex space-x-0">
            <Link href="/plastikoo-educ">
              <Button
                className={`rounded-none px-4 sm:px-6 py-2 border-none ${getButtonClasses(
                  "/discussion"
                )}`}
              >
                Plastikoo Educ
              </Button>
            </Link>
            <Link href="/discussion">
              <Button
                className={`rounded-none px-4 sm:px-6 py-2 border-none ${getButtonClasses(
                  "/plastikoo-educ"
                )}`}
              >
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
