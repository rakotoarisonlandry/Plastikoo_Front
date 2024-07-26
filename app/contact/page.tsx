import Image from "next/image";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="flex w-full h-screen bg-secondary">
      {/* Left side with image and call to action */}
      <div className="w-1/2 relative">
        <Image
          src="/images/contact.jpg"
          alt="Contact image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Ensemble, construisons un avenir durable</h1>
          <p className="text-xl mb-4">Vous voulez rejoindre notre communauté?</p>
          <button className="bg-primary text-white px-6 py-3 rounded-full">Rejoignez-nous</button>
        </div>
      </div>

      {/* Right side with contact form */}
      <div className="w-1/2 bg-blue-500 p-8 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Contactez-nous</h2>
        <form className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Votre nom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Votre nom"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
              Votre prénom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Votre prénom"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Votre adresse e-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Votre adresse e-mail"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="reason">
              Raison de contact
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="reason"
            >
              <option>Choisir une raison</option>
              <option>Information</option>
              <option>Support</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              Votre message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={4}
              placeholder="Votre message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
