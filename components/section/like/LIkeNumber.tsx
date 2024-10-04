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
    suffix: " tonnes",
    description: "Déchets ménagers produits chaque année à Madagascar",
  },
  {
    number: 68985,
    suffix: " tonnes",
    description: "Quantité annuelle de déchets plastiques produits.",
  },
  {
    number: 10,
    suffix: " %",
    description: "Pourcentage de déchets plastiques recyclables.",
  },
  {
    number: 450,
    suffix: " à 1000 ans",
    description: "Durée de dégradation des déchets plastiques.",
  },
];

const LIkeNumber = (props: Props) => {
  const [inViewStates, setInViewStates] = useState<boolean[]>(new Array(card.length).fill(false));

  const handleInViewChange = useCallback((inView: boolean, index: number) => {
    setInViewStates((prev) => prev.map((state, i) => (i === index ? inView : state)));
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
        <InViewMonitor key={key} index={key} onInViewChange={handleInViewChange}>
          {inViewStates[key] && (
            <Reveal>
              <div className="bg-primary hover:translate-y-3 transition duration-300 w-52 h-52 flex flex-col items-center justify-center z-30 text-white pt-5 pb-5 rounded-xl">
                {cardlist.number === 3000000 ? (
                  <h1 className="font-extrabold text-xl text-center pb-1"> {/* Taille ajustée pour 3,000,000 */}
                    <CountUp start={0} end={cardlist.number} duration={4} separator="" />
                    {cardlist.suffix}
                  </h1>
                ) : (
                  <h1 className="font-extrabold text-2xl text-center pb-1"> {/* Taille normale pour les autres */}
                    <CountUp start={0} end={cardlist.number} duration={4} separator="" />
                    {cardlist.suffix}
                  </h1>
                )}
                <p className="font-semibold text-center mt-2 text-xs"> {/* Taille du texte réduite */}
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

const InViewMonitor: React.FC<InViewMonitorProps> = ({ index, onInViewChange, children }) => {
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
