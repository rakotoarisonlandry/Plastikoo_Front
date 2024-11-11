"use client";

import Binding from "@/components/section/binding/Binding";
import AutreProduit from "@/components/section/find/AutreProduit";
import Homepage from "@/components/section/header/Homepage";
import LIkeNumber from "@/components/section/like/LIkeNumber";
import Mission from "@/components/section/mission/Mission";
import Solutions from "@/components/section/Solutions/Solutions";
import Solution from "@/components/section/solution/Solution";
import Task from "@/components/section/task/Task";
import Team from "@/components/section/teams/Team";
import Contact from "./contact/page";
import Partner from "@/components/section/partner/Partner";
import Footer from "@/components/section/footer/Footer";
import Header from "@/components/section/header/Header"; 

export default function Home() {
  return (
    <div className="min-h-screen flex overflow-x-hidden flex-col">
      <Header /> 
      <Homepage />
      <Task />
      <Mission />
      <Binding />
      <Solution />
      <LIkeNumber />
      <AutreProduit />
      <Team />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
