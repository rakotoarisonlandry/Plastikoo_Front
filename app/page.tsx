"use client";

import Homepage from "@/components/section/header/Homepage";
import Mission from "@/components/section/mission/Mission";
import Task from "@/components/section/task/Task";

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
      <Contact />
      {/* </main> */}
    </div>
    // </Reveal>
  );
}
