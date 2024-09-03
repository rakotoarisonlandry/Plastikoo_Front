"use client";
import React, { useEffect, useState } from "react";
import HeaderCommunity from "@/components/sectionCommunity/HeaderCommunity"; 
import Accueil from "@/components/sectionCommunity/accueil";
import SectionCommunity from "@/components/sectionCommunity/community";

const PageCommunity: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {

    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      if (authStatus === "true") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);


  if (isAuthenticated === null) {
    return <div>Chargement...</div>;
  }

  if (!isAuthenticated) {
    typeof window !== "undefined" && (window.location.href = "/community/login");
    return <div>Vous n'êtes pas authentifié. Redirection en cours...</div>;
  }

  return (
    <div>
      <Accueil />
      <SectionCommunity />
    </div>
  );
};

export default PageCommunity;
