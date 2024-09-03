"use client";

import Binding from "@/components/section/binding/Binding";
import Product from "@/components/section/find/Product";
import Homepage from "@/components/section/header/Homepage";
import LIkeNumber from "@/components/section/like/LIkeNumber";
import Mission from "@/components/section/mission/Mission";
import Solution from "@/components/section/solution/Solution";
import Task from "@/components/section/task/Task";
import Team from "@/components/section/teams/Team";
import Contact from "./contact/page";
import Partner from "@/components/section/partner/Partner";

export default function Home() {
  return (
   
    <div className="min-h-screen flex flex-col">
      <Homepage />
      <Task />
      <Mission />
      <Binding />
      <Solution />
      <LIkeNumber />
      <Product />
      <Team />
      <Partner />
      <Contact />
    </div>
  );
}
