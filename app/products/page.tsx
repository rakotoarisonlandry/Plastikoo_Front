import React from 'react';
import Homepage from '@/components/section/header/Homepage';
import SectionProduit from '@/components/sectionProduit/SectionProduits';
import Contact from '@/app/contact/page';
import Header from '@/components/section/header/Header';  
import Footer from '@/components/section/footer/Footer';  

type Props = {}

const Produit: React.FC<Props> = () => {
  return (
    <div>
      
      <Header />

      <Homepage />
      <SectionProduit />
      <Contact />

    
      <Footer />
    </div>
  );
}

export default Produit;
