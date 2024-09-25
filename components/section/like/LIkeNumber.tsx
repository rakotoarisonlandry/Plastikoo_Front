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
    suffix: "T",
    description:
      "Déchets ménagers produits chaque année à Madagascar ",
  },
  {
    number: 68985,
    suffix: "T",
    description: "Quantité annuelle de déchets plastiques produits. ",
  },
  {
    number: 10,
    suffix: "%",
    description: "Pourcentage de déchets plastiques recyclables",
  },
  {
    number: 1000,
    suffix: "",
    description: "Nombre de déchets collecté par Plastikôo",
  },
];

const LIkeNumber = (props: Props) => {
  const [inViewStates, setInViewStates] = useState<boolean[]>(
    new Array(card.length).fill(false)
  );

  // Utiliser useCallback pour éviter que la fonction ne soit recréée à chaque rendu
  const handleInViewChange = useCallback((inView: boolean, index: number) => {
    setInViewStates((prev) =>
      prev.map((state, i) => (i === index ? inView : state))
    );
  }, []);

  return (
    <div className="flex justify-center gap-7 mt-24 mb-36 relative">
      <Image
        src="/logotransparent.png"
        alt="logotransparent"
        width="300"
        height="300"
        className="mt-[-60px] absolute left-8 z-10"
      />
      {card.map((cardlist, key) => (
        <InViewMonitor
          key={key}
          index={key}
          onInViewChange={handleInViewChange}
        >
          {inViewStates[key] && (
            <Reveal>
              <div className="bg-primary hover:translate-y-3 transition duration-300 w-48 h-44 flex flex-col items-center justify-center z-30 text-white pt-5 pb-5 pr-5 pl-5 rounded-xl">
                <h1 className="font-extrabold text-3xl pb-2">
                  <CountUp
                    start={0}
                    end={cardlist.number}
                    duration={4}
                    suffix={cardlist.suffix}
                  />
                </h1>
                <p className="font-semibold text-center">
                  {cardlist.description}
                </p>
              </div>
            </Reveal>
          )}
        </InViewMonitor>
      ))}
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
