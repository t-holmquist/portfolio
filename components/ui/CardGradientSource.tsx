import { cn } from "@/utils/cn";

export const CardGradientSource = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  
  return (
    <div className={cn("relative border rounded-3xl group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-20 blur-xl transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#86B2CE,transparent),radial-gradient(circle_farthest-side_at_100%_0,#86B2CE,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#86B2CE,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
