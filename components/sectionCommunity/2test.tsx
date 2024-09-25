"use client";

import React, { useState, useEffect } from "react";
import { FaHeart, FaComment, FaEllipsisV, FaPaperPlane, FaReply } from 'react-icons/fa';

interface Publication {
  publication_id: string;
  utilisateur_nom: string;
  utilisateur_prenom: string;
  avatar_url?: string;
  titre: string;
  contenu: string;
  img_publication?: string;
  nbr_reactions: number;
  nbr_commentaires: number;
}

interface Commentaire {
  commentaire_id: number;
  commentaire_contenu: string;
  commentaire_date_creation: string;
  commentaire_parent_id?: number;
  publication_id: number;
  replies?: Commentaire[];
}

const Discussion: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [comments, setComments] = useState<Record<string, Commentaire[]>>({});
  const [newComment, setNewComment] = useState<Record<string, string>>({});
  const [newReply, setNewReply] = useState<Record<number, string>>({});
  const [likedPublications, setLikedPublications] = useState<Set<string>>(new Set());
  const [replyVisible, setReplyVisible] = useState<{ [key: number]: boolean }>({});


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

      if (response.ok) {
        const data: Commentaire[] = await response.json();
        const organizedComments = organizeComments(data);
        setComments((prev) => ({ ...prev, [id_publication]: organizedComments }));
      } else {
        const error = await response.json();
        console.error("Erreur lors de la récupération des commentaires:", error.message);
      }
    } catch (error) {
      console.error("Erreur lors de la requête des commentaires:", error);
    }
  };

  const fetchSubComments = async (id_publication: string, id_commentaire: number) => {
    const token = getToken();
    try {
      const url = `http://localhost:5000/forum/publication/commentaire/${id_publication}/${id_commentaire}`;
      
      // Log the request URL
      console.log(`Fetching sub-comments from: ${url}`);
  
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Log the response status
      console.log("Response status:", response.status);
  
      if (response.ok) {
        const data: Commentaire[] = await response.json();
        console.log("Fetched sub-comments data:", data); // Log the retrieved data
  
        const organizedReplies = organizeComments(data);
        setComments((prev) => {
          const updatedComments = { ...prev };
          updatedComments[id_publication] = updatedComments[id_publication].map((comment) => {
            if (comment.commentaire_id === id_commentaire) {
              return { ...comment, replies: organizedReplies };
            }
            return comment;
          });
          return updatedComments;
        });
        
        // Log a success message
        console.log(`Successfully fetched sub-comments for publication ${id_publication}, comment ${id_commentaire}.`);
      } else {
        const error = await response.json();
        console.error("Erreur lors de la récupération des sous-commentaires:", error.message);
      }
    } catch (error) {
      console.error("Erreur lors de la requête des sous-commentaires:", error);
    }
  };
  
  const organizeComments = (comments: Commentaire[]): Commentaire[] => {
    const commentMap: Record<number, Commentaire> = {};
    const result: Commentaire[] = [];

    comments.forEach(comment => {
      commentMap[comment.commentaire_id] = { ...comment, replies: [] };
      if (comment.commentaire_parent_id) {
        const parent = commentMap[comment.commentaire_parent_id];
        if (parent) {
          parent.replies?.push(commentMap[comment.commentaire_id]); // Ensure replies array exists
        }
      } else {
        result.push(commentMap[comment.commentaire_id]);
      }
    });

    return result;
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
        alert(`Erreur lors de la publication : ${error.message || "Erreur inconnue"}`);
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
        alert(`Erreur lors de la suppression : ${error.message || "Erreur inconnue"}`);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  const handleLike = async (id_publication: string) => {
    const token = getToken();
    const isLiked = likedPublications.has(id_publication);
    
    // Met à jour le nombre de réactions
    setPublications((prev) =>
      prev.map((pub) => {
        if (pub.publication_id === id_publication) {
          return {
            ...pub,
            nbr_reactions: isLiked ? pub.nbr_reactions - 1 : pub.nbr_reactions + 1,
          };
        }
        return pub;
      })
    );

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
          const updatedLikes = new Set(prev);
          if (isLiked) {
            updatedLikes.delete(id_publication);
          } else {
            updatedLikes.add(id_publication);
          }
          return updatedLikes;
        });
      } else {
        const error = await response.json();
        console.error("Erreur lors de la réaction :", error);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion à l'API :", error);
    }
  };

  const handleCommentChange = (id_publication: string, value: string) => {
    setNewComment((prev) => ({
      ...prev,
      [id_publication]: value,
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
        `http://localhost:5000/forum/publication/commenter/${id_publication}`,
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
        const newCommentObj: Commentaire = {
          commentaire_id: Date.now(),
          commentaire_contenu: comment,
          commentaire_date_creation: new Date().toISOString(),
          publication_id: parseInt(id_publication, 10),
        };

        setComments((prev) => {
          const updatedComments = [
            ...(prev[id_publication] || []),
            newCommentObj,
          ];
          return { ...prev, [id_publication]: organizeComments(updatedComments) };
        });

        setNewComment((prev) => ({ ...prev, [id_publication]: "" }));
      } else {
        const error = await response.json();
        alert(`Erreur lors de l'ajout du commentaire : ${error.message || "Erreur inconnue"}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire:", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  const handleCommentReplyChange = (commentId: number, value: string) => {
    setNewReply((prev) => ({ ...prev, [commentId]: value }));
  };

  const handleReplyToComment = async (id_publication: string, id_main_commentaire: number, contenu: string) => {
    const token = getToken();

    if (!contenu) {
      alert("Veuillez écrire une réponse.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/forum/publication/commentaire/repondre/${id_publication}/${id_main_commentaire}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contenu }),
        }
      );

      if (response.ok) {
        const newReplyObj: Commentaire = {
          commentaire_id: Date.now(),
          commentaire_contenu: contenu,
          commentaire_date_creation: new Date().toISOString(),
          publication_id: parseInt(id_publication, 10),
          commentaire_parent_id: id_main_commentaire,
        };

        setComments((prev) => {
          const updatedComments = prev[id_publication]
            ? [...prev[id_publication], newReplyObj]
            : [newReplyObj];
          return { ...prev, [id_publication]: organizeComments(updatedComments) };
        });

        setNewReply((prev) => ({ ...prev, [id_main_commentaire]: "" }));
      } else {
        const error = await response.json();
        alert(`Erreur lors de l'ajout de la réponse : ${error.message || "Erreur inconnue"}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de la réponse:", error);
      alert("Erreur de connexion au serveur.");
    }
  };
  return (
    <div className="w-full max-w-5xl mx-auto p-10"> {/* Agrandi la largeur du conteneur principal */}
      
      {/* Conteneur principal des publications */}
      <div className="w-full max-w-3xl"> {/* Gardé la largeur max pour agrandir légèrement le bloc */}
        
        {formVisible && (
          <form onSubmit={handleSubmit} className="mb-4 bg-gray-100 p-4 rounded-lg shadow-lg">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre"
              className="border border-gray-300 rounded-lg p-2 mb-2 w-full"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Contenu"
              className="border border-gray-300 rounded-lg p-2 mb-2 w-full"
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-2"
            />
            <div className="flex justify-between">
              <button type="submit" className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
                Publier
              </button>
              <button
                type="button"
                onClick={() => setFormVisible(false)}
                className="ml-2 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600"
              >
                Annuler
              </button>
            </div>
          </form>
        )}
  
        {/* Affiche les 3 premières publications */}
        {publications.slice(0, 3).map((publication) => (
          <div key={publication.publication_id} className="border border-gray-200 bg-white p-4 mb-4 w-full rounded-lg shadow-md relative">
            <div className="flex items-center mb-4">
              <img
                src={publication.avatar_url || "/profil.png"}
                alt={`${publication.utilisateur_nom} ${publication.utilisateur_prenom}`}
                width={40}
                height={40}
                className="rounded-full object-cover mr-2"
              />
              <div>
                <p className="font-semibold">
                  {publication.utilisateur_prenom} {publication.utilisateur_nom}
                </p>
                <p className="text-gray-700">{publication.titre}</p>
              </div>
              <button
                onClick={() => handleDelete(publication.publication_id)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-600"
              >
                <FaEllipsisV size={25} />
              </button>
            </div>
            <p className="mt-2 text-gray-800">{publication.contenu}</p>
            {publication.img_publication && (
              <img
                src={`http://localhost:5000/uploads/${publication.img_publication}`}
                alt="Publication"
                className="w-full mt-2 max-h-96 object-cover rounded-lg"
              />
            )}
            <div className="mt-2 flex items-center text-gray-600">
              <button
                onClick={() => handleLike(publication.publication_id)}
                className="flex items-center hover:text-green-600"
              >
                <FaHeart className={`mr-1 ${likedPublications.has(publication.publication_id) ? 'text-green-600' : 'text-gray-500'}`} />
                {publication.nbr_reactions}
              </button>
              <button
                onClick={() => fetchComments(publication.publication_id)}
                className="flex items-center ml-4 hover:text-green-600"
              >
                <FaComment className="mr-1" />
                {publication.nbr_commentaires}
              </button>
            </div>
  
            {/* Bloc pour les commentaires */}
            {comments[publication.publication_id] && (
              <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                {/* Champ pour ajouter un commentaire */}
                <div className="mb-4 flex">
                  <input
                    type="text"
                    value={newComment[publication.publication_id] || ""}
                    onChange={(e) => handleCommentChange(publication.publication_id, e.target.value)}
                    placeholder="Ajouter un commentaire..."
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                  <button
                    onClick={() => handleAddComment(publication.publication_id)}
                    className="ml-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
  
                {/* Affichage des commentaires */}
                {comments[publication.publication_id].map((comment) => (
                  <div key={comment.commentaire_id} className="border-t border-gray-200 pt-4">
                    <p className="font-semibold">Utilisateur {comment.commentaire_id}</p>
                    <p>{comment.commentaire_contenu}</p>
                    <div className="mt-4 flex items-center">
                      <button
                        onClick={() => fetchSubComments(publication.publication_id, comment.commentaire_id)}
                        className="text-green-500 hover:underline"
                      >
                        Voir réponses
                      </button>
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="ml-4">
                          {comment.replies.map((reply) => (
                            <div key={reply.commentaire_id} className="border-t border-gray-200 pt-2 ml-4">
                              <p className="font-semibold">Utilisateur {reply.commentaire_id}</p>
                              <p>{reply.commentaire_contenu}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
  
                    {/* Champ de réponse aux commentaires */}
                    <div className="mt-4 flex items-center">
                      <button
                        onClick={() => setReplyVisible((prev) => ({
                          ...prev,
                          [comment.commentaire_id]: !prev[comment.commentaire_id]
                        }))}
                        className="text-blue-500 hover:underline"
                      >
                        <FaReply className="mr-1" /> Répondre
                      </button>
                    </div>
  
                    {replyVisible[comment.commentaire_id] && (
                      <div className="mt-4 flex">
                        <input
                          type="text"
                          value={newReply[comment.commentaire_id] || ""}
                          onChange={(e) => setNewReply((prev) => ({
                            ...prev,
                            [comment.commentaire_id]: e.target.value,
                          }))}
                          placeholder="Répondre..."
                          className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                        <button
                          onClick={() => {
                            handleReplyToComment(
                              publication.publication_id,
                              comment.commentaire_id,
                              newReply[comment.commentaire_id] || ""
                            );
                            setNewReply((prev) => ({
                              ...prev,
                              [comment.commentaire_id]: "", // Réinitialise le champ
                            }));
                            setReplyVisible((prev) => ({
                              ...prev,
                              [comment.commentaire_id]: false,
                            }));
                          }}
                          className="ml-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                        >
                          Envoyer
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
  
      </div>
  
      {/* Bouton "Ajouter une publication" toujours en bas */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg flex justify-center">
        <button
          onClick={() => setFormVisible(true)}
          className="bg-green-500 text-white p-2 rounded-lg mb-4 hover:bg-green-600"
        >
          Ajouter une publication
        </button>
      </div>
    </div>
  );
  
  
  
};

export default Discussion;