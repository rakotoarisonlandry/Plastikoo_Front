import React from 'react';
import Homepage from '@/components/section/header/Homepage';
import SectionHistoire from '@/components/sectionVision/SectionHistoire';
import SectionMission from '@/components/sectionVision/SectionMission';
import SectionRecolte from '@/components/sectionVision/SectionRecolte';
import SectionVision from '@/components/sectionVision/SectionVision'; 
import SectionTransformation from '@/components/sectionVision/SectionTransformation';
import SectionSensibilisation from '@/components/sectionVision/SectionSensibilisation';
import Contact from '@/app/contact/page'; 

type Props = {}

const Vision: React.FC<Props> = () => {
  return (
    <div>
      <Homepage />  
      <SectionHistoire /> 
      <SectionMission />  
      <SectionRecolte />  
      <SectionVision /> 
      <SectionTransformation />  
      <SectionSensibilisation />
      <Contact />    
    </div>
  );
};

export default Vision;
