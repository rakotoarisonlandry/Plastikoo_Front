"use client";
import LayoutLoginSignUp from "../layoutLoginSignUp";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Reveal } from "@/components/utils/Reveal";
import { RevealLeft } from "@/components/utils/RevealLeft";
import Image from "next/image";
import { getApiBasePath } from '../../../lib/apiConfig'

console.log(getApiBasePath())

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState(""); // Erreur pour les champs vides
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setFieldError("Tous les champs sont obligatoires.");
      return;
    }

    setFieldError(""); // Réinitialiser les erreurs de champs vides

    try {
      const response = await fetch(`${getApiBasePath()}/utilisateur/connecter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("authToken", data.token); // Enregistrez le token
          router.push("/community");
        } else {
          setError("Identifiant ou mot de passe incorrect.");
        }
      } else {
        const errorData = await response.json();
        if (errorData.message.includes("email")) {
          setError("Email incorrect.");
        } else if (errorData.message.includes("password")) {
          setError("Mot de passe incorrect.");
        }
      }
    } catch (error) {
      setError("Mot de passe incorrect.");
    }
  };

  const handleSignUp = () => {
    router.push("/community/register");
  };

  return (
    <LayoutLoginSignUp>
      <div className="flex h-screen w-screen">
        <div className="relative flex flex-col justify-center w-full md:w-1/2 p-8 bg-white">
          <div className="absolute top-4 left-4">
            {/* <img src="/logo.png" alt="Logo" className="w-32 h-auto" /> */}
            <Image src="/logo.png" alt="Logo" width={128} height={64} />
          </div>

          <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto mt-16">
            <h2 className="text-2xl font-bold text-green-500 mb-6 text-center">Se connecter</h2>
            
            {fieldError && <RevealLeft><p className="text-red-500 mb-4 text-center">{fieldError}</p></RevealLeft>}
            
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="space-y-3">
                <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Votre adresse e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  autoComplete="email"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="password" className="block text-gray-700 font-bold">Mot de passe</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Votre mot de passe"
                  value={formData.password}
                  onChange={handleChange}
                  className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  autoComplete="current-password"
                />
                <p className="text-blue-500 text-sm text-right cursor-pointer hover:underline transition duration-200">
                  Mot de passe oublié ?
                </p>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 w-full rounded-lg hover:bg-green-600 transition duration-200 mt-4"
              >
                Se connecter
              </button>

              {/* Affichage des erreurs en bas du formulaire */}
              {error && (
                <RevealLeft>
                  <p className="text-red-500 mt-4 text-center">{error}</p>
                </RevealLeft>
              )}

              <p className="text-center text-gray-700 mt-4">
                Vous n&apos;avez pas de compte ?{" "}
                <a
                  onClick={handleSignUp}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  S&apos;inscrire
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('/slide1.png')" }}>
          <div className="flex flex-col justify-center items-center text-center w-full h-full bg-black bg-opacity-50 p-8">
            <Reveal>
              <h1 className="text-white text-4xl font-bold mb-4">Bienvenue chez Plastikoo</h1>
            </Reveal>
            <Reveal>
              <p className="text-white mb-8">
                Ensemble, offrons une deuxième vie aux plastiques. Bâtissons un avenir durable brique après brique.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </LayoutLoginSignUp>
  );
};

export default Login;
