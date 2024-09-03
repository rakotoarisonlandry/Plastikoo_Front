"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slideshow from "../slideshow/Slideshow";
import { Button } from "../../ui/button";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import SocioLink from "../linkSocio/SocioLink";
type Props = {};

function Homepage({}: Props) {
  return (
    <div className="relative items-center justify-center h-[65vh] w-full overflow-hidden">
      <Slideshow />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 pt-14 rounded-xl">
        {/* Desktop and large screens */}
        <div className="hidden lg:flex flex-col items-center">
          <h1 className="text-[40px] w-[70%] font-extrabold">
            <Reveal>Ensemble,</Reveal>
          </h1>
          <Reveal>
            <p className="mt-2 text-[36px]">Offrons une deuxième vie aux plastiques,</p>
            <p className="text-[36px]">Bâtissons un avenir durable pour Madagascar.</p>
          </Reveal>
          <SocioLink />
        </div>

        {/* Tablet and smartphone layout */}
        <div className="flex lg:hidden flex-col items-center">
          <h1 className="text-[28px] w-[90%] font-extrabold">
            <Reveal>Ensemble,</Reveal>
          </h1>
          <Reveal>
            <p className="mt-2 text-[24px]">Offrons une deuxième vie aux plastiques,</p>
            <p className="text-[24px]">Bâtissons un avenir durable pour Madagascar.</p>
          </Reveal>
          <SocioLink />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
