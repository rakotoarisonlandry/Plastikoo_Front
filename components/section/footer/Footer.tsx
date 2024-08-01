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
    Descriptions: "Plastikoo@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    Descriptions: "+216 32 44 401 81 ",
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
    <footer className="bg-primary text-white w-full p-14 ">
      <div className="flex justify-around items-center relative">
        <Image
          src="/bgFooter.png"
          alt="background"
          width="350"
          height="350"
          className="absolute bottom-[-10rem] right-0"
        />
        <div className="w-64">
          <Image src="/whiteLogo.png" alt="logo" width="200" height="200" />
          <div className="gap-6">
            {listContact.map((contact, key) => (
              <div key={key} className="space-x-4 flex mb-3 items-center">
                <div className="bg-dark rounded-full p-2">{contact.icon}</div>
                <p>{contact.Descriptions}</p>
              </div>
            ))}
          </div>
          <div className="text-white text-[15px] font-semibold">
            Visitez nos réseau sociaux
          </div>
          <SocioLink />
        </div>

        {listFooter.map((item, key) => (
          <div key={key} className="">
            <h1 className="font-bold text-[20px]">{item.titre}</h1>
            <ul>
              {item.items.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-white text-center pt-24 text-[15px]">
        <p>www.plastikoo.mg / 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
