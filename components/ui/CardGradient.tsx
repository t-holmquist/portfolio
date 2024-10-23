"use client";
import React from "react";
import { CardGradientSource } from "../ui/CardGradientSource";
import Image from "next/image";

export function CardGradient() {

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
    <div className="mt-20 lg:mt-40">
      <CardGradientSource className="flex flex-col gap-5 items-center rounded-[22px] max-w-sm md:max-w-lg p-4 sm:p-10 bg-white dark:bg-slate-950">
        <Image id="portrait" className="hidden sm:block rounded-3xl" src="/portrait-tjalfe2.webp" alt="portrait" width={350} height={350}/>
        <Image id="portrait" className="mt-6 sm:hidden rounded-3xl" src="/portrait-tjalfe2.webp" alt="portrait" width={220} height={220}/>
        <p className="text-base sm:text-xl text-black mb-2 dark:text-neutral-200">
          About me
        </p>

        <p className="mb-8 sm:mb-0 text-sm text-neutral-600 dark:text-neutral-400">
        I have a huge passion for and a lot of experience working with visual communication. In my prior work, creating commercials through storytelling for multiple companies, I discovered that the most exciting place to be is where the user interacts and feels empowered to take action.
        <br></br>
        <br></br>
        I am also a nerd by heart and have the mindset and structured approach to solve complex problems.
        That is why I naturally gravitated towards front-end development, where I feel that I can make better use of my technical flair while combining it with my design & communication skills.
        </p>
        <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="hidden rounded-md lg:flex pl-4 pr-1 py-1 text-white items-center space-x-1 bg-brandAccent hover:bg-[#c766c4] text-xs font-bold">
          <span className="text-xs">Get a proper greeting</span>
          <Image src="/left_hand.webp" width={50} height={50} alt="hand" className="animate-bounce"/>
        </div>
      </CardGradientSource>
    </div>
  );
}
