import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const ListImage = [
  {
    imgUrl: "/amazon.png",
  },
  {
    imgUrl: "/ODC.png",
  },
  {
    imgUrl: "/ey.png",
  },
  {
    imgUrl: "/orangeMoney.png",
  },
  {
    imgUrl: "/Nokia.png",
  },
];

const Partner = ({}: Props) => {
  return (
    <div className="p-8 mb-32">
      <div className="bg-primary h-2 w-[10%] mb-20 justify-center ml-[45%] items-center"></div>
      <h2 className="text-center text-3xl font-bold text-secondary mb-14">
        Nos Partenaires
      </h2>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        pauseOnClick={true}
        direction="left"
      >
        {ListImage.map((item, index) => (
          <div
            key={index}
            className="flex items-center  overflow-hidden justify-center mx-6"
            style={{ width: "200px" }}
          >
            <Image
              src={item.imgUrl}
              alt={`Partner ${index + 1}`}
              width="170"
              height="170"
              className="h-full object-contain hover:scale-x-105 overflow-hidden scale-y-105 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partner;
