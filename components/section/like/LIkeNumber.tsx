import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Reveal } from "../../utils/Reveal";

type Props = {};

type CardType = {
  number: number;
  suffix: string;
  description: string;
};

const card: CardType[] = [
  {
    number: 3000000,
    suffix: "tonnes",
    description: "Déchets ménagers produits chaque année à Madagascar ",
  },
  {
    number: 68985,
    suffix: "tonnes",
    description: "Quantité annuelle de déchets plastiques produits. ",
  },
  {
    number: 10,
    suffix: " %",
    description: "Pourcentage de déchets plastiques recyclables.",
  },
  {
    number: 450,
    suffix: "ans",
    description: "Nombre de déchets collecté par Plastikôo",
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
    <div className="bg-secondary flex flex-col items-center justify-center mt-4 text-center overflow-hidden px-10 py-8 sm:p-10 md:p-16 lg:p-24">
      <div className="flex justify-center gap-7 w-[50%] relative">
        {card.map((cardlist, key) => (
          <InViewMonitor
            key={key}
            index={key}
            onInViewChange={handleInViewChange}
          >
            {inViewStates[key] && (
              <Reveal>
                <div className=" lg:bg-primary hover:translate-y-3 transition duration-300 lg:w-48 lg:h-48 flex flex-col items-center justify-center z-30 text-white p-1 lg:p-4 rounded-3xl">
                  <div className="lg:block flex space-x-1 items-center">
                    <p className="lg:hidden font-extrabold">+</p>
                    <h1 className="font-extrabold text-[20px] lg:text-[30px] ">
                      <CountUp start={0} end={cardlist.number} duration={4} />
                    </h1>
                  </div>
                  <h1 className="text-[20px] lg:text-[30px] ">
                    {cardlist.suffix}
                  </h1>
                  <p className="font-semibold lg:block hidden text-center">
                    {cardlist.description}
                  </p>
                </div>
              </Reveal>
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
