"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
type Props = {};
const item = {
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 100 },
  },
  hidden: { opacity: 0, x: -50 },
};
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const Left = (props: Props) => {
  return (
    <div className="left xl:fixed  flex-1 w-full  max-w-[600px]  xl:bg-primary xl:pr-1 clip-circle">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className=" px-3 bg-transparent xl:bg-background md:px-14 md:py-20 space-y-1 md:space-y-4 xl:border-r  xl:border-primary clip-circle "
      >
        <motion.span
          variants={item}
          className="text-red-400 text-sm md:text-base"
        >
          Ohh you found me?. Howdy! I am
        </motion.span>
        <motion.div variants={item} className="">
          <h1 className="text-2xl md:text-4xl font-[700]">A FULLSTACK </h1>
          <motion.h1 className="text-4xl md:text-7xl font-[700] text-primary">
            DEVELOPER.
          </motion.h1>
          <span className="text-sm md:text-base">
            Or you could call me Hemanta too . . .
          </span>
        </motion.div>
        <motion.div variants={item} className="space-y-6 ">
          <h4 className="text-sm md:text-xl font-semibold text-[#E25170] ">
            Software Engineer
          </h4>
          <p className="text-sm md:text-base">
            Hey! How nice of you to look at my personal site,{" "}
            <strong className="text-primary">Thank you!</strong> <br /> I am
            software engineer that specializes at backend apis,
            <br /> front end integration, recently found myself studying UX too.
          </p>
          <Button
            variant={"outline"}
            className="border-primary hover:scale-110 transition-all duration-100 rounded-none font-thin"
          >
            Get in Touch
          </Button>
        </motion.div>
        <motion.div
          variants={item}
          className="icons flex items-center gap-3 py-4 md:py-1"
        >
          <Twitter className="hover:text-primary cursor-pointer" />
          <Instagram className="hover:text-primary cursor-pointer" />
          <Facebook className="hover:text-primary cursor-pointer" />
          <Youtube className="hover:text-primary cursor-pointer" />
          <Linkedin className="hover:text-primary cursor-pointer" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Left;
