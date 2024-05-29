"use client";
import React from "react";
import { BackgroundGradient } from "../ui/CardGradientSource";

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
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-[#0B1327]">
        <img className="rounded-3xl" src="./portrait.webp" alt="portrait" />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          My whole lifestory
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        I'm a software engineer with a knack for untangling coding knots and transforming them into user-friendly solutions. 
        <br />Got an ability to connect with people and foster a positive work environment.
        </p>
        <button onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="hidden lg:flex rounded-full pl-4 pr-1 py-1 text-white items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span className="text-xs">Hi I'm</span>
          <span className="bg-[#877EFF] hover:bg-black-100 animate-bounce rounded-full text-[0.6rem] px-4 py-2 text-white">
            Tjalfe
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
