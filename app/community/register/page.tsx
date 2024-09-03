"use client";
import LayoutLoginSignUp from "../layoutLoginSignUp";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { RevealLeft } from "@/components/utils/RevealLeft";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    prenom: "",
    dateDeNaissance: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, prenom, email, password } = formData;

    if (!name || !prenom || !email || !password) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("isAuthenticated", "false");

    router.push("/community/login");
  };

  return (
    <LayoutLoginSignUp>
      <div className="flex h-screen">

        <div className="flex-1 bg-cover bg-center bg-no-repeat p-8 flex flex-col justify-center items-center text-center" style={{ backgroundImage: "url('/slide1.png')", backgroundSize: 'cover', backgroundPosition: 'center center' }}>
          <h1 className="text-white text-4xl font-bold mb-4">Bienvenue chez Plastikoo</h1>
          <p className="text-white mb-8">
            Ensemble, offrons une deuxième vie aux plastiques. Bâtissons un avenir durable brique après brique.
          </p>

        </div>

        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="w-4/5 max-w-md p-8 rounded-lg ">
            <RevealLeft>
              <h2 className="text-2xl font-bold text-green-500 mb-4 text-center">Créer un nouveau compte</h2>
            </RevealLeft>
            {error && <RevealLeft><p className="text-red-500 mb-4 text-center">{error}</p></RevealLeft>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                className="mt-4 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              <input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                className="mt-4 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              <input
                type="date"
                name="dateDeNaissance"
                value={formData.dateDeNaissance}
                onChange={handleChange}
                className="mt-4 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre adresse e-mail"
                value={formData.email}
                onChange={handleChange}
                className="mt-4 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              <input
                type="password"
                name="password"
                placeholder="Créer un mot de passe"
                value={formData.password}
                onChange={handleChange}
                className="mt-4 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              <button
                type="submit"
                className="bg-green-500 text-white mt-6 p-3 w-full rounded-lg hover:bg-green-600 transition duration-200"
              >
                S'inscrire
              </button>
            </form>
            <p className="text-center text-gray-700 mt-4">
              Vous avez déjà un compte ?{" "}
              <a
                onClick={() => router.push("/community/login")}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Se connecter
              </a>
            </p>
          </div>
        </div>
      </div>
    </LayoutLoginSignUp>
  );
};

export default SignUp;
