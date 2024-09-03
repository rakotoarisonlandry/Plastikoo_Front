import React from 'react';
import { Reveal } from "../utils/Reveal";
import { RevealLeft } from "../utils/RevealLeft";

type Props = {}

const SectionRecolte: React.FC<Props> = () => {
  return (
    <section className="py-16 px-4 bg-white text-dark">
      <div className="max-w-6xl mx-auto">
        

        <Reveal>
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Récolte</h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Plastiko collecte les déchets plastiques grâce des machines automatiques installées dans les Centres Commerciaux, Grandes Surfaces, Écoles ou Universités. Chaque personne peut apporter ses plastiques et les insérer dans la machine, qui les broie automatiquement. En retour, ils reçoivent un ticket échangeable contre des bons d'achat ou de l'argent via Orange Money. Cette démarche vise à sensibiliser la population à la réduction des déchets plastiques et à respecter l'environnement.
          </p>
        </Reveal>


        <RevealLeft>
          <h3 className="text-2xl font-bold text-center text-green-600 mb-4">Notre machine de récolte</h3>
          <p className="text-lg text-center text-gray-700 mb-8">
            Notre machine de récolte est conçue pour rendre le processus de collecte simple et accessible à tous. Elle est équipée de fonctionnalités modernes pour assurer une utilisation facile et efficace, permettant à chaque utilisateur de contribuer facilement à la gestion des déchets plastiques.
          </p>
        </RevealLeft>


        <Reveal>
          <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-4 lg:mb-0">
              <img src="image01.png" alt="Machine de récolte" className="w-auto h-auto max-h-64 max-w-full" />
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-green-600">01</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    Appuyez sur le bouton Blanc (ON) pour allumer la machine et la préparer à recevoir des bouteilles plastiques.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-green-600">02</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    Sélectionnez le bouton Vert pour faire un "DON" ou le bouton Bleu pour recevoir une "RÉCOMPENSE" pour vos bouteilles déposées.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-green-600">03</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    Insérez les bouteilles plastiques dans l'emplacement prévu à cet effet.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-green-600">04</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    Appuyez sur le bouton rouge pour arrêter la collecte une fois que vous avez terminé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bloc 05 à 09 */}
        <RevealLeft>
          <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
            <div className="w-full lg:w-2/3 order-2 lg:order-1">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-green-600">05</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    Récupérez le ticket imprimé, qui indique le montant de votre récompense et contient un QR code ou un code à 6 chiffres.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-green-600">06</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    L'écran de la machine vous invite à télécharger l'application Plastikô.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-green-600">07</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    Ouvrez l'application Plastikô sur votre smartphone.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-green-600">08</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    Scannez le QR code sur le ticket ou entrez le code à 6 chiffres dans l'application.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-green-600">09</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    La récompense est immédiatement créditée sur votre compte une fois le QR code scanné ou le code à 6 chiffres saisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end order-1 lg:order-2 mb-4 lg:mb-0">
              <img src="image02.png" alt="Ticket et QR code" className="w-auto h-auto max-h-64 max-w-full" />
            </div>
          </div>
        </RevealLeft>


        <Reveal>
          <h3 className="text-2xl font-bold text-center text-blue-600 mb-4 font-montserrat">Notre application de récolte</h3>
          <p className="text-lg text-center text-gray-700 mb-8">
            En plus de notre machine de collecte automatisée, Plastikô met en place une application pour vous permettre de gérer et récupérer vos récompenses en fonction de votre contribution. Cette application facilite la collecte de vos récompenses, et vous offre également la possibilité de participer à des discussions et des événements communautaires. Téléchargez l'application dès maintenant et contribuez à un avenir plus propre et durable.
          </p>
        </Reveal>


        <RevealLeft>
          <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-4 lg:mb-0">
              <img src="image03.png" alt="Application de récolte" className="w-auto h-auto max-h-64 max-w-full" />
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-red-600">01</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    <span className="text-green-600 font-bold">Scannez le code du ticket:</span><br />
                    Une fois vos bouteilles insérées dans notre machine de récolte, récupérez le ticket imprimé qui indique le montant de votre récompense et contient un QR code ou un code à 6 chiffres. Scannez ce QR code ou insérez le code à 6 chiffres avec notre application pour enregistrer et récupérer vos gains.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-red-600">02</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    <span className="text-green-600 font-bold">Gestion des gains</span><br />
                    Suivez et gérez vos points accumulés en fonction de vos contributions. L'application vous permet de suivre et de gérer vos gains en temps réel, de voir l'historique de vos contributions et de récupérer vos récompenses.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-red-600">03</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    <span className="text-green-600 font-bold">Voir l'historique:</span><br />
                    Consultez l'historique de vos contributions et de vos gains directement dans l'application. Suivez vos actions pour pouvoir récupérer vos récompenses en temps voulu.
                  </p>
                </div>
                <div className="flex items-start">
                  <h4 className="text-4xl font-bold text-red-600">04</h4>
                  <p className="ml-4 text-lg text-black font-normal">
                    <span className="text-green-600 font-bold">Récupération des gains:</span><br />
                    Pour récupérer vos gains, le total doit atteindre 5000 ar. Une fois ce seuil atteint, vous avez trois options: recevoir un bon d'achat auprès de nos partenaires, acheter des produits Plastikô, ou effectuer un retrait en cash via des opérateurs de mobile money.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealLeft>


        <Reveal>
          <div className="flex flex-wrap justify-center mb-12">
            <img src="image05.png" alt="Machine 1" className="w-auto h-auto max-h-64 max-w-xs mx-2" />
            <img src="image06.png" alt="Machine 2" className="w-auto h-auto max-h-64 max-w-xs mx-2" />
            <img src="image07.png" alt="Machine 3" className="w-auto h-auto max-h-64 max-w-xs mx-2" />
          </div>
        </Reveal>


        <RevealLeft>
          <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
            <div className="w-full lg:w-2/3 mb-4 lg:mb-0">
              <p className="text-lg text-gray-700">
                En plus d'installer des machines automatisées, Plastikô met en place des bacs à ordures dans les rues pour faciliter la gestion des déchets plastiques. Ces bacs sont installés pour encourager les passants et les habitants à y déposer leurs déchets plutôt que de les laisser dans l’environnement. Cette initiative a pour but de sensibiliser la population à l'importance du tri des déchets et d'offrir des solutions pratiques pour une meilleure gestion des plastiques, tout en soutenant notre mission d'amélioration des conditions environnementales à Madagascar.
              </p>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-4 lg:mb-0">
              <img src="poubelle1.png" alt="Bac à ordures" className="w-auto h-auto max-h-64 max-w-full" />
            </div>
          </div>
        </RevealLeft>

      </div>
    </section>
  );
};

export default SectionRecolte;
