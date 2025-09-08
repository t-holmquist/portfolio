'use client'

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {

  const currentPath = usePathname();

  return (
    <div
      className={cn(
        "flex max-w-fit sticky mt-8 top-2 mx-auto border rounded-xl z-[5000] items-center justify-center border-slate-500 custom-blur bg-gradient-to-r from-brandSecondary/20 to-brandSecondary/20",
        className
      )}
    >
      <Link 
      href={"/"}
      className="flex items-center justify-center border-r border-brandBorder px-4 py-3 rounded-l-xl">
        <p className="font-oswald font-light text-xl text-brandTextWhite hover:text-brandSecondary ">Tjalfe</p>
      </Link>
      <div className="flex items-center justify-center px-4 gap-4">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
          >
            <span className={`font-bold font-oswald hover:text-brandSecondary ${navItem.link == currentPath ? "text-brandSecondary" : "text-brandTextWhite"}`}>{navItem.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
