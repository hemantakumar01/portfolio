"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

type Props = {};
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
const Page = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row max-w-[1000px] mx-auto py-3 ">
        <div className="md:border flex-1 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 md:shadow-input  space-y-6">
          <h2 className="text-xl font-bold dark:text-white">Get in touch</h2>
          <div className="space-y-1">
            <h2 className="text-base dark:text-white">Visit me</h2>
            <p className="text-sm ">Rangapara No1 Namonigoan</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-base dark:text-white">Chat To me</h2>
            <p className="text-sm ">hemantakumarpaswan@gmail.com</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-base dark:text-white">Call To me</h2>
            <p className="text-sm ">
              Mon-Fri 8am to 6pm <br /> 9395585260
            </p>
          </div>
          <div className="space-y-1">
            <h2 className="text-base dark:text-white">Socials</h2>
            <div className="icons flex items-center gap-3 py-4 md:py-1">
              <Twitter className="hover:text-primary cursor-pointer" />
              <Instagram className="hover:text-primary cursor-pointer" />
              <Facebook className="hover:text-primary cursor-pointer" />
              <Youtube className="hover:text-primary cursor-pointer" />
              <Linkedin className="hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="form flex-1">
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 md:shadow-input ">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Hey! wana contact me
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Please fill the form below
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="number">Number</Label>
                <Input id="number" placeholder="09666-80870" type="number" />
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Your Message</Label>
                <Input
                  id="message"
                  placeholder="Your Message Here"
                  type="text"
                />
              </LabelInputContainer>

              <Button
                className=" relative group/btn  w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Send &rarr;
                <BottomGradient />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
