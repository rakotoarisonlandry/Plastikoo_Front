"use client";
import React from "react";
import Discussion from "@/components/sectionCommunity/Discussion";
import Accueil from "@/components/sectionCommunity/accueil"; 
import HeaderCommunity from '@/components/sectionCommunity/HeaderCommunity';



const DiscussionPage = () => {
  return (
    <div>
      <HeaderCommunity />
      <Accueil />
      <Discussion />
    </div>
  );
};

export default DiscussionPage;
