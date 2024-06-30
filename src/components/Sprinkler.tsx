"use client";
import React, { ReactElement, ReactNode } from "react";
import { SparklesCore } from "./ui/sparkles";
type Props = {};
export function SparklesPreview(props: Props) {
  return (
    <div className="fixed top-0 right-0 left-0 w-full h-full -z-50 bg-white dark:bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#b43030"
        />
      </div>
    </div>
  );
}
