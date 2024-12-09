import React from "react";
import { Reveal } from "../utils/Reveal";
import { RevealLeft } from "../utils/RevealLeft";
import Image from "next/image";

const Sensibilisation: React.FC = () => {
  return (
    <div className="bg-dark py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-8">
        {/* Titre principal */}
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-dark mb-4">Sensibilisation</h1>
            <p className="text-lg text-dark">
              Chez Plastikôo, notre priorité est d’éveiller la conscience environnementale des citoyens. Grâce à notre plateforme digitale, nous sensibilisons la population à l&apos;mportance du recyclage et de la protection de l&apos;environnement. L&apos;application permet à chacun d&apos;apprendre les gestes écoresponsables, de découvrir des contenus éducatifs, et de suivre ses efforts pour un avenir plus respectueux de l&apos;environnement.
            </p>
          </div>
        </Reveal>

        {/* Section : Notre communauté */}
        <RevealLeft>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#00D45F] mb-6">Notre communauté</h2>
            <p className="text-dark">
              Nous avons créé une communauté pour partager des contenus éducatifs sur l&apos;importance de la protection de notre environnement,
              ainsi que des conseils pratiques pour construire des structures en plastique recyclé.
            </p>
          </section>
        </RevealLeft>

        {/* Section : Nos activités */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image alignée à gauche */}
            <RevealLeft>
              <div className="w-full flex justify-center lg:justify-start">
                <Image
                  width={500}
                  height={500}
                  src="image03.png"
                  alt="Application de récolte"
                  className="w-auto h-auto max-h-[550px] object-contain"
                />
              </div>
            </RevealLeft>

            {/* Liste des activités */}
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold text-dark mb-8">Nos activités</h2>
                <div className="space-y-8">
                  {[
                    {
                      number: "01",
                      title: "Interaction avec la communauté",
                      description:
                        "La plateforme offre un espace dynamique de discussion et d'échange pour renforcer les liens et favoriser le partage d'idées.",
                    },
                    {
                      number: "02",
                      title: "Partage d'expériences",
                      description:
                        "Les utilisateurs partagent leurs expériences avec les machines de collecte et de recyclage.",
                    },
                    {
                      number: "03",
                      title: "Organisation de nettoyage",
                      description:
                        "Plusieurs événements sont organisés pour améliorer la propreté de nos espaces naturels.",
                    },
                    {
                      number: "04",
                      title: "Contenu éducatif",
                      description:
                        "Des ressources et tutoriels sont proposés pour sensibiliser le public aux meilleures pratiques de recyclage.",
                    },
                    {
                      number: "05",
                      title: "Événements communautaires",
                      description:
                        "Rencontres et activités sont planifiées pour promouvoir l'engagement environnemental.",
                    },
                    {
                      number: "06",
                      title: "Campagnes de sensibilisation",
                      description:
                        "Actions régulières pour informer et éduquer la population sur les enjeux environnementaux.",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-4xl font-bold text-[#00D45F]">
                        {activity.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark">{activity.title}</h3>
                        <p className="text-dark">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Activités communautaires */}
        <Reveal>
          <section>
            <div className="flex flex-col items-center gap-8 md:gap-4">
              {/* Texte centré */}
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold">
                  Activités communautaires
                </h2>
              </div>

              {/* Bloc des images */}
              <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
                {/* Bloc gauche */}
                <div className="flex-1 rounded-lg overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src="/photogroupe.png"
                    alt="Photo de la communauté"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bloc droit */}
                <div className="flex-1 rounded-lg overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src="/community.png"
                    alt="Nettoyage de la nature"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
};

export default Sensibilisation;
