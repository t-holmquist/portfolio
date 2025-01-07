'use client'

import { cn } from "@/utils/cn";
import { FlipWords } from "./FlipWords";
import { pinkFloatingItems, funFacts } from "@/data";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
      
    >
      {children}
    </div>
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
    <div
      className={cn(
        `row-span-1  ${id === 2 ? "bg-brandBackgroundBlack" : "bg-brandBackgroundBlack"} relative overflow-hidden rounded-3xl group/bento transition duration-200 justify-between flex flex-col space-y-4 border border-white/0.1`,
        className
      )}
    >

      <div className='flex justify-center'>
        <div className="absolute">
          {img && (
            <>
              <Image 
              src={img}
              alt={img}
              width={1080}
              height={1080}
              className={cn(imgClassName, 'object-cover hidden sm:block')}
              />
              <Image 
              src={img}
              alt={img}
              width={250}
              height={250}
              className={cn(imgClassName, 'object-cover sm:hidden')}
              />
            </>
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
        titleClassName, 'relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>
        <div className="font-extralight font-sourceSans text-white-100 text-lg z-10">
          {description}
        </div>
        <div className={`font-bold text-lg font-oswald lg:text-3xl max-w-96 z-10`}>
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
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-2 lg:-right-2 lg:bottom-0">
          <div className="flex flex-col gap-3 lg:gap-8">
            {['React.js', 'Figma', 'TypeScript'].map((item) => (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-80 lg:opacity-100 rounded-xl text-center bg-brandBackgroundGrey">
                {item}
              </span>
            ))}
            
          </div>
          <div className="flex flex-col gap-3 lg:gap-8">
          <span className="py-4 px-3 rounded-lg text-center"/>
            {['Next.js', 'Tailwind'].map((item) => (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-80 lg:opacity-100 rounded-xl text-center bg-brandSecondary">
                {item}
              </span>
            ))}
            
          </div>
        </div>
      )}
    </div>
    </div>
  );
};
