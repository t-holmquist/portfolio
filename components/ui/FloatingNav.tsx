"use client";

import {
  motion,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {

  return (
    <motion.div
      className={cn(
        "flex max-w-fit sticky mt-8 top-2 mx-auto border rounded-xl z-[5000] px-6 py-3 items-center justify-center space-x-4 border-white/[0.2] bg-black-100",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="text-sm">{navItem.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};
