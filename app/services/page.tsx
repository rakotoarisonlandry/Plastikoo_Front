import React from 'react';
import Header from '@/components/section/header/Header';  
import Homepage from '@/components/section/header/Homepage';
import SectionService from '@/components/sectionService/service';  
import Contact from '@/app/contact/page';
import Footer from '@/components/section/footer/Footer';  

type Props = {}

const Page: React.FC<Props> = () => {
  return (
    <div>
      <Header /> 
      <Homepage />
      <SectionService />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default Page;
