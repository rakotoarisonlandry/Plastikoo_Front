import Image from 'next/image';
import { Reveal } from "../utils/Reveal";
import { RevealLeft } from "../utils/RevealLeft";

type Props = {}

const SectionVision: React.FC<Props> = () => {
  return (
    <section className="py-16 px-4 bg-[#00D45F]"> {/* Fond bleu ajouté ici */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-8"> {/* Conteneur central blanc */}
        
        <Reveal>
          <h2 className="text-4xl font-bold text-center text-[#00D45F] mb-8">Transformation</h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Plastiko s'engage à transformer ces déchets plastiques en matériaux de construction utiles et durables. Une fois collectés, les plastiques passent par un processus de tri et de nettoyage pour éliminer les impuretés et s'assurer la qualité des matériaux. Ces plastiques sont ensuite fondus et moulés en une variété de produits tels que des Briques, des Tuiles, des Portes et d'autres matériaux de construction écologiques. Ces produits recyclés sont conçus pour être résistants, durables et adaptés à divers projets de construction.
          </p>
        </Reveal>

        <Reveal>
          <h3 className="text-2xl font-bold text-center text-[#00D45F] mb-4">Nos matériaux de construction</h3>
          <p className="text-lg text-center text-gray-700 mb-12">
            Nos matériaux de construction sont fabriqués à partir de plastiques recyclés, offrant une alternative écologique et durable aux matériaux traditionnels. Chaque produit est conçu pour répondre aux normes de qualité les plus élevées, garantissant une longévité et une performance exceptionnelle dans divers projets de construction.
          </p>
        </Reveal>

        <Reveal>
          <h4 className="text-xl font-bold text-center text-black mb-8">Ces avantages</h4>
        </Reveal>

        <Reveal>
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row items-start">

              <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-4 lg:mb-0">
                <Image src="/brique1.png" alt="Matériaux de construction" width={400} height={400} className="w-auto h-auto max-h-64 max-w-full" />
              </div>

              <div className="w-full lg:w-2/3">
                <ul className="list-none space-y-4">
                  <li className="flex items-start">
                    <h4 className="text-4xl font-bold text-[#00D45F] ">01</h4>
                    <p className="ml-4 text-lg text-black font-normal">Durabilité : Nos matériaux sont conçus pour durer dans le temps, résistants aux conditions climatiques variées ce qui les rend idéaux pour des projets de construction à long terme.</p>
                  </li>
                  <li className="flex items-start">
                    <h4 className="text-4xl font-bold text-[#00D45F] ">02</h4>
                    <p className="ml-4 text-lg text-black font-normal">Coût réduit et abordable : Nos produits offrent une solution économique rendant les constructions durables accessibles à tous, tout en maintenant une excellente qualité.</p>
                  </li>
                  <li className="flex items-start">
                    <h4 className="text-4xl font-bold text-[#00D45F] ">03</h4>
                    <p className="ml-4 text-lg text-black font-normal">Facilité de construction : Les produits de Plastiko sont conçus pour un assemblage simple et rapide. Leur structure modulaire facilite l'installation, réduisant le besoin en ciment et autres matériaux de liaison.</p>
                  </li>
                  <li className="flex items-start">
                    <h4 className="text-4xl font-bold text-[#00D45F] ">04</h4>
                    <p className="ml-4 text-lg text-black font-normal">Design attractif : Nos produits se distinguent par leur design moderne et innovant. Offrant une variété de couleurs et un aspect esthétique unique, ils ajoutent une touche d'élégance et de personnalité à tout projet de construction.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row-reverse items-start">

              <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-4 lg:mb-0">
                <Image src="/brique4.png" alt="Matériaux de construction" width={400} height={400} className="w-auto h-auto max-h-64 max-w-full" />
              </div>

              <div className="w-full lg:w-2/3">
                <ul className="list-none space-y-4">
                  <li className="flex items-start">
                    <h4 className="text-4xl font-bold text-[#00D45F] ">05</h4>
                    <p className="ml-4 text-lg text-black font-normal">Écologique : Plastiko s'engage dans une démarche écologique en utilisant des plastiques recyclés. Chaque produit contribue à la réduction des déchets plastiques et à la préservation de l'environnement.</p>
                  </li>
                  <li className="flex items-start">
                    <h4 className="text-4xl font-bold text-[#00D45F] ">06</h4>
                    <p className="ml-4 text-lg text-black font-normal">Résistance à l'eau et à l'humidité : Les matériaux recyclés sont traités pour résister à l'humidité. Ils conviennent parfaitement aux environnements humides et aux conditions climatiques variées, offrant une durabilité accrue dans diverses conditions climatiques.</p>
                  </li>
                  <li className="flex items-start">
                    <h4 className="text-4xl font-bold text-[#00D45F] ">07</h4>
                    <p className="ml-4 text-lg text-black font-normal">Légèreté : Nos produits sont fabriqués pour être légers, ce qui facilite leur manipulation et leur transport en réduisant les coûts logistiques et simplifie l'installation.</p>
                  </li>
                  <li className="flex items-start">
                    <h4 className="text-4xl font-bold text-[#00D45F] ">08</h4>
                    <p className="ml-4 text-lg text-black font-normal">Isolation thermique et sonore : Nos matériaux offrent une excellente isolation. Ils aident à maintenir une température intérieure confortable tout en minimisant les bruits extérieurs, créant ainsi un environnement plus calme et agréable.</p>
                  </li>
                  <li className="flex items-start">
                    <h4 className="text-4xl font-bold text-[#00D45F]">09</h4>
                    <p className="ml-4 text-lg text-black font-normal">Réutilisabilité : Les briques Plastiko sont réutilisables et recyclables, offrant la possibilité de démonter et de réutiliser les structures dans de nouveaux projets, ou de les recycler à nouveau.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center mb-12">
            <div className="w-full lg:w-1/2 px-2 mb-4 text-center">
              <h4 className="text-lg font-bold text-center text-[#00D45F] mb-2">Notre tuile en plastique recyclé</h4>
              <Image src="/brique2.png" alt="Tuile en plastique recyclé" width={400} height={400} className="w-auto h-auto max-h-64 max-w-full mx-auto" />
            </div>
            <div className="w-full lg:w-1/2 px-2 text-center">
              <h4 className="text-lg font-bold text-center text-[#00D45F] mb-2">Notre porte en plastique recyclé</h4>
              <Image src="/brique3.png" alt="Porte en plastique recyclé" width={400} height={400} className="w-auto h-auto max-h-64 max-w-full mx-auto" />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default SectionVision;
