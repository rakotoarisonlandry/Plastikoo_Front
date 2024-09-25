import Image from "next/image";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex w-full h-screen bg-secondary">
      <div className="w-1/2 relative">
        <Image
          src="/slide1.png"
          alt="Contact image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50  flex flex-col items-start justify-center text-white p-14">
          <h1 className="text-4xl font-semibold  mb-4">
            Ensemble, nous pourrons bâtir un avenir propre et durable.
          </h1>
          <p className="text-lg mb-4 space-y-0 text-[13px]">
            Votre contribution fait la différence. Rejoignez notre communauté et
            offrons un avenir meilleur pour les générations futures. Ensemble,
            luttons contre la pollution plastique, transformons ce défi en
            opportunité, et créons un impact positif et durable pour Madagascar.
          </p>
          <button className="bg-primary hover:scale-x-105 hover:scale-y-105 duration-300 transition text-white px-6 py-2 rounded-lg">
            Rejoignez-nous
          </button>
        </div>
      </div>

      <div className="w-[80%] bg-secondary p-8 flex flex-col justify-center items-center">
        <div className="pl-28 pr-7">
          <h2 className="text-3xl font-bold mb-6 text-white">Contactez-nous</h2>
          <p className="text-[14px] mb-8 text-white">
            Nous serions ravis de vous entendre ! Que vous souhaitiez rejoindre
            notre initiative ou devenir notre partenaire ou en savoir plus sur
            nos produits , votre message est important pour nous. Remplissez le
            formulaire ci-dessous avec vos coordonnées et votre demande.
            Ensemble, faisons la différence.
          </p>
        </div>
        <form className="w-full max-w-lg">
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Votre nom
              </label>
              <input
                className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Votre nom"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Votre prénom
              </label>
              <input
                className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Votre prénom"
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Votre adresse e-mail
              </label>
              <input
                className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Votre adresse e-mail"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="reason"
              >
                Raison de contact
              </label>
              <select
                className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="reason"
              >
                <option>Notre partenaire</option>
                <option>Information</option>
                <option>Support</option>
                <option>Autre</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Votre message
            </label>
            <textarea
              className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={4}
              placeholder="Votre message"
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-dark text-white font-bold hover:scale-x-105 transition duration-300 hover:scale-y-105 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
