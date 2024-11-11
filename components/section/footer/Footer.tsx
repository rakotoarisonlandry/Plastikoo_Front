import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocioLink from "../linkSocio/SocioLink";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Descriptions } from "antd";
import { MdGpsFixed } from "react-icons/md";
type Props = {};

const listContact = [
  {
    icon: <MdOutlineMailOutline />,
    Descriptions: "akory@plastikoo.mg",
  },
  {
    icon: <FaPhoneAlt />,
    Descriptions: "+261 37 81 580 03 ",
  },
  {
    icon: <MdGpsFixed />,
    Descriptions: "Antananarivo,Analakely ",
  },
];

const listFooter = [
  {
    titre: "Informations:",
    items: ["Ce que nous faisons", "Notre mission", "Nos engagement"],
  },
  {
    titre: "Nos produits:",
    items: ["Briques", "Tuile", "Tiny house"],
  },
  {
    titre: "Notre communauté:",
    items: ["Récolte", "Traitement", "Montage & assemblage"],
  },
];

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary text-white w-full p-10 sm:p-14">
      <div className="flex flex-col md:flex-row justify-around items-center relative space-y-8 md:space-y-0">
        <div className="absolute w-full md:w-auto md:flex-1">
          <Image
            src="/bgFooter.png"
            alt="background"
            width="350"
            height="350"
            className="absolute right-0 hidden md:block"
          />
        </div>
        <div className="w-full md:w-64 flex flex-col items-start">
          <Image
            src="/whiteLogo.png"
            alt="logo"
            width={200}
            height={200}
            className="mb-6"
          />
          <div className="gap-6 mb-6">
            {listContact.map((contact, key) => (
              <div key={key} className="space-x-4 flex mb-3 items-center">
                <div className="bg-dark rounded-full p-2">{contact.icon}</div>
                <p>{contact.Descriptions}</p>
              </div>
            ))}
          </div>
          <SocioLink />
        </div>

        <div className="lg:grid hidden grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto">
          {listFooter.map((item, key) => (
            <div key={key} className="text-center md:text-left">
              <h1 className="font-bold text-[18px] md:text-[20px] mb-4">
                {item.titre}
              </h1>
              <ul className="space-y-2">
                {item.items.map((listItem, index) => (
                  <li key={index}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white text-center pt-12 md:pt-24 text-[13px] md:text-[15px]">
        <p>www.plastikoo.mg / 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
