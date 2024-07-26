import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Reveal } from "../utils/Reveal";
import { RevealLeft } from "../utils/RevealLeft";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const SocioLink = (props: Props) => {
  return (
    <div className="flex justify-center z-40  mt-24">
      <div className="flex w-60 justify-center items-center space-x-4 ">
        <RevealLeft>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white hover:scale-x-125 hover:scale-y-125 transition duration-500   text-primary rounded-full p-2">
              <FaFacebookF />
            </div>
          </Link>
        </RevealLeft>
        <RevealLeft>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white hover:scale-x-125 hover:scale-y-125 transition duration-500  text-primary rounded-full p-2">
              <AiFillInstagram />
            </div>
          </Link>
        </RevealLeft>
        <RevealLeft>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white hover:scale-x-125 hover:scale-y-125 transition duration-500  text-primary rounded-full p-2">
              <FaLinkedin />
            </div>
          </Link>
        </RevealLeft>
        <RevealLeft>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white hover:scale-x-125 hover:scale-y-125 transition duration-500  text-primary rounded-full p-2">
              <FaYoutube />
            </div>
          </Link>
        </RevealLeft>
      </div>
    </div>
  );
};

export default SocioLink;
