import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "full";
}

export const RevealRight: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false); // Suivi de l'animation

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [inView, controls]);
  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true); // Empêche la répétition de l'animation
    }
  }, [inView, controls, hasAnimated]);


  return (
    <div ref={ref} style={{ position: "relative", display: "flex", justifyContent: "center" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 90 },
          visible: { opacity: 1, x: 0 },
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
