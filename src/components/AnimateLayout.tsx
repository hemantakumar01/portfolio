"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useAnimationControls,
  useInView,
} from "framer-motion";
type Props = {
  children: JSX.Element;
};

const AnimateLayout = (props: Props) => {
  const ref = useRef(null);
  const isView = useInView(ref);
  const aniControle = useAnimation();
  useEffect(() => {
    if (isView) {
      aniControle.start("visible");
    }
  }, [isView]);
  return (
    <div style={{ position: "relative", overflow: "hidden" }} ref={ref}>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        animate={aniControle}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default AnimateLayout;
