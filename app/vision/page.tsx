import React from 'react';
import Header from '@/components/section/header/Header';  
import Homepage from '@/components/section/header/Homepage';
import SectionHistoire from '@/components/sectionVision/SectionHistoire';
import SectionMission from '@/components/sectionVision/Sensibilisation';
import SectionRecolte from '@/components/sectionVision/SectionRecolte';
import SectionVision from '@/components/sectionVision/SectionVision'; 
import SectionTransformation from '@/components/sectionVision/SectionTransformation';
import Contact from '@/app/contact/page';
import Footer from '@/components/section/footer/Footer';  
import Sensibilisation from '@/components/sectionVision/Sensibilisation';


type Props = {}

const Vision: React.FC<Props> = () => {
  return (
    <div>
      <Header />  
      <Homepage />
      <SectionHistoire />
      <Sensibilisation />
      <SectionRecolte />
      <SectionVision />
      <SectionTransformation />
      <Contact />
      <Footer />
   
    </div>
  );
};

export default Vision;
