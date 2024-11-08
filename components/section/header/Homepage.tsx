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
      <Slideshow images={slideImages} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 pt-14 rounded-xl">
        {/* Desktop and large screens */}
        <div className="hidden lg:flex flex-col items-center">
          <h1 className="text-[40px] w-[70%] font-extrabold">
            <Reveal>Ensemble,</Reveal>
          </h1>
          <Reveal>
            <p className="mt-2 text-[36px]">
              Offrons une deuxième vie aux plastiques,
            </p>
            <p className="text-[36px]">
              Bâtissons un avenir durable pour Madagascar.
            </p>
          </Reveal>
          <SocioLink />
        </div>

        {/* Tablet and smartphone layout */}
        
      </div>
    </div>
  );
}

export default Homepage;
