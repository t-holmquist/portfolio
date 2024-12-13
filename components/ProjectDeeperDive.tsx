'use client'

import { cn } from "@/utils/cn";
import SketchToDesign from "./ui/SketchToDesign";

const ProjectDeeperDive = ( { className } : 
    {
        className?: string;
    }
) => {

    return (
        <div className={cn("bg-brandBackgroundGrey rounded-xl h-96 flex flex-col items-center justify-center mt-10", className)}>
            <SketchToDesign 
            sketchLink="/sketches/nespressoflow.png"
            designLink="/sketches/nespressoflow_finaldesign.png"
            />
        </div>
    );

}


export default ProjectDeeperDive;