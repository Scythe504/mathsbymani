"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import nameImg from "../../public/image.png"
import { Button } from "./ui/button";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen sm:h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center sm:translate-y-0 sm:overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="-translate-y-20">
        <div className=" z-50 mix-blend-screen -translate-y-32 sm:translate-y-0 flex flex-col items-center justify-center gap-y-4 mt-8">
          <Image src={nameImg} alt="institute logo" />
          <h1 className="text-center mt-2 text-white relative z-20 text-xl mb-4">
            Maths By Mani
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Best Mathematics Institute in Ranchi
          </p>
          <Button variant={"default"} className="bg-white text-black text-md hover:bg-slate-300">
            Get Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
