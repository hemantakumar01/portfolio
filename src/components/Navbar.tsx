"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { AlignRight, MoonStar, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import MobileMenu, { menu } from "./MobileMenu";
type Props = {};

const Navbar = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev: any = scrollY.getPrevious();

    if (latest > prev && latest > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  const { setTheme } = useTheme();
  return (
    <motion.nav
      variants={{
        hide: {
          y: "-100%",
        },
        show: { y: 0 },
      }}
      animate={show ? "hide" : "show"}
      transition={{ duration: 0.535, ease: "easeInOut" }}
      className="sticky top-0 z-50 flex items-center justify-between px-2 md:px-10 md:py-2 py-3 bg-background"
    >
      <Image
        src={"/logo.png"}
        width={100}
        height={100}
        alt="logo"
        className="w-[50px]"
      />
      <div className="mobile flex items-center gap-3 md:hidden">
        <Button variant="outline" size="icon">
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            onClick={() => setTheme("dark")}
          />
          <MoonStar
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            onClick={() => setTheme("light")}
          />
        </Button>
        <MobileMenu>
          <AlignRight />
        </MobileMenu>
      </div>
      <div className=" items-center gap-5 hidden md:flex ">
        <div className="flex items-center gap-4 text-xl">
          {menu.map((i, idx) => (
            <Link href={i.url} className="hover:text-primary" key={idx}>
              {i.title}
            </Link>
          ))}
        </div>
        <Button variant="outline" size="icon">
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            onClick={() => setTheme("dark")}
          />
          <MoonStar
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            onClick={() => setTheme("light")}
          />
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
