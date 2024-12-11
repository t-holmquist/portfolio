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
    <div
      className={cn(
        "flex max-w-fit sticky mt-8 top-2 mx-auto border rounded-xl z-[5000] items-center justify-center border-brandBorder bg-brandBackgroundBlack",
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
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="text-brandTextWhite font-bold font-oswald hover:text-brandSecondary">{navItem.name}</span>
        </Link>
        ))}
      </div>
    </div>
  );
};
