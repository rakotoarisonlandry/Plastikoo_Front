"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slideshow from "../slideshow/Slideshow";
import { Button } from "../../ui/button";
import { Reveal } from "../../utils/Reveal";
import SocioLink from "../linkSocio/SocioLink";
type Props = {};

function Homepage({}: Props) {
  const slideImages = [
    {
      url: "/slide3.png",
      caption: "Slide 1",
    },
    {
      url: "/slide1.png",
      caption: "Slide 2",
    },
    {
      url: "/slide2.png",
      caption: "Slide 3",
    },
  ];

  return (
    <div className="relative items-center justify-center h-[65vh] w-full overflow-hidden">
<<<<<<< Updated upstream
      <Slideshow images={slideImages} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 pt-14 rounded-xl">
        {/* Desktop and large screens */}
=======
      <Slideshow />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-20 pt-14">
        {/* Desktop and large screens layout */}
>>>>>>> Stashed changes
        <div className="hidden lg:flex flex-col items-center">
          <h1 className="text-[40px] lg:text-[40px] xl:text-[40px] w-[70%] font-extrabold leading-tight">
            <Reveal>Ensemble,</Reveal>
          </h1>
          <Reveal>
<<<<<<< Updated upstream
            <p className="mt-2 text-[36px]">
              Offrons une deuxième vie aux plastiques,
            </p>
            <p className="text-[36px]">
              Bâtissons un avenir durable pour Madagascar.
=======
            <p className="mt-2 text-[36px] lg:text-[40px] xl:text-[36px] leading-tight">
              NOUS POURRONS BÂTIR UN AVENIR PROPRE ET DURABLE
            </p>
            <p className="text-[36px] lg:text-[36px] xl:text-[36px] leading-tight">
              BRIQUE APRÈS BRIQUE
>>>>>>> Stashed changes
            </p>
          </Reveal>
          <SocioLink />
        </div>

        {/* Tablet and smartphone layout */}
<<<<<<< Updated upstream
        
=======
        <div className="flex lg:hidden flex-col items-center">
          <h1 className="text-[28px] sm:text-[32px] w-[90%] font-extrabold leading-tight">
            <Reveal>Ensemble,</Reveal>
          </h1>
          <Reveal>
            <p className="mt-2 text-[24px] sm:text-[28px] leading-snug">
              Offrons une deuxième vie aux plastiques,
            </p>
            <p className="text-[24px] sm:text-[28px] leading-snug">
              Bâtissons un avenir durable pour Madagascar.
            </p>
          </Reveal>
          <SocioLink />
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default Homepage;
