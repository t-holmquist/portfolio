'use client'


import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FlipWords } from "./FlipWords";
import { funFacts } from "@/data";
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

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('tjalfeholmquist@gmail.com');

    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4 border border-white/0.1",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className='flex justify-end'>
        <div className="w-full h-full absolute">
          {img && (
            <Image 
            src={img}
            alt={img}
            width={1000}
            height={1000}
            className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <Image
            src={spareImg}
            alt={spareImg}
            className={'object-cover, object-center w-full h-full'}
            fill
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
          </BackgroundGradientAnimation>
        )}
      </div>

      <div className={cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-10`}>
          {title}
          {/* Ekstra large title for id 1 */}
          {id === 1 && (
            <p className="lg:text-9xl text-6xl text-[#8aa0ff]">I&apos;m a Full-Stack developer</p>
          )}
          {/* Flipping words component */}
          {id === 2 && (
            <div>
              <FlipWords words={funFacts} duration={1500}/>
            </div>
          )}
        </div>
      

      {id === 3 && (
        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
          <div className="flex flex-col gap-3 lg:gap-8">
            {['React.js', 'Next.js', 'TypeScript'].map((item) => (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
          </div>
          <div className="flex flex-col gap-3 lg:gap-8">
          <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
            {['Convex', 'Tailwind CSS'].map((item) => (
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
            ))}
            
          </div>
        </div>
      )}


      {id === 6 && (
        <div className="mt-5 relative">
          <div className={`absolute -bottom-5 right-0`}>
            <Lottie options={{
              loop: copied,
              autoplay: copied,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              }
            }} />
          </div>

          <MagicButton 
          title={copied ? 'Email copied' : 'Copy my email'}
          icon={<IoCopyOutline/>}
          position="left"
          otherClasses="`bg-[#161a31]`"
          handleClick={handleCopy}
          />
        </div>
      )}
    </div>
    </div>
  );
};
