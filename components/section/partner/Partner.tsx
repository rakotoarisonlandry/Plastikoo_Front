import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const ListImage = [
  {
    imgUrl: "/amazon.png",
  },
  {
    imgUrl: "/Nokia.png",
  },
  {
    imgUrl: "/ANDAO.png",
  },
  {
    imgUrl: "/orange-finale.png",
  },
  {
    imgUrl: "/STUDIO.png",
  },
  {
    imgUrl: "/RAVINALA.png",
  },
];

const Partner = ({}: Props) => {
  return (
    <div className=" mb-32">
      <div className="bg-primary h-2 w-[10%] mx-auto" />
      <div className="bg-secondary w-full mb-20">
        <h1 className="ml-[15%] text-[28px] pt-5 pb-5 lg:pb-0 lg:text-[40px] lg:pt-11 text-white font-black">
          Nos contributions ODD
        </h1>
        <div className="bg-secondary w-full flex flex-col items-center justify-center text-center overflow-hidde px-10 sm:p-10 md:p-16 lg:p-24">
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full lg:w-[80%] gap-y-3 gap-x-3 lg:gap-x-9">
            <Image src="/F-WEB1.png" alt="" width="500" height="500" />
            <Image src="/F-WEB2.png" alt="" width="500" height="500" />
            <Image src="/F-WEB3.png" alt="" width="500" height="500" />
          </div>
        </div>
      </div>

      <h2 className="text-center  mb-10 lg:mb-0 text-3xl font-bold text-secondary ">
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
            className="flex items-center justify-center mx-4 md:mx-6 w-[120px] md:w-[180px] lg:w-[200px]"
          >
            <Image
              src={item.imgUrl}
              width={120}
              height={120} // Image height for small screens
              alt={`Partner ${index + 1}`}
              className="h-[120px] w-[120px] md:h-[170px] md:w-[170px] object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partner;
