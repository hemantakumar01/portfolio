import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="mx-auto max-w-[1200px] space-y-4">
      <div className="work-cards  dark:bg-[#242524] border rounded-lg   ">
        <div className="space-y-2 rounded-lg flex flex-col md:flex-row items-center">
          <Image
            src={"/frame-karlo.png"}
            alt=""
            width={300}
            height={200}
            className="rounded-t-xl md:rounded-t-none object-contain w-full h-full flex-1"
          />
          <div className="p-4 space-y-4 flex-1">
            <div>
              <h3 className="text-lg md:text-2xl">
                #01 <span className="dark:text-white">Frame Karlo</span>
              </h3>
              <hr className="border-gray-400 mt-1" />
            </div>
            <p className="font-normal">
              Frame karlo is a photo framing site, where a user can uplode their
              photo ,and browse various type of frame and buy them .Design and
              developed from scratch. Used tech is Nextjs and Shadcn
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
      <div className="work-cards flex dark:bg-[#242524] border rounded-lg ">
        <div className="space-y-2 rounded-lg flex flex-col  items-center md:flex-row-reverse">
          <Image
            src={"/sses.png"}
            alt=""
            width={300}
            height={200}
            className="rounded-t-xl md:rounded-t-none object-contain w-full h-full flex-1"
          />
          <div className="p-4 space-y-4 flex-1">
            <div>
              <h3 className="text-lg md:text-2xl">
                #02 <span className="dark:text-white">SSES</span>
              </h3>
              <hr className="border-gray-400 mt-1" />
            </div>
            <p className="font-normal">
              RSV is a smart contract (ERC20) powered reservation system. I am
              incharge of backend using NET.Core 2.1.
            </p>
            <div className=" text-left">
              <Link href={"https://sses-backend.onrender.com/"} target="_blank">
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
      <div className="work-cards flex dark:bg-[#242524] border rounded-lg ">
        <div className="space-y-2 rounded-lg flex-col md:flex-row flex items-center">
          <Image
            src={"/only-men.png"}
            alt=""
            width={300}
            height={200}
            className="rounded-t-xl md:rounded-t-none object-contain w-full h-full flex-1"
          />
          <div className="p-4 space-y-4 flex-1">
            <div>
              <h3 className="text-lg md:text-2xl">
                #03 <span className="dark:text-white">Only Men</span>
              </h3>
              <hr className="border-gray-400 mt-1" />
            </div>
            <p className="font-normal">
              Only-men is an e-commerce site for men&apos;s wear, built from
              scratch with Next.js, Tailwind, NextAuth for authentication,
              Razorpay for payments, and Shadcn for UI. It includes a dashboard
              featuring charts using Recharts.
            </p>

            <div className=" text-left">
              <Link href={"https://only-men-kappa.vercel.app/"} target="_blank">
                <Button variant={"default"} className=" items-center ">
                  Viwe Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="work-cards flex dark:bg-[#242524] border   rounded-lg ">
        <div className="space-y-2 rounded-lg flex  flex-col items-center md:flex-row-reverse">
          <Image
            src={"/mard.png"}
            alt=""
            width={300}
            height={200}
            className="rounded-t-xl md:rounded-t-none object-cover w-full h-full xl:w-[380px] xl:h-[240px] flex-1"
          />
          <div className="p-4 space-y-4 flex-1">
            <div>
              <h3 className="text-lg md:text-2xl">
                #03 <span className="dark:text-white">Mard</span>
              </h3>
              <hr className="border-gray-400 mt-1" />
            </div>
            <p className="font-normal">
              Mard is also a ecommece site developed with React or frontend ,
              Express in backend for Api and MUI for UI and react Redux for
              state managment
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
    </div>
  );
};

export default Page;
