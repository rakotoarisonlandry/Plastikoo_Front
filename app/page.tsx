"use client";
import Binding from "@/components/section/binding/Binding";
import Product from "@/components/section/find/Product";
import Footer from "@/components/section/footer/Footer";
import Homepage from "@/components/section/header/Homepage";
import LIkeNumber from "@/components/section/like/LIkeNumber";
import Mission from "@/components/section/mission/Mission";
import Solution from "@/components/section/solution/Solution";
import Task from "@/components/section/task/Task";
import Team from "@/components/section/teams/Team";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/utils/Reveal";
import Image from "next/image";

export default function Home() {
  return (
    // <Reveal>
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Homepage />
        <Task />
        <Mission />
        <Binding />
        <Solution />
        <LIkeNumber />
        <Product />
        <Team />
      </main>
    </div>
    // </Reveal>
  );
}
