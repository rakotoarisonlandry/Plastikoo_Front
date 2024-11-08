import React from 'react';
import { Montserrat } from 'next/font/google';
import { Reveal } from "../utils/Reveal";
import { RevealLeft } from "../utils/RevealLeft";
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

const ServiceSection: React.FC = () => {
  return (
    <section className={`bg-white py-16 ${montserrat.className}`}>
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">Découvrez nos services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Reveal>
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600">01 Construction</h3>
              <p className="mt-4 text-gray-700">
                Nous offrons des services de construction de haute qualité, en utilisant des matériaux durables et des méthodes innovantes.
              </p>
              <a href="#" className="inline-block mt-6 bg-green-600 text-white py-2 px-4 rounded">En savoir plus</a>
            </div>
          </Reveal>
          <div className="bg-gray-300 h-64"></div> 

          <div className="bg-gray-300 h-64"></div> 
          <RevealLeft>
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600">02 Services de publicité</h3>
              <p className="mt-4 text-gray-700">
                Nos services de publicité vous offrent une visibilité maximale pour vos produits grâce à nos solutions personnalisées.
              </p>
              <a href="#" className="inline-block mt-6 bg-green-600 text-white py-2 px-4 rounded">En savoir plus</a>
            </div>
          </RevealLeft>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-orange-600 mb-8 text-center">Construction</h3>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 bg-gray-300 h-64 mb-8 md:mb-0 md:mr-8"></div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Nous vous garantissons rapidité, efficacité et respect de l&lsquo;environnement dans tous nos projets de construction.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Les avantages de construire avec nous :</h4>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <Image src="/icon1.png" alt="Rapidité et Efficacité" className="mb-4 w-16 h-16 object-contain" />
                <p className="text-sm text-gray-600">Rapidité et Efficacité</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon2.png" alt="Matériaux Innovants et Durables" className="mb-4 w-16 h-16 object-contain" />
                <p className="text-sm text-gray-600">Matériaux Innovants et Durables</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon3.png" alt="Impact Environnemental Positif" className="mb-4 w-16 h-16 object-contain" />
                <p className="text-sm text-gray-600">Impact Environnemental Positif</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon4.png" alt="Solutions Clés en Main" className="mb-4 w-16 h-16 object-contain" />
                <p className="text-sm text-gray-600">Solutions Clés en Main</p>
              </div>
            </div>
            <a href="#" className="inline-block mt-6 bg-green-600 text-white py-2 px-4 rounded">Demander un devis</a>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-green-600 mb-8 text-center">Services de publicité</h3>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <Image src="/Rectangle223.png" alt="Machine de récolte" className="w-full h-auto mb-4" />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Les Avantages de Poser la Publicité sur Notre Machine de Récolte PLASTIKÔO :</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:w-1/2">
                <Image src="/Machine.png" alt="Avantages publicité" className="w-full h-auto mb-4" />
              </div>
              <div className="md:w-1/2">
                <ul className="list-decimal pl-5 text-gray-700 space-y-4">
                  <li className="text-green-600 font-bold">Visibilité Élevée</li>
                  <p className="text-gray-700">
                    Nos machines de récolte seront installées dans des lieux à fort trafic tels que les centres commerciaux, les aéroports et les événements sportifs. Cela garantit une exposition maximale à un large public diversifié, augmentant ainsi la notoriété de votre marque.
                  </p>
                  <li className="text-green-600 font-bold">Association à une cause écologique</li>
                  <p className="text-gray-700">
                    Votre marque sera associée à une cause écologique importante, ce qui renforcera votre image de marque responsable et durable.
                  </p>
                  <li className="text-green-600 font-bold">Audience Captive</li>
                  <p className="text-gray-700">
                    Les utilisateurs de nos machines passent plusieurs minutes à interagir avec elles, ce qui offre une opportunité unique pour des messages publicitaires impactants.
                  </p>
                  <li className="text-green-600 font-bold">Flexibilité et Personnalisation</li>
                  <p className="text-gray-700">
                    Nous offrons des options de personnalisation pour adapter la publicité à vos besoins spécifiques et maximiser l&lsquo;impact.
                  </p>
                  <li className="text-green-600 font-bold">Opportunités de Partenariat</li>
                  <p className="text-gray-700">
                    Collaborer avec nous ouvre des opportunités de partenariat avec d&lsquo;autres marques et organisations écologiques.
                  </p>
                  <li className="text-green-600 font-bold">Conception graphique avec Tiktoo Studios</li>
                  <p className="text-gray-700">
                    Nos équipes de conception, en partenariat avec Tiktoo Studios, créent des visuels attrayants et engageants pour vos publicités.
                  </p>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <a href="#" className="inline-block bg-green-600 text-white py-2 px-4 rounded">Demander un devis</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
