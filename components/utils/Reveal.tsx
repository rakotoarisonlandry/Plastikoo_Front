'use client'; // This line tells Next.js to treat this as a client component
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "full";
}

export const Reveal: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false); // Ajout d'un état pour suivre l'animation


  // useEffect(() => {
  //   if (inView && !hasAnimated) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [inView, controls]);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true); // Empêche de revenir à hidden après avoir scrollé vers le bas
    } 
    
  }, [inView, controls, hasAnimated]);

  return (
    <div ref={ref} style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
