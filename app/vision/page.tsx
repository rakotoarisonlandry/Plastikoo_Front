import React from 'react';
import Header from '@/components/section/header/Header';  
import Homepage from '@/components/section/header/Homepage';
import SectionHistoire from '@/components/sectionVision/SectionHistoire';
import SectionMission from '@/components/sectionVision/SectionMission';
import SectionRecolte from '@/components/sectionVision/SectionRecolte';
import SectionVision from '@/components/sectionVision/SectionVision'; 
import SectionTransformation from '@/components/sectionVision/SectionTransformation';
import SectionSensibilisation from '@/components/sectionVision/SectionSensibilisation';
import Contact from '@/app/contact/page';
import Footer from '@/components/section/footer/Footer';  


type Props = {}

const Vision: React.FC<Props> = () => {
  return (
    <div>
      <Header />  
      <Homepage />
      <SectionHistoire />
      <SectionMission />
      <SectionRecolte />
      <SectionVision />
      <SectionTransformation />
      <SectionSensibilisation />
      <Contact />
      <Footer />

    </div>
  );
};

export default Vision;
