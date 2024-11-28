"use client";
import React from "react";
import Discussion from "@/components/sectionCommunity/Discussion";
import Accueil from "@/components/sectionCommunity/accueil";
import Header from "@/components/section/header/Header";



const DiscussionPage = () => {
  return (
    <div>
      <Header />
      <Accueil />
      <Discussion />
    </div>
  );
};

export default DiscussionPage;
