import React from 'react';
import Homepage from '@/components/section/header/Homepage';
import SectionService from '@/components/sectionService/service'; // Import corrigé avec le bon nom de composant
import Contact from '@/app/contact/page'; 

type Props = {}

const Page: React.FC<Props> = () => {
  return (
    <div>
      
      <Homepage />
      <SectionService /> 
      <Contact />
    </div>
  );
}

export default Page;
