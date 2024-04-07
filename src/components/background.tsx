"use client";
import React from "react";
import Image from "next/image";
import nameImg from "../../public/logo.png"
import { Button } from "./ui/button";
import { RxArrowBottomRight } from "react-icons/rx";
import { SlBadge } from "react-icons/sl";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600","700","800","900"]
})

export function HeroSection() {
  return (
    <div className="h-screen sm:h-full relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center sm:translate-y-0 sm:overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-20 bg-transparent [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="-translate-y-20">
        <div className="sm:translate-y-0 flex flex-col items-center justify-center gap-y-4 mt-16 opacity-75">
          <Image src={nameImg} alt="institute logo" height="350" width="350"/>
          <div className="-mt-10">
            <Button className="rounded-3xl bg-white text-black mx-3 hover:bg-white p-2 px-4 font-sans font-semibold" size={"lg"}>
              {<div className="flex items-center justify-center gap-1 text-blue-600">
                <SlBadge size="25"/>
                <div>
                  PERSONALISED TUITIONS
                </div>
              </div>}
              </Button>
          </div>
          <h1 className={cn
            (`text-3xl md:text-6xl font-extrabold text-center mt-2 bg-clip-text text-transparent
            bg-gradient-to-r from-slate-600  via-white to-slate-600  mb-3 md:mb-4`,font.className)}>
            MATHS BY MANI
          </h1>
          <h2 className={cn(`text-center mt-2 text-neutral-200 relative text-xl opacity-80 bg-clip-text text-transparent
            bg-gradient-to-r from-slate-500  via-white to-slate-500 font-semibold`)}>
            Class 11 | 12 Boards | IIT-JEE
          </h2>
          <p className={cn(`text-center mt-2 text-neutral-200 relative text-lg opacity-80 bg-clip-text text-transparent
            bg-gradient-to-r from-slate-500  via-white to-slate-500`)}>
            A Beginner Friendly Offline Mathematics Institute For Class 11, Class 12, JEE Mains and JEE Advance. 
          </p>
          <Button variant={"default"} className={cn(`opacity-75 bg-white text-black text-md hover:bg-slate-300`)}>
            <a href="#CourseId">
              <div className="flex items-center">
              Get Courses
              <div>
                <RxArrowBottomRight/>
              </div>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
