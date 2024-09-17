"use client";

import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaComment,
  FaSearch,
  FaPaperPlane,
  FaTrash,
} from "react-icons/fa";

interface Publication {
  publication_id: string;
  utilisateur_nom: string;
  utilisateur_prenom: string;
  avatar_url?: string;
  
  titre: string;
  contenu: string;
  img_publication?: string;
  likes: number;
  comments: number;
}

interface Comment {
  commentaire_id: string;
  utilisateur_nom: string;
  contenu: string;
}

const Discussion: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [comments, setComments] = useState<Record<string, Comment[]>>({});
  const [newComment, setNewComment] = useState<Record<string, string>>({});
  const [likedPublications, setLikedPublications] = useState<Set<string>>(new Set());

  const getToken = () => localStorage.getItem("authToken") || "";

  const fetchPublications = async () => {
    const token = getToken();
    try {
      const response = await fetch("http://localhost:5000/forum/publication", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPublications(data);
      } else {
        console.error("Erreur lors de la récupération des publications");
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchComments = async (id_publication: string) => {
    const token = getToken();
    try {
      const response = await fetch(
        `http://localhost:5000/forum/publication/commentaire/${id_publication}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const contentType = response.headers.get("Content-Type");
      
      if (!response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Erreur lors de la récupération des commentaires:", errorData.message);
        } else {
          console.error("Erreur: Réponse non JSON", await response.text());
        }
        return;
      }

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setComments((prev) => ({ ...prev, [id_publication]: data }));
      } else {
        console.error("Le contenu de la réponse n'est pas du JSON");
      }
    } catch (error) {
      console.error("Erreur lors de la requête des commentaires:", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append("forum", file);
    }
    formData.append("titre", title);
    formData.append("contenu", content);

    const token = getToken();

    try {
      const response = await fetch("http://localhost:5000/forum/publication", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert("Post publié avec succès !");
        setTitle("");
        setContent("");
        setFile(null);
        setFormVisible(false);
        fetchPublications();
      } else {
        const error = await response.json();
        alert(
          `Erreur lors de la publication : ${error.message || "Erreur inconnue"}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  const handleDelete = async (id_publication: string) => {
    const token = getToken();
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette publication ?")) return;

    try {
      const response = await fetch(
        `http://localhost:5000/forum/publication/${id_publication}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        alert("Publication supprimée avec succès !");
        fetchPublications();
      } else {
        const error = await response.json();
        alert(
          `Erreur lors de la suppression : ${error.message || "Erreur inconnue"}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  const handleLike = async (id_publication: string) => {
    const token = getToken();
    try {
      const response = await fetch(
        `http://localhost:5000/forum/publication/reagir/${id_publication}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setLikedPublications((prev) => {
          const updated = new Set(prev);
          if (updated.has(id_publication)) {
            updated.delete(id_publication);
          } else {
            updated.add(id_publication);
          }
          return updated;
        });
        fetchPublications();
      } else {
        const error = await response.json();
        alert(
          `Erreur lors de la réaction : ${error.message || "Erreur inconnue"}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de la réaction:", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  const handleCommentChange = (id_publication: string, value: string) => {
    setNewComment((prev) => ({
      ...prev,
      [id_publication]: value
    }));
  };

  const handleAddComment = async (id_publication: string) => {
    const token = getToken();
    const comment = newComment[id_publication];
    if (!comment) {
      alert("Veuillez écrire un commentaire.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/forum/publication/commentaire/${id_publication}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contenu: comment }),
        }
      );

      if (response.ok) {
        setNewComment((prev) => ({ ...prev, [id_publication]: "" }));
        fetchComments(id_publication);
      } else {
        const error = await response.json();
        alert(
          `Erreur lors de l'ajout du commentaire : ${error.message || "Erreur inconnue"}`
        );
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire:", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  const toggleComments = (id_publication: string) => {
    if (!comments[id_publication]) {
      fetchComments(id_publication);
    } else {
      setComments((prev) => ({ ...prev, [id_publication]: [] }));
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Barre de recherche */}
      <div className="p-4 flex justify-center">
        <div className="flex items-center border border-gray-300 rounded-lg w-full max-w-4xl">
          <input
            type="text"
            placeholder="Rechercher..."
            className="p-4 w-full border-none outline-none rounded-l-lg text-lg"
          />
          <button className="bg-green-500 text-white p-4 rounded-r-lg text-lg hover:bg-green-600 transition-colors">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex-grow p-4 flex flex-col items-center">
        {publications.map((publication) => (
          <div
          key={publication.publication_id}
          className="w-full max-w-5xl bg-white border border-gray-300 rounded-lg p-6 mb-8 shadow-md"
        >
          {/* En-tête de la publication */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <img
                src={publication.avatar_url || "/profil.png"}
                alt={`${publication.utilisateur_nom} ${publication.utilisateur_prenom}`}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">
                  {publication.utilisateur_nom} {publication.utilisateur_prenom}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(publication.publication_id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>

          {/* Contenu de la publication */}
          <h2 className="text-xl font-bold mt-4">{publication.titre}</h2>
          <p className="mt-2">{publication.contenu}</p>
          {publication.img_publication && (
            <img
              src={`http://localhost:5000/uploads/${publication.img_publication}`}
              alt="Publication"
              className="mt-4 w-full max-h-96 object-cover rounded-lg"
            />
          )}
          <div className="mt-4 flex space-x-4">
          <button
                onClick={() => handleLike(publication.publication_id)}
                className={`flex items-center ${likedPublications.has(publication.publication_id) ? 'text-red-500' : 'text-blue-500'} hover:text-red-700 transition-colors`}
              >
                <FaHeart />
                <span className="ml-2">{publication.likes} J'aime</span>
              </button>

            <button
              onClick={() => toggleComments(publication.publication_id)}
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <FaComment />
              <span className="ml-2">{publication.comments} Commentaires</span>
            </button>
          </div>

          {/* Commentaires */}
          {comments[publication.publication_id] && (
            <div className="mt-4">
              {comments[publication.publication_id].map((comment) => (
                <div
                  key={comment.commentaire_id}
                  className="border-t border-gray-200 pt-4"
                >
                  <p className="font-semibold">{comment.utilisateur_nom}</p>
                  <p>{comment.contenu}</p>
                </div>
              ))}
              <div className="mt-4 flex">
                <input
                  type="text"
                  value={newComment[publication.publication_id] || ""}
                  onChange={(e) =>
                    handleCommentChange(
                      publication.publication_id,
                      e.target.value
                    )
                  }
                  placeholder="Ajouter un commentaire..."
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <button
                  onClick={() => handleAddComment(publication.publication_id)}
                  className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Formulaire de publication */}
      {formVisible && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-300 rounded-lg p-6 shadow-md mb-8 w-full max-w-5xl"
        >
          <h2 className="text-xl font-bold mb-4">Créer une publication</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Contenu"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4"
            required
          />
          <input type="file" onChange={handleFileChange} className="mb-4" />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Publier
          </button>
        </form>
      )}

      {/* Bouton pour afficher/masquer le formulaire */}
      <button
        onClick={() => setFormVisible(!formVisible)}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors fixed bottom-4 right-4"
      >
        {formVisible ? "Annuler" : "Créer une publication"}
      </button>
    </div>
  </div>
);
};

export default Discussion;
