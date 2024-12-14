"use client";
import LayoutLoginSignUp from "../layoutLoginSignUp";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RevealLeft } from "@/components/utils/RevealLeft";
import { getApiBasePath } from "../../../lib/apiConfig";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    prenom: "",
    dateDeNaissance: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null); // Erreur pour l'âge
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, prenom, dateDeNaissance, email, password } = formData;

    if (!name || !prenom || !dateDeNaissance || !email || !password) {
      setError("Tous les champs sont obligatoires.");
      setSuccessMessage(null);
      setAgeError(null);
      return;
    }

    const age = calculateAge(dateDeNaissance);
    if (age < 18) {
      setAgeError("Vous devez avoir au moins 18 ans.");
      setError(null);
      setSuccessMessage(null);
      return;
    }

    setAgeError(null); // Réinitialiser les erreurs d'âge

    try {
      console.log("Données envoyées à l'API :", {
        email,
        mdp: password,
        nom: name,
        prenom,
        date_naissance: dateDeNaissance,
      });

      const response = await fetch(
        `${getApiBasePath()}/utilisateur/inscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            mdp: password,
            nom: name,
            prenom,
            date_naissance: dateDeNaissance,
          }),
        }
      );

      console.log("Réponse brute de l'API :", response);

      const result = await response.json();
      console.log("Réponse JSON de l'API :", result);

      if (response.ok) {
        setSuccessMessage(
          "Inscription réussie ! Vous pouvez maintenant vous connecter."
        );
        setError(null);
        router.push("/community/login");
      } else {
        setError(
          result.message || "Une erreur est survenue lors de l'inscription."
        );
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Erreur lors de l'inscription : ", error);
      setError(null); // Ne pas afficher un message d'erreur générique
      setSuccessMessage(null);
    }
  };

  return (
    <LayoutLoginSignUp>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Section de gauche */}
        <div
          className="flex-1 bg-cover bg-center bg-no-repeat p-8 flex flex-col justify-center items-center text-center"
          style={{
            backgroundImage: "url('/slide1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Bienvenue chez Plastikoo
          </h1>
          <p className="text-white text-sm md:text-lg mb-8">
            Ensemble, offrons une deuxième vie aux plastiques. <br /> Bâtissons
            un avenir durable brique après brique.
          </p>
        </div>

        {/* Section de droite */}
        <div className="w-full md:w-1/2 bg-white flex justify-center items-center p-2 md:p-6">
          <div className="w-full max-w-md p-8 rounded-lg">
            <RevealLeft>
              <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4 text-center">
                Créer un nouveau compte
              </h2>
            </RevealLeft>

            {error && (
              <RevealLeft>
                <p className="text-red-500 mb-4 text-center">{error}</p>
              </RevealLeft>
            )}
            {successMessage && (
              <RevealLeft>
                <p className="text-green-500 mb-4 text-center">
                  {successMessage}
                </p>
              </RevealLeft>
            )}

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              <input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              <div className="relative">
                <input
                  type="date"
                  name="dateDeNaissance"
                  value={formData.dateDeNaissance}
                  onChange={handleChange}
                  className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                />
                {ageError && (
                  <p className="text-red-500 mt-1 text-center">{ageError}</p>
                )}
              </div>
              <input
                type="email"
                name="email"
                placeholder="Votre adresse e-mail"
                value={formData.email}
                onChange={handleChange}
                className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              <input
                type="password"
                name="password"
                placeholder="Créer un mot de passe"
                value={formData.password}
                onChange={handleChange}
                className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              />
              <button
                type="submit"
                className="bg-green-500 text-white p-3 w-full rounded-lg hover:bg-green-600 transition duration-200"
              >
                S&apos;inscrire
              </button>
            </form>

            <p className="text-center text-gray-700 mt-4 text-sm">
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
