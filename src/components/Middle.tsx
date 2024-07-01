"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { FaHandSparkles } from "react-icons/fa6";
import { ImNewTab } from "react-icons/im";
import {
  SiDocker,
  SiGraphql,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import AnimateLayout from "./AnimateLayout";

type Props = {};
const size = 25;
const Middle = (props: Props) => {
  return (
    <div className="middle px-2 ">
      <div className="md:px-10 md:py-20 space-y-5 md:space-y-8 font-bold text-sm md:text-base ">
        <AnimateLayout>
          <h1 className="text-4xl dark:text-white font-[700]">What i do.</h1>
        </AnimateLayout>
        <AnimateLayout>
          <p>
            I&apos;ve been coding professionally for 3 years now and currently
            working as a Software Engineer that focuses on architecture,{" "}
            <strong className="text-[#E25170]">APIs, nitty-gritty</strong>{" "}
            business logics and even front end integration stuff now, how time
            flies!
          </p>
        </AnimateLayout>
        <AnimateLayout>
          <p className="">
            Here are few technologies that are cup of my
            <strong className="text-[#E25170] line-through">tea</strong> coffee
          </p>
        </AnimateLayout>
        <AnimateLayout>
          <div className="grid grid-cols-2 gap-x-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-primary">.Net</span>
                <span className="dark:text-white font-normal text-sm md:text-base">
                  C# - .NET.Core
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SiJavascript size={size} className="text-primary" />
                <span className="dark:text-white font-normal text-sm md:text-base text-nowrap text-ellipsis overflow-hidden">
                  Javascript (ES6+)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SiTypescript size={size} className="text-primary  " />
                <span className="dark:text-white font-normal text-sm md:text-base">
                  Typescript
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SiNodedotjs size={size} className="text-primary  " />
                <span className="dark:text-white font-normal text-sm md:text-base">
                  Nodejs
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <SiGraphql size={size} className="text-primary  " />

                <span className="dark:text-white font-normal text-sm md:text-base">
                  Graphql
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SiReact size={size} className="text-primary  " />
                <span className="dark:text-white font-normal text-sm md:text-base">
                  React
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SiNextdotjs size={size} className="text-primary  " />
                <span className="dark:text-white font-normal text-sm md:text-base">
                  NextJS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SiDocker size={size} className="text-primary  " />
                <span className="dark:text-white font-normal text-sm md:text-base">
                  Docker
                </span>
              </div>
            </div>
          </div>
        </AnimateLayout>
        <AnimateLayout>
          <div className="flex text-[#E25170] cursor-pointer items-center gap-2">
            See my full arsenal <ImNewTab />
          </div>
        </AnimateLayout>
        <div className="tabs mt-2 space-y-4">
          <AnimateLayout>
            <h1 className="dark:text-white text-2xl font-bold">
              Places i’ve worked.
            </h1>
          </AnimateLayout>
          <AnimateLayout>
            <p>
              Since 2021, had a privilege to work with several companies that
              enables me to hone my skills and talents. These companies will
              always have a special place in my heart. Currently I am working as
              Freelancer
            </p>
          </AnimateLayout>
          <Tabs defaultValue="upwork" className="w-full">
            <AnimateLayout>
              <TabsList className="w-full h-full">
                <TabsTrigger value="upwork" className="w-full">
                  <div className="flex items-center justify-center flex-col px-2 py-3">
                    <Image
                      src="/icons/upwork.png"
                      alt="upworks"
                      width={80}
                      height={30}
                    />
                  </div>
                </TabsTrigger>
                <TabsTrigger value="fiverr" className="w-full">
                  {" "}
                  <div className="flex items-center justify-center flex-col px-2 py-3">
                    <Image
                      src="/icons/fiverr.png"
                      alt="fiverr"
                      width={80}
                      height={30}
                      className="h-10"
                    />
                  </div>
                </TabsTrigger>
              </TabsList>
            </AnimateLayout>
            <AnimateLayout>
              <TabsContent value="upwork" className="">
                <div className="">
                  <h3 className="dark:text-white text-xl font-bold mb-3">
                    My Upwork Journey
                  </h3>
                  <p>
                    My journey on Upwork has been a transformative experience in
                    web development. Specializing in the{" "}
                    <span className="text-primary">
                      MERN stack, Next.js, shadcnUI, MUI, and Framer Motion,
                    </span>
                  </p>
                  <p>
                    I&apos;ve successfully delivered a range of projects, from
                    dynamic web applications to sophisticated user interfaces.
                    <span className="text-primary">
                      Each project honed my technical skills and creative
                      problem-solving, rewarding.
                    </span>
                  </p>
                  <p>
                    while interactions with diverse clients enhanced my
                    adaptability and communication.{" "}
                    <span className="text-primary">
                      This continuous learning and growth have made my Upwork
                      experience truly
                    </span>
                  </p>
                </div>
              </TabsContent>
            </AnimateLayout>
            <AnimateLayout>
              <TabsContent value="fiverr">
                <h3 className="dark:text-white mb-2 text-xl font-bold">
                  My Experiences on Fiverr
                </h3>

                <p>
                  Working on Fiverr has enriched my skills and expertise in web
                  development, particularly in the{" "}
                  <span className="text-primary">
                    MERN stack, Next.js, shadcnUI, MUI, and Framer Motion
                  </span>
                  . I&apos;ve completed diverse projects,
                </p>
                <p>
                  ranging from simple websites to complex applications. Each
                  project challenged me to refine my coding techniques,
                  implement advanced UI designs, and enhance user experiences.
                </p>
                <p>
                  Collaborating with clients worldwide also improved my
                  communication and problem-
                  <span className="text-primary">
                    solving abilities, making each project a valuable learning
                    opportunity.
                  </span>
                </p>
              </TabsContent>
            </AnimateLayout>
          </Tabs>
        </div>

        <AnimateLayout>
          <div className="my-works space-y-2 font-normal">
            <h1 className="text-3xl dark:text-white font-bold">
              Some of my works.
            </h1>
            <p>
              Check out some of the works I made at freelancing, company
              projects and even case studies.
            </p>
          </div>
        </AnimateLayout>
        <AnimateLayout>
          <div className="work-cards dark:bg-[#242524] border rounded-lg ">
            <div className="space-y-2 rounded-lg md:flex items-center">
              <Image
                src={"/frame-karlo.png"}
                alt=""
                width={300}
                height={200}
                className="rounded-t-xl md:rounded-t-none object-contain w-full h-full"
              />
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-lg md:text-2xl">
                    #01 <span className="dark:text-white">Frame Karlo</span>
                  </h3>
                  <hr className="border-gray-400 mt-1" />
                </div>
                <p className="font-normal">
                  Frame karlo is a photo framing site, where a user can uplode
                  their photo ,and browse various type of frame and buy them
                  .Design and developed from scratch. Used tech is Nextjs and
                  Shadcn
                </p>
                <div className=" text-left">
                  <Link
                    href={"https://photo-frame-one.vercel.app/"}
                    target="_blank"
                  >
                    <Button
                      variant={"default"}
                      className="border-gray-400 items-center "
                    >
                      Viwe Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimateLayout>
        <AnimateLayout>
          <div className="work-cards dark:bg-[#242524] border rounded-lg ">
            <div className="space-y-2 rounded-lg md:flex items-center md:flex-row-reverse">
              <Image
                src={"/sses.png"}
                alt=""
                width={300}
                height={200}
                className="rounded-t-xl md:rounded-t-none object-contain w-full h-full"
              />
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-lg md:text-2xl">
                    #02 <span className="dark:text-white">SSES</span>
                  </h3>
                  <hr className="border-gray-400 mt-1" />
                </div>
                <p className="font-normal">
                  RSV is a smart contract (ERC20) powered reservation system. I
                  am incharge of backend using NET.Core 2.1.
                </p>
                <div className=" text-left">
                  <Link
                    href={"https://sses-backend.onrender.com/"}
                    target="_blank"
                  >
                    <Button
                      variant={"default"}
                      className="border-gray-400 items-center "
                    >
                      Viwe Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimateLayout>
        <AnimateLayout>
          <div className="work-cards dark:bg-[#242524] border rounded-lg ">
            <div className="space-y-2 rounded-lg md:flex items-center">
              <Image
                src={"/only-men.png"}
                alt=""
                width={300}
                height={200}
                className="rounded-t-xl md:rounded-t-none object-contain w-full h-full"
              />
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-lg md:text-2xl">
                    #03 <span className="dark:text-white">Only Men</span>
                  </h3>
                  <hr className="border-gray-400 mt-1" />
                </div>
                <p className="font-normal">
                  Only-men is an e-commerce site for men&apos;s wear, built from
                  scratch with Next.js, Tailwind, NextAuth for authentication,
                  Razorpay for payments, and Shadcn for UI. It includes a
                  dashboard featuring charts using Recharts.
                </p>

                <div className=" text-left">
                  <Link
                    href={"https://only-men-kappa.vercel.app/"}
                    target="_blank"
                  >
                    <Button variant={"default"} className=" items-center ">
                      Viwe Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimateLayout>
        <AnimateLayout>
          <div className="work-cards dark:bg-[#242524] border   rounded-lg ">
            <div className="space-y-2 rounded-lg md:flex items-center">
              <Image
                src={"/mard.png"}
                alt=""
                width={300}
                height={200}
                className="rounded-t-xl md:rounded-t-none object-cover w-full h-full xl:w-[380px] xl:h-[240px]"
              />
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-lg md:text-2xl">
                    #03 <span className="dark:text-white">Mard</span>
                  </h3>
                  <hr className="border-gray-400 mt-1" />
                </div>
                <p className="font-normal">
                  Mard is also a ecommece site developed with React or frontend
                  , Express in backend for Api and MUI for UI and react Redux
                  for state managment
                </p>
                <div className=" text-left">
                  <Link
                    href={"https://mard-ecommerce.onrender.com/"}
                    target="_blank"
                  >
                    <Button
                      variant={"default"}
                      className="border-gray-400 items-center "
                    >
                      Viwe Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimateLayout>
        <AnimateLayout>
          <div className="say-hii space-y-3">
            <h2 className="text-4xl dark:text-white flex items-center gap-3">
              Say hi! <FaHandSparkles className="text-primary" />
            </h2>
            <p className="font-normal">
              Though, I am fairly introverted myself. I do reply to messages as
              long as my human interaction battery lasts. Coding, work, movies
              or even weeb stuff, anything is cool. So feel free to message me
              on any of my social media or shoot me an{" "}
              <span className="text-primary">email</span>.
            </p>
          </div>
        </AnimateLayout>
      </div>
    </div>
  );
};

export default Middle;
