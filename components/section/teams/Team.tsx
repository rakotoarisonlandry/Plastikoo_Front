// import Image from "next/image";
import React from "react";
import { Image } from "antd";
import { Reveal } from "../../utils/Reveal";
type TeamMember = {
  name: string;
  role: string;
  image: string;
  bgColor: string;
};

const team: TeamMember[] = [
  {
    name: "NOMBANISTSOA Sarobidy",
    role: "PROJECT MANAGER",
    image: "/TSITOO.png", 
    bgColor: "bg-green-500",
  },


  {
    name: "Razafindraibe Vanessa",
    role: "DESIGN UI & UX",
    image: "/VANESSA.png", 
    bgColor: "bg-orange-500",
  },

  {
    name: "NIRINAHARIMANANA Sarobidy",
    role: "MANAGEMENT - COMMUNICATION",
    image: "/SAROBIDY.png", 
    bgColor: "bg-orange-500",
  },
  {
    name: "SARRON Sandra",
    role: "MANAGEMENT - COMMUNICATION",
    image: "/SARRON.png", 
    bgColor: "bg-red-500",
  },

  {
    name: "Randrianarinaivo I. Asandratra",
    role: "RECHERCHE - DÉVELOPPEMENT",
    image: "/ASAH.png", 
    bgColor: "bg-blue-500",
  },
  
  {
    name: "Randrianarisoa Yvon",
    role: "GÉNIE MÉCANIQUE",
    image: "/YVON.png", 
    bgColor: "bg-blue-500",
  },
  
  {
    name: "RANDRIANARISON Johns",
    role: "DÉVELOPPEUR",
    image: "/JOHNS.png", 
    bgColor: "bg-green-500",
  },
  {
    name: "RAKOTOARISON Tsaraefadahy Landry Brigea",
    role: "DÉVELOPPEUR",
    image: "/LANDRY.png", 
    bgColor: "bg-red-500",
  },
];

const Team = () => {
  return (
    <div className="p-14">
      <Reveal>
        <h1 className="text-center text-secondary text-3xl font-bold mb-8">
          Notre Équipe
        </h1>
      </Reveal>
      <Reveal>
        <p className="text-dark mt-5 mb-10 text-[15px] pr-96 pl-96 font-semibold text-center">
          Découvrez les visages qui portent notre projet. Chaque membre de notre
          équipe contribue avec passion à faire avancer Plastikôo et à réaliser
          notre vision commune.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className={`w-44 h-44 overflow-hidden  flex items-center justify-center`}
            >
              <Image
                src={member.image}
                width="100"
                height="100"
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-4 text-lg font-bold">{member.name}</h2>
            <p className="text-gray-700">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
