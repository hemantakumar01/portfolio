"use client";
import React from "react";
import AnimateLayout from "./AnimateLayout";
import { GrGithub } from "react-icons/gr";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";

type Props = {};

const Footer = (props: Props) => {
  return (
    <AnimateLayout>
      <div className="footer flex py-4 md:py-0 items-center justify-center flex-col font-normal">
        <GrGithub size={25} className="text-primary" />
        <p className="flex items-center gap-1 text-sm">
          Designed and Made with <IoMdHeart />
        </p>
        <p className="flex items-center gap-1 text-sm">
          Hemanta paswan <AiFillCopyrightCircle /> 2024
        </p>
      </div>
    </AnimateLayout>
  );
};

export default Footer;
