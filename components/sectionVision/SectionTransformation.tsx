import Image from 'next/image';
import { Reveal } from "../utils/Reveal";

type Props = {}

const SectionTransformation: React.FC<Props> = () => {
  return (
    <section className="py-16 px-4 bg-white text-dark">
      <div className="max-w-6xl mx-auto">
        <Reveal>
        

        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Transformation</h2>
        </Reveal>
        <Reveal>


        <p className="text-lg text-center text-gray-700 mb-12">
          Plastiko donne une deuxième vie à partir de nos matériaux recyclés (briques, tuiles, portes etc.) en les transformant en produits finis tels que des maisons miniatures, des murs de séparation et d'autres structures essentielles. En transformant ces plastiques en matériaux de construction, nous fournissons des solutions durables, abordables et un design attractif pour tous types de construction.
        </p>
        </Reveal>


        <div className="flex flex-col lg:flex-row mb-12">

          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <Image 
              src="/Rectangle.png" 
              alt="Maison recyclée" 
              width={400}
              height={400}
              layout="responsive"
              className="rounded-lg shadow-lg object-contain" 
            />
          </div>


          <div className="w-full lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Nos structures</h3>
            <p className="text-lg text-gray-700 mb-6">
              Nos structures, construites à partir de nos briques, se distinguent par leur qualité et leur efficacité pour des logements et des aménagements intérieurs modernes et innovants conçus pour être écologiques et économiques. Elles sont résistantes, faciles à assembler et personnalisables selon les besoins des clients. Nous proposons diverses options, comme des Tiny Houses, Tiny Libraries et Tiny Classrooms, avec de nombreux avantages.
            </p>


            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="text-4xl font-bold text-green-600">01</span>
                <p className="ml-4 text-lg text-black font-normal">Coût réduit : nos maisons sont abordables et accessibles à tous, avec des coûts de construction réduits grâce à l'assemblage de briques plastiques recyclées, sans utilisation de ciment ou de matériaux traditionnels.</p>
              </li>
              <li className="flex items-start">
                <span className="text-4xl font-bold text-green-600">02</span>
                <p className="ml-4 text-lg text-black font-normal">Design attractif : nos maisons sont construites avec un design moderne et innovant, offrant une esthétique plaisante et un choix de différentes couleurs selon les préférences des clients.</p>
              </li>
              <li className="flex items-start">
                <span className="text-4xl font-bold text-green-600">03</span>
                <p className="ml-4 text-lg text-black font-normal">Mode de vie simple et paisible : ces maisons sont conçues pour vous offrir une vie tranquille et sereine, favorisant un mode de vie simple et un espace apaisant et inspirant, idéal pour la concentration et le bien-être.</p>
              </li>
              <li className="flex items-start">
                <span className="text-4xl font-bold text-green-600">04</span>
                <p className="ml-4 text-lg text-black font-normal">Durable : nos structures sont conçues pour résister aux conditions météorologiques variées et garantir une longue durée de vie.</p>
              </li>
            </ul>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row mb-12">

          <div className="w-full lg:w-1/2 lg:pr-12">
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="text-4xl font-bold text-green-600">05</span>
                <p className="ml-4 text-lg text-black font-normal">Facilité de construction : nous avons conçu nos matériaux pour une installation simple et facile à assembler permettant à chacun de construire son logement sans avoir besoin d'un maçon ce qui réduit les coûts de construction.</p>
              </li>
              <li className="flex items-start">
                <span className="text-4xl font-bold text-green-600">06</span>
                <p className="ml-4 text-lg text-black font-normal">Résistance à l'eau et à l'humidité : nos matériaux sont fabriqués pour être imperméables, ce qui les rend adaptés aux environnements humides. Ils assurent une protection efficace contre l'humidité et les infiltrations d'eau.</p>
              </li>
              <li className="flex items-start">
                <span className="text-4xl font-bold text-green-600">07</span>
                <p className="ml-4 text-lg text-black font-normal">Isolation thermique et sonore : nos maisons, bibliothèque et salles de classe offrent une excellente isolation thermique et acoustique, assurant un confort et un environnement agréable.</p>
              </li>
              <li className="flex items-start">
                <span className="text-4xl font-bold text-green-600">08</span>
                <p className="ml-4 text-lg text-black font-normal">Conformité aux normes : Plastikö s'engage à fournir des solutions de construction modernes qui respectent les normes de qualité et de sécurité élevées, garantissant ainsi des projets fiables et sécurisés.</p>
              </li>
              <li className="flex items-start">
                <span className="text-4xl font-bold text-green-600">09</span>
                <p className="ml-4 text-lg text-black font-normal">Impact environnemental : En utilisant des matériaux recyclés, chaque projet de Plastikö contribue à réduire les déchets plastiques et à préserver l'environnement tout en favorisant des pratiques de construction durable et responsable.</p>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <Image 
              src="/Rectangle107.png" 
              alt="Tiny house" 
              width={400}
              height={400}
              layout="responsive"
              className="rounded-lg shadow-lg object-contain" 
            />
          </div>
        </div>


        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-full lg:w-1/2 px-2 mb-4 text-center">
            <h4 className="text-lg font-bold text-center text-black mb-2">Notre tiny classroom</h4>
            <Image 
              src="/classroom.png" 
              alt="Tiny classroom" 
              width={400}
              height={400}
              layout="responsive"
              className="w-auto h-auto mx-auto rounded-lg shadow-lg object-contain" 
            />
          </div>
          <div className="w-full lg:w-1/2 px-2 text-center">
            <h4 className="text-lg font-bold text-center text-black mb-2">Notre tiny library</h4>
            <Image 
              src="/classroom1.png" 
              alt="Tiny library" 
              width={400}
              height={400}
              layout="responsive"
              className="w-auto h-auto mx-auto rounded-lg shadow-lg object-contain" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionTransformation;
