"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slideshow from "../slideshow/Slideshow";
import { Button } from "../../ui/button";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import SocioLink from "../linkSocio/SocioLink";
// import {montserratBlack40, montserratMedium36} from '../../../app/layout'
type Props = {};

function Homepage({}: Props) {
  return (
    <div className="relative items-center justify-center h-[65vh] w-full overflow-hidden">
      <Slideshow />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-20 pt-14">
        {/* Desktop and large screens layout */}
        <div className="hidden lg:flex flex-col items-center">
          <h1 className="text-[40px] font-black" style={{ fontFamily: 'Montserrat', fontWeight: 900 }}>
            <Reveal>Ensemble,</Reveal>
          </h1>
          <Reveal>
            <p className="text-[36px] font-medium" style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
              NOUS POURRONS BÂTIR UN AVENIR PROPRE ET DURABLE
            </p>
            <p className="text-[36px] font-medium" style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
              BRIQUE APRÈS BRIQUE
            </p>
          </Reveal>
          <SocioLink />
        </div>

        {/* Tablet and smartphone layout */}
        <div className="flex lg:hidden flex-col items-center">
          <h1 className="text-[28px] sm:text-[32px] font-black" style={{ fontFamily: 'Montserrat', fontWeight: 900 }}>
            <Reveal>Ensemble,</Reveal>
          </h1>
          <Reveal>
            <p className="mt-2 text-[24px] sm:text-[28px] font-medium" style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
              NOUS POURRONS BÂTIR UN AVENIR PROPRE ET DURABLE
            </p>
            <p className="text-[24px] sm:text-[28px] font-medium" style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
              BRIQUE APRÈS BRIQUE
            </p>
          </Reveal>
          <SocioLink />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
