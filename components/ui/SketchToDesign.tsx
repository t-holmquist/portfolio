'use client'

import { cn } from "@/utils/cn";
import { useState } from "react";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { motion } from "framer-motion";

const SketchToDesign = ( { className, sketchLink, designLink, title } : 
    {
        className?: string;
        sketchLink: string;
        designLink: string;
        title: string;
    }
) => {

    const [designVisible, setDesignVisible] = useState<boolean>(false);

    return (
        <div className={cn("space-y-3", className)}>
            <div className="flex gap-2 justify-center">
                <MagicButton
                title="Sketch"
                otherClasses={designVisible ? 'border border-slate-600' : 'bg-brandPrimary'}
                handleClick={() => setDesignVisible(false)}
                />
                <MagicButton
                title="Final"
                otherClasses={designVisible ? 'bg-brandPrimary' : 'border border-slate-600'}
                handleClick={() => setDesignVisible(true)}
                />
            </div>
            <motion.div
            key={designVisible ? 1 : 0}
            initial={{opacity: 0, y: designVisible ? 20 : -20}}
            animate={{opacity: 1, y: 0}}
            
            className="relative"
            >
                <Image 
                src={designVisible ? designLink : sketchLink}
                width={200}
                height={100}
                alt="sketch"
                className="rounded-xl aspect-square"
                />
            </motion.div>
            <div className="flex justify-center">
                <p className="font-sourceSans text-xs text-brandTextWhite">{title}</p>
            </div>
        </div>
    );

}


export default SketchToDesign;