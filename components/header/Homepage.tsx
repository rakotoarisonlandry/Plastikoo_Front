"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slideshow from "../slideshow/Slideshow";
import { Button } from "../ui/button";
import { Reveal } from "../utils/Reveal";
import { RevealLeft } from "../utils/RevealLeft";
import SocioLink from "../linkSocio/SocioLink";
type Props = {};

function Homepage({}: Props) {
  return (
    <div className="relative items-center justify-center h-[85vh] mr-5 ml-5 rounded-xl overflow-hidden">
      <Slideshow />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 pt-28 rounded-xl">
        <h1 className="text-[40px] w-[70%] font-bold">
          <Reveal>Ensemble,</Reveal>
        </h1>
        <Reveal>
          <p className="mt-2 text-[20px]">
            Offrons une deuxième vie aux plastiques,
          </p>
          <p className="text-[20px]">
            Bâtissons un avenir durable pour Madagascar.
          </p>
        </Reveal>
        <Reveal>
          <div className="pt-8">
            <Link href="/community">
              <Button className="bg-primary text-[15px] text-white hover:scale-x-110 hover:scale-y-105  transition duration-300">
                Notre communauté
              </Button>
            </Link>
          </div>
        </Reveal>
        <SocioLink />
      </div>
    </div>
  );
}

export default Homepage;
