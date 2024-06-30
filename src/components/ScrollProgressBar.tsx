"use client";
import { useScroll, motion } from "framer-motion";
import React from "react";

type Props = {};

const ScrollProgressBar = (props: Props) => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: 0 }}
      className="h-[8px] right-0 bg-primary fixed top-0 left-0  min-w-[100vw] z-50 rounded-sm"
    />
  );
};

export default ScrollProgressBar;
