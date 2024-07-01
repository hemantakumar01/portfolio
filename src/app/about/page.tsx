import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="">
      <div className="flex flex-col-reverse md:flex-row md:p-10 gap-3 pb-10 md:pb-0">
        <div className=" flex-1 flex items-start justify-center flex-col space-y-3">
          {" "}
          <h1 className=" text-2xl md:text-5xl font-bold  dark:text-white">
            Passionate Freelancer Crafting Modern Web Solutions with
            Cutting-Edge Technologies
          </h1>
          <p className="text-base">
            With expertise in MERN stack, Next.js, shadcnUI, MUI and Wordpress,
            I deliver sleek, efficient, and user-friendly web applications
            tailored to your unique needs.
          </p>
          <Button className="" size={"lg"}>
            Hire me
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            height={400}
            width={300}
            src="/profile-2.jpg"
            alt="profile"
            className="md:rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
