'use client'

import { cn } from "@/utils/cn";
import { useState } from "react";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { motion } from "motion/react";

const SketchToDesign = ( { className, sketchLink, designLink, title, size } : 
    {
        className?: string;
        sketchLink: string;
        designLink: string;
        title: string;
        size: number;
    }
) => {

    const [designVisible, setDesignVisible] = useState<boolean>(false);

    return (
        <div className={cn("space-y-5", className)}>
            <div className="flex gap-2 justify-center">
                <MagicButton
                title="Before"
                otherClasses={designVisible ? 'border border-slate-600' : 'bg-brandAccent'}
                handleClick={() => setDesignVisible(false)}
                />
                <MagicButton
                title="After"
                otherClasses={designVisible ? 'bg-brandAccent' : 'border border-slate-600'}
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
                src={designLink}
                width={size}
                height={size}
                priority
                alt="illustration"
                className={`${designVisible ? 'block' : 'hidden'} rounded-xl`}
                />
                <Image 
                src={sketchLink}
                width={size}
                height={size}
                priority
                alt="illustration"
                className={`${designVisible ? 'hidden' : 'block'} rounded-xl`}
                />
            </motion.div>
            <div className="flex justify-center">
                <p className="font-sourceSans text-xs text-brandTextWhite">{title}</p>
            </div>
        </div>
    );

}


export default SketchToDesign;