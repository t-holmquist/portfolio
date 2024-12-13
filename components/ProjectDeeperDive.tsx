import { cn } from "@/utils/cn";

const ProjectDeeperDive = ( { className, children } : 
    {
        className?: string;
        children: React.ReactNode;
    }
) => {

    return (
        <div className={cn("bg-brandBackgroundGrey rounded-xl h-96 flex flex-col items-center justify-center mt-10", className)}>
            {children}
        </div>
    );

}


export default ProjectDeeperDive;