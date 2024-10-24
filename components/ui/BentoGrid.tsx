'use client'

import { cn } from "@/utils/cn";
import { FlipWords } from "./FlipWords";
import { pinkFloatingItems, funFacts } from "@/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  // scrollhooks for creating animations below
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const transformY = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 50])
  const rotate = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1])

  return (
    <motion.div
    ref={ref}
    style={{y: transformY, rotate: rotate }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
      
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  return (
    <motion.div
      layout
      className={cn(
        `row-span-1  ${id === 2 ? "bg-brandSecondary" : "bg-slate-900"} relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4 border border-white/0.1`,
        className
      )}
    >

      <div className='flex justify-end'>
        <div className="w-full h-full absolute">
          {img && (
            <Image 
            src={img}
            alt={img}
            width={500}
            height={500}
            className={cn(imgClassName, 'object-cover')}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5`}>
          {spareImg && (
            <Image
            src={spareImg}
            alt={spareImg}
            width={200}
            height={200}
            className={'object-cover, object-center w-full h-full'}
            />
          )}
        </div>
      </div>

      <div className={cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>
        <div className="font-extralight text-[#e6e6ec] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className={`font-bold text-lg lg:text-3xl max-w-96 z-10`}>
          {title}
          {id === 1 && (
            pinkFloatingItems.map(({id, imagePath, className}) => (
              <div
              key={id}
              >
                <Image src={imagePath} className={`opacity-70 ${className} ${id % 2 == 0 ? "animate-illustrationUP" : "animate-illustrationDOWN"}`} width={25} height={25} alt="illustration"/>
              </div>
            ))
          )}
          {/* Flipping words component */}
          {id === 2 && (
            <div>
              <FlipWords words={funFacts} duration={3000}/>
            </div>
          )}
        </div>
      

      {id === 3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 lg:bottom-0">
          <div className="flex flex-col gap-3 lg:gap-8">
            {['React.js', 'Next.js', 'TypeScript'].map((item) => (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-80 lg:opacity-100 rounded-xl text-center bg-[#10132E]">
                {item}
              </span>
            ))}
            
          </div>
          <div className="flex flex-col gap-3 lg:gap-8">
          <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
            {['Framer', 'Tailwind CSS'].map((item) => (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-80 lg:opacity-100 rounded-xl text-center bg-brandSecondary">
                {item}
              </span>
            ))}
            
          </div>
        </div>
      )}
    </div>
    </motion.div>
  );
};
