import React from "react";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RevealLeft } from "../../utils/RevealLeft";
import Link from "next/link";

type Props = {};

const SocioLink = (props: Props) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-3 bg-primary p-2 rounded-lg">
        <RevealLeft>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white text-primary rounded-full p-2 hover:scale-110 transition-transform duration-300">
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
            <div className="bg-white text-primary rounded-full p-2 hover:scale-110 transition-transform duration-300">
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
            <div className="bg-white text-primary rounded-full p-2 hover:scale-110 transition-transform duration-300">
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
            <div className="bg-white text-primary rounded-full p-2 hover:scale-110 transition-transform duration-300">
              <FaYoutube />
            </div>
          </Link>
        </RevealLeft>
      </div>
    </div>
  );
};

export default SocioLink;
