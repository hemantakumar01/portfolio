"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { MdClose, MdOutlineSportsSoccer } from "react-icons/md";

type Props = {
  children: React.ReactElement;
};
export const menu = [
  {
    title: "Home",
    icon: <IoHome className="text-primary text-lg" />,
    url: "/",
  },
  {
    title: "About",
    icon: <IoPersonSharp className="text-primary text-lg" />,
    url: "/about",
  },
  {
    title: "Hire",
    icon: <FaPersonBreastfeeding className="text-primary text-lg" />,
    url: "/hire",
  },
  {
    title: "Pricing",
    icon: <GrProjects className="text-primary text-lg" />,
    url: "/pricing",
  },
  {
    title: "Contact",
    icon: <BiSolidContact className="text-primary text-lg" />,
    url: "/contact",
  },
];
const MobileMenu = (props: Props) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>{props.children}</DrawerTrigger>
      <DrawerContent className=" top-0 right-0 left-auto mt-0 w-[250px] rounded-none ">
        <DrawerHeader className="text-xl">Menu</DrawerHeader>
        <DrawerClose className=" absolute  top-2">
          <MdClose className="text-primary  text-2xl rounded" />
        </DrawerClose>
        <div className="grid grid-cols-2 p-2 gap-3">
          {menu.map((item, idx) => (
            <Link
              href={item.url}
              className="border rounded-sm flex items-center text-base justify-center gap-2 p-1"
              key={idx}
            >
              <DrawerClose className="flex items-center justify-center flex-col gap-1 py-2">
                {item.icon} {item.title}
              </DrawerClose>
            </Link>
          ))}
        </div>
        <div className="icons flex items-center gap-3 py-4 px-2 justify-center ">
          <Twitter className="hover:text-primary cursor-pointer" />
          <Instagram className="hover:text-primary cursor-pointer" />
          <Facebook className="hover:text-primary cursor-pointer" />
          <Youtube className="hover:text-primary cursor-pointer" />
          <Linkedin className="hover:text-primary cursor-pointer" />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
