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
    <div className="mt-20 lg:mt-14">
      <CardGradientSource className="flex flex-col gap-5 items-center rounded-[22px] max-w-sm md:max-w-lg p-4 sm:p-10 bg-white dark:bg-[#0B1327]">
        <Image id="portrait" className="hidden sm:block rounded-3xl" src="/portrait_tjalfe.webp" alt="portrait" width={350} height={350}/>
        <Image id="portrait" className="mt-6 sm:hidden rounded-3xl" src="/portrait_tjalfe.webp" alt="portrait" width={220} height={220}/>
        <p className="text-base sm:text-xl text-black mb-2 dark:text-neutral-200">
          Hi there
        </p>

        <p className="mb-8 sm:mb-0 text-sm text-neutral-600 dark:text-neutral-400">
        I specialize in front-end, but work across the stack using technologies like Express, PostgreSQL or Next.js. I have always had a huge passion for user experience and want to create applications that are truly valuable and functional for the end users.
        <br></br>
        <br></br>
          Combining my design & business knowledge with my technical skills, I have a great understanding of how value is created and how to deliver what, when and where it matters.
        <br></br>
        <br></br>
          I am based in Copenhagen.
        </p>
        <div onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="hidden rounded-md lg:flex pl-4 pr-1 py-1 text-white items-center space-x-1 bg-brandSecondary hover:bg-[#9face8] text-xs font-bold">
          <span className="text-xs">Get a proper greeting</span>
          <Image src="/left_hand.webp" width={50} height={50} alt="hand" className="animate-bounce"/>
        </div>
      </CardGradientSource>
    </div>
  );
}
