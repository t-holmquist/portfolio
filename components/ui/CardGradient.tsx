"use client";
import React from "react";
import { BackgroundGradient } from "../ui/CardGradientSource";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient animate={true} className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-[#0B1327]">
        <img className="rounded-3xl" src="./hero_portrait.webp" alt="portrait" />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Hi im Tjalfe
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        I'm a software engineer with a knack for untangling coding knots and transforming them into user-friendly solutions. 
        My ability to connect with people and foster a positive work environment makes me a team player who's always up for a challenge.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Say hello </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            Here
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
