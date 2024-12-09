import React from "react";
import { Reveal } from "../utils/Reveal";
import { RevealLeft } from "../utils/RevealLeft";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

const CollecteSection = () => {
  return (
    <div className="bg-[#5995FF] text-white py-10 px-6">
      {/* Section principale */}
      <div className="max-w-6xl mx-auto bg-white text-black rounded-lg p-8">
        {/* Titre principal */}
        <div className="text-center mb-10">
          <Reveal>
            <h1 className="text-4xl font-bold mb-4 text-[#5995FF]">COLLECTE</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Chez Plastikôo, nous allions recyclage et sensibilisation pour
              réduire la pollution plastique. Nous déployons des machines de
              collecte automatisées installées dans des zones à forte affluence.
              Ces machines offriront des récompenses aux utilisateurs pour
              chaque bouteille déposée, encourageant ainsi un comportement plus
              éco-responsable.
            </p>
          </Reveal>
        </div>

        {/* Notre machine de collecte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Image à gauche */}
          <RevealLeft>
            <Image
              width={500}
              height={500}
              src="/image01.png"
              alt="Machine de collecte"
              className="rounded-lg w-auto h-auto max-h-[500px] max-w-full mx-auto"
            />
          </RevealLeft>

          {/* Contenu à droite */}
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold text-[#00D45F] mb-6 text-center lg:text-left">
                Notre machine de collecte
              </h2>
              <p className="text-lg mb-6">
                Notre machine est conçue pour rendre le processus de collecte
                simple et accessible à tous. Elle est équipée de fonctionnalités
                modernes pour assurer une utilisation facile et efficace,
                permettant à chaque utilisateur de contribuer facilement à la
                gestion des déchets plastiques.
              </p>
            </Reveal>
            <Reveal>
              <h2 className="text-3xl font-bold text-[#F45D3C]  mb-6 text-center lg:text-left">
                Fonctionnalités
              </h2>
            </Reveal>
            <Reveal>
              <ul className="space-y-6">
                {[
                  "Appuyez sur le bouton Blanc (ON) pour allumer la machine.",
                  'Sélectionnez un bouton pour un "DON" ou une "RÉCOMPENSE".',
                  "Insérez vos bouteilles plastiques dans l'emplacement prévu.",
                  "Appuyez sur le bouton rouge une fois terminé.",
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <h4 className="text-5xl font-bold text-[#00D45F] mr-4">
                      {`0${index + 1}.`}
                    </h4>
                    <p className="text-lg text-black font-normal">{text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Fonctionnalités avancées */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="flex flex-col space-y-6">
              {[
                "Récupérez le ticket imprimé, qui indique le montant de votre récompense et contient un QR code ou un code à 6 chiffres.",
                "L'écran de la machine vous invite à télécharger l'application Plastikô.",
                "Ouvrez l'application Plastikô sur votre smartphone.",
                "Scannez le QR code sur le ticket ou entrez le code à 6 chiffres dans l'application.",
                "La récompense est immédiatement créditée sur votre compte une fois le QR code scanné ou le code à 6 chiffres saisi.",
              ].map((text, index) => (
                <div className="flex items-start" key={index}>
                  <h4 className="text-5xl font-bold text-[#00D45F] mr-4">
                    {`0${index + 5}`}
                  </h4>
                  <p className="text-lg text-black font-normal">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end order-1 lg:order-2 mb-4 lg:mb-0">
            <Image
              width={500}
              height={500}
              src="/image02.png"
              alt="Ticket et QR code"
              className="rounded-lg w-auto h-auto max-h-[500px] max-w-full"
            />
          </div>
        </div>

        {/* Notre plateforme digitale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image de la plateforme */}
          <RevealLeft>
            <Image
              width={500}
              height={500}
              src="/APPLI.png"
              alt="Plateforme digitale"
              className="rounded-lg w-auto h-auto max-h-[500px] max-w-full"
            />
          </RevealLeft>

          {/* Liste des fonctionnalités */}
          <Reveal>
            <div className="text-left max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#00D45F] mb-6">
                Notre plateforme digitale
              </h2>
              <p className="text-lg">
                En plus de notre machine de collecte automatisée, Plastikôo met
                en place une application pour permettre aux utilisateurs de
                gérer et récupérer leurs récompenses en fonction de leur
                contribution. Cette application facilite la collecte des gains
                et offre également la possibilité d’interagir avec la
                communauté.
              </p>
            </div>

            {/* Liste des fonctionnalités */}
            <ul className="space-y-6 mt-12 max-w-4xl mx-auto">
              {[
                {
                  titre: "Scan QR code du ticket",
                  description:
                    "Scannez le QR code ou insérez le code à 6 chiffres avec notre application pour enregistrer et récupérer vos gains.",
                },
                {
                  titre: "Gestion des gains",
                  description:
                    "Suivez et gérez vos points accumulés en temps réel et récupérez vos récompenses.",
                },
                {
                  titre: "Voir l’historique",
                  description:
                    "Consultez l'historique de vos contributions et de vos gains directement dans l'application.",
                },
                {
                  titre: "Récupération des gains",
                  description:
                    "Une fois vos gains atteints, récupérez-les via des bons d'achat, des produits Plastikôo, ou un retrait en cash.",
                },
                {
                  titre: "Interagir avec la communauté",
                  description:
                    "Échangez avec d'autres membres, partagez vos expériences, et accédez à des contenus éducatifs.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <h4 className="text-5xl font-bold text-[#F45D3C]">{`0${
                    index + 1
                  }.`}</h4>
                  <div>
                    <h5 className="text-xl font-bold text-[#00D45F]">
                      {item.titre}
                    </h5>
                    <p className="text-lg text-black">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Bouton Télécharger l'app */}
            <div className="flex justify-end mt-6 max-w-4xl mx-auto">
              <button className="flex items-center bg-[#00D45F] text-white py-2 px-6 rounded-full border-2 border-[#00D45F] hover:bg-[#00C34C] hover:border-[#00C34C] transition-colors">
                Télécharger l&lsquo;app
                <FaDownload className="ml-2" />{" "}
                {/* Icône de téléchargement à droite du texte */}
              </button>
            </div>
          </Reveal>
        </div>

        {/* Moyens de collecte */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <RevealLeft>
            <Image
              width={500}
              height={500}
              src="/poubelle.png"
              alt="Moyens de collecte"
              className="rounded-lg max-h-[500px] max-w-full"
            />
          </RevealLeft>
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-[#00D45F] mb-6">
                Autres moyens de collecte
              </h2>
              <p className="text-lg mb-6">
                En plus des machines automatiques, nous mettons en place des
                machines de collecte mobile pour les zones éloignées.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default CollecteSection;
