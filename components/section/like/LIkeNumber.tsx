import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Reveal } from "../../utils/Reveal";

type Props = {};

type CardType = {
  number: number;
  stats: string;
  suffix: string;
  description: string;
};

const card: CardType[] = [
  {
    number: 3000000,
    stats: "3 000 000",
    suffix: "tonnes",
    description: "Déchets ménagers produits chaque année à Madagascar",
  },
  {
    number: 68985,
    stats: "68 985",
    suffix: "tonnes",
    description: "Quantité annuelle de déchets plastiques produits.",
  },
  {
    number: 10,
    stats: "10%",
    suffix: " %",
    description: "Pourcentage de déchets plastiques recyclables",
  },
  {
    number: 450,
    stats: "450 à 1000 ans",
    suffix: "ans",
    description: "Année de décomposition",
  },
];

const LIkeNumber = (props: Props) => {
  const [inViewStates, setInViewStates] = useState<boolean[]>(
    new Array(card.length).fill(false)
  );

  const handleInViewChange = useCallback((inView: boolean, index: number) => {
    setInViewStates((prev) =>
      prev.map((state, i) => (i === index ? inView : state))
    );
  }, []);

  return (
    <div className="bg-secondary flex flex-col items-center justify-center mt-4 text-center overflow-hidden px-6 sm:px-10 md:px-16 lg:px-24 py-8">
      <div className="flex flex-col sm:flex-row sm:gap-6 gap-y-6 w-full justify-center items-center relative">
        {card.map((cardlist, key) => (
            <InViewMonitor
              key={key}
              index={key}
              onInViewChange={handleInViewChange}
            >
              {inViewStates[key] && (
                // <Reveal>
                //   <div 
                //     className="bg-primary hover:translate-y-3 transition duration-300 flex flex-col items-center justify-between z-50 text-white p-2 rounded-3xl mb-6 sm:w-64 lg:w-48 w-full"
                //   >
                //     <div className="flex space-x-1 items-center">
                //       <p className="hidden font-extrabold">+</p>
                //       <h1 
                //         className="font-extrabold text-[14px] sm:text-[20px] lg:text-[25px]"
                //         style={{
                //           fontFamily: 'Montserrat',
                //           fontWeight: 900,
                //           fontSize: 30,
                //           minHeight: "40px"
                //         }}
                //       >
                //         {cardlist.stats}
                //       </h1>
                //     </div>
                //     <h1 
                //       className="text-[20px] sm:text-[25px] lg:text-[30px]"
                //       style={{
                //         fontFamily: 'Montserrat', 
                //         fontWeight: 500, 
                //         fontSize: 30
                //       }}
                //     >
                //     </h1>
                //     <p
                //       className="text-[12px] sm:text-[15px] lg:text-[18px] font-semibold text-center font-montserrat"
                //       style={{
                //         fontFamily: 'Montserrat',
                //         fontWeight: 600,
                //         fontSize: 20
                //       }}
                //     >
                //       {cardlist.description}
                //     </p>
                //   </div>
                // </Reveal>
                <div 
                  className="bg-primary hover:translate-y-3 transition duration-300 flex flex-col items-center justify-between z-50 text-white p-2 rounded-3xl mb-6 sm:w-64 lg:w-48 w-full"
                >
                  <div className="flex space-x-1 items-center">
                    <p className="hidden font-extrabold">+</p>
                    <h1 
                      className="font-extrabold text-[14px] sm:text-[20px] lg:text-[25px]"
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: 900,
                        fontSize: 30,
                        minHeight: "40px"
                      }}
                    >
                      {cardlist.stats}
                    </h1>
                  </div>
                  <h1 
                    className="text-[20px] sm:text-[25px] lg:text-[30px]"
                    style={{
                      fontFamily: 'Montserrat', 
                      fontWeight: 500, 
                      fontSize: 30
                    }}
                  >
                  </h1>
                  <p
                    className="text-[12px] sm:text-[15px] lg:text-[18px] font-semibold text-center font-montserrat"
                    style={{
                      fontFamily: 'Montserrat',
                      fontWeight: 600,
                      fontSize: 20
                    }}
                  >
                    {cardlist.description}
                  </p>
                </div>
              )}
            </InViewMonitor>
        ))}
      </div>
    </div>
  );
};

type InViewMonitorProps = {
  index: number;
  onInViewChange: (inView: boolean, index: number) => void;
  children: React.ReactNode;
};

const InViewMonitor: React.FC<InViewMonitorProps> = ({
  index,
  onInViewChange,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    onInViewChange(inView, index);
  }, [inView, index, onInViewChange]);

  return <div ref={ref}>{children}</div>;
};

export default LIkeNumber;
