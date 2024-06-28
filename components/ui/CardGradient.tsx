"use client";
import React from "react";
import { BackgroundGradient } from "../ui/CardGradientSource";
import Image from "next/image";

export function BackgroundGradientDemo() {

  const handleMouseEnter = () => {
    const leftHand = document.getElementById('left-hand');
    const rightHand = document.getElementById('right-hand');

    leftHand!.classList.add('animate-waving')
    leftHand!.classList.remove('opacity-0')

    rightHand!.classList.add('animate-waving')
    rightHand!.classList.remove('opacity-0')
    
  }

  const handleMouseLeave = () => {
    const leftHand = document.getElementById('left-hand');
    const rightHand = document.getElementById('right-hand');

    leftHand!.classList.remove('animate-waving')
    leftHand!.classList.add('opacity-0')

    rightHand!.classList.remove('animate-waving')
    rightHand!.classList.add('opacity-0')
  }

  return (
    <div className="mt-20 lg:mt-14">
      <BackgroundGradient className="flex flex-col items-center rounded-[22px] max-w-sm md:max-w-lg p-4 sm:p-10 bg-white dark:bg-[#0B1327]">
        <Image className="rounded-3xl" src="/portrait.webp" alt="portrait" width={350} height={350}/>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          About me
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        I specialize in front-end, but work across the stack using the latest technologies like Next.js. I have a great passion for creating seamless user experiences.
        <br></br>
        <br></br>
        As a former founder of a creative agency, I&apos;ve gained valuable business knowledge and learned how to facilitate and work in a creative team.
        <br></br>
        <br></br>
          Combining my design & business knowledge with my technical skills, I can quickly adapt to the needs of a particular job.
        </p>
        <button onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="hidden lg:flex rounded-full pl-4 pr-1 py-1 text-white items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span className="text-xs">Hi I&apos;m</span>
          <span className="bg-[#877EFF] hover:bg-black-100 animate-bounce rounded-full text-[0.6rem] px-4 py-2 text-white">
            Tjalfe
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
