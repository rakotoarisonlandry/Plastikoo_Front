import React from 'react';
import Homepage from '@/components/section/header/Homepage';
import SectionProduit from '@/components/sectionProduit/SectionProduits';


import Contact from '@/app/contact/page'; 

type Props = {}

const Produit: React.FC<Props> = () => {
  return (
    <div>
      <Homepage />
      <SectionProduit />
      <Contact />
    </div>
  );
}

export default Produit;
