import Image from "next/image";
import React, { useState } from "react";
import { getApiBasePath } from '../../lib/apiConfig'

type Props = {};

const Contact = (props: Props) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    type_contact: "Notre partenaire",
    message: "",
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    console.log('niditra ato')
    try {
      const response = await fetch(`${getApiBasePath()}/contact/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const msg = await response.json()
        alert(`${msg.message}`);
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          type_contact: "Notre partenaire",
          message: "",
        });
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Impossible d'envoyer le message. Vérifiez votre connexion.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen bg-secondary">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-[800px] lg:h-full">
        <Image
          src="/contact.png"
          alt="Contact image"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center text-white p-6 lg:p-14">
          <h1 
            className="text-2xl lg:text-4xl text-[28px] sm:text-[30px] lg:text-[40px font-semibold mb-4"
            style= {{
              fontFamily:"Montserrat",
              fontWeight: 600,
            }}
          >
            Ensemble, nous pourrons bâtir un avenir propre et durable.
          </h1>

          <h2 
            className="text-[12px] sm:text-[22px] lg:text-[32px"
            style= {{
              fontFamily:"Montserrat",
              fontWeight: 900,
              fontSize:32
            }}
          >Vous voulez rejoindre notre communauté?</h2>
          <p 
            className="text-sm lg:text-lg mb-4 space-y-0 text-[13px]"
            style= {{
              fontFamily:"Montserrat",
              fontWeight: 500,
              fontSize:14
            }}
          >
            Votre contribution fait la différence. Rejoignez notre communauté et
            offrons un avenir meilleur pour les générations futures.
          </p>
          <button 
            className="bg-primary hover:scale-105 duration-300 transition text-white px-4 lg:px-6 py-2 rounded-lg"
            style= {{
              fontFamily:"Montserrat",
              fontWeight: "bold",
              fontSize:14
            }}
          >
            Rejoignez-nous
          </button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 bg-secondary p-8 flex flex-col justify-center items-center">
        <div className="pl-4 lg:pl-20 pr-4 lg:pr-7">
          <h2 
            className="text-2xl lg:text-3xl text-[28px] sm:text-[30px] lg:text-[40px font-bold mb-6 text-white"
            style= {{
              fontFamily:"Montserrat",
              fontWeight: 600
            }}
          >
            Contactez-nous
          </h2>
          <p 
            className="text-sm lg:text-[14px] mb-8 text-white"
            style= {{
              fontFamily:"Montserrat",
              fontWeight: 500,
              fontSize: 14
            }}
          >
            Nous serions ravis de vous entendre ! Que vous souhaitiez rejoindre
            notre initiative, devenir notre partenaire ou en savoir plus sur nos
            produits, votre message est important pour nous. Remplissez le
            formulaire ci-dessous avec vos coordonnées et votre demande.
          </p>
        </div>

        <form className="w-full max-w-lg"
          onSubmit={(e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            handleSubmit();
          }}
        >
          <div className="flex flex-col lg:flex-row mb-4">
            <div className="w-full lg:w-1/2 mr-0 lg:mr-2 mb-4 lg:mb-0">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Votre nom
              </label>
              <input
                className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nom"
                type="text"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>
            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Votre prénom
              </label>
              <input
                className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="prenom"
                type="text"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mb-4">
            <div className="w-full lg:w-1/2 mr-0 lg:mr-2 mb-4 lg:mb-0">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Votre adresse e-mail
              </label>
              <input
                className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Votre adresse e-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="reason"
              >
                Raison de contact
              </label>
              <select
                className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="type_contact"
                value={formData.type_contact}
                onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-dark text-white font-bold hover:scale-105 transition duration-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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
