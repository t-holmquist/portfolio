'use client'
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export function ExperienceCard({
  variants,
  borderRadius = "1.75rem",
  children,
  containerClassName,
  borderClassName,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
  [key: string]: any;
}) {

  return (
    <motion.div
      variants={variants}
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex lg:flex-row flex-col lg:items-center p-3 py-6 lg:p-10 gap-2 w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
