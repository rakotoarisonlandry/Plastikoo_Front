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
    name: "RANDRIANARINAIVO I. Asandratra",
    role: "RECHERCHE - DÉVELOPPEMENT",
    image: "/ASAH.png",
    bgColor: "bg-blue-500",
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
    name: "RANDRIAMIHAJA Yvon",
    role: "GÉNIE MÉCANIQUE",
    image: "/YVON.png",
    bgColor: "bg-blue-500",
  },
  {
    name: "RAZAFINDRAIBE Vanessa",
    role: "DESIGN UI & UX",
    image: "/VANESSA.png",
    bgColor: "bg-orange-500",
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
    <div className="">
      <div className="bg-primary  mb-10 flex flex-col items-center justify-center text-center overflow-hidden h-auto px-10 py-8 sm:p-10 md:p-16 lg:p-24">
        <Reveal>
          <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-5">
            Notre vision
          </h1>
        </Reveal>
        {/* <Reveal> */}
        <h1 className="text-white mb-6 text-[16px] lg:text-[28px] px-4 sm:text-[16px] md:text-[18px] font-semibold sm:px-10 md:px-16 lg:px-24">
          Une planète où le plastique ne pollue plus, mais bâtit des
          possibilités infinies.
        </h1>
        {/* </Reveal> */}
      </div>
      <Reveal>
        <h1 className="text-center text-primary text-3xl font-black mb-8">
          Notre Équipe
        </h1>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-2 mb-9 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col mx-3 items-center text-center"
          >
            <div
              className={`lg:w-[58%] lg:h-[58%] overflow-hidden pb-3 lg:pb-8 flex items-center justify-center`}
            >
              <Image
                src={member.image}
                width="90"
                height="90"
                alt={member.name}
                className="w-full h-full"
              />
            </div>
            <h2 className="mt-1 lg:mt-4 text-[16px] lg:text-lg font-bold">
              {member.name}
            </h2>
            <p className="text-gray-700 text-[12px] lg:text-[20px]">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
