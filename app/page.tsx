"use client";
import Binding from "@/components/binding/Binding";
import Product from "@/components/find/Product";
import Footer from "@/components/footer/Footer";
import Homepage from "@/components/header/Homepage";
import LIkeNumber from "@/components/like/LIkeNumber";
import Mission from "@/components/mission/Mission";
import Solution from "@/components/solution/Solution";
import Task from "@/components/task/Task";
import Team from "@/components/teams/Team";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/utils/Reveal";
import Image from "next/image";

export default function Home() {
  return (
    // <Reveal>
    <div className="min-h-screen flex flex-col">
      {/* <main className="flex-grow"> */}
        <Homepage />
        <Task />
        <Mission />
        <Binding />
        <Solution />
        <LIkeNumber />
        <Product />
        <Team />
      {/* </main> */}
    </div>
    // </Reveal>
  );
}
