"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/utils/cn";

export const ProjectCard = ({
  children,
  title,
  id,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  id: number;
  className?: string;
  containerClassName?: string;
}) => {


  const handleClick = () => {
    window.open(href, '_blank')
  }


  // scrollhooks for creating animations below
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  // getting project div id to decide transform values
  const leftProjectX = useTransform(scrollYProgress, [0, 0.3, 1], [-160, -100, 0])
  const rightProjectX = useTransform(scrollYProgress, [0, 0.3, 1], [160, 100, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1.1, 1])
  const rotate = useTransform(scrollYProgress, [0, 0.6, 1], [0, 5, 0])


  return (
    <motion.div
    ref={ref}
    style={{x: id == 1 ? leftProjectX : rightProjectX, scale: scale, rotate: rotate }}
      className={cn(
        "relative group/card z-50 h-full cursor-pointer",
        containerClassName
      )}
      onClick={handleClick}
      
    >
        <div
          className="p-4 bg-brandPrimary flex justify-start items-start rounded-2xl border border-white/[0.1] sm:group-hover/card:border-white/[0.5] transition duration-300 overflow-hidden"
        >
          <div className={cn(" relative z-50", className)}>{children}</div>
        </div>
        
    </motion.div>
  );
};