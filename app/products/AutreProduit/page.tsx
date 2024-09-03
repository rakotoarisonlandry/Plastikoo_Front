import React from 'react';
import Homepage from '@/components/section/header/Homepage';
import AutreProduit from '@/components/sectionAutreProduit/AutreProduit';
import Contact from '@/app/contact/page';

const AutreProduitPage: React.FC = () => {
  return (
    <div>
      <Homepage />

      <AutreProduit />

      <Contact />
    </div>
  );
}

export default AutreProduitPage;
