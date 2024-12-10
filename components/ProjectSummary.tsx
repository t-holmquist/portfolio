'use client'

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useState } from 'react';
import MagicButton from "./ui/MagicButton";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { ProjectData } from "@/data";
import Image from 'next/image'


const ProjectSummary = ({
    className
} :
{
    className?: string;
}
) => {

    const [projectId, setProjectId ] = useState(0);

    // Animation states
    const parentListVariant = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 1,
            }
        },
        closed: {
            opacity: 0
        }
    };

    const childItemVariant = {
        open: {
            opacity: 1,
            x: 0,
        },
        closed: {
            opacity: 0,
            x: 10,
        }
    };


    return (
        // key prop gives React info about which element to render and passes to framer motion to trigger animation when projectId changes
        <section className={cn("flex flex-col gap-6 text-brandTextWhite", className)} key={projectId}>
            <div className="flex gap-4">
                {ProjectData.map(({ id, content }) => (
                    <MagicButton
                    key={id}
                    title={content?.title}
                    handleClick={() => setProjectId(id)}
                    otherClasses={`${projectId == id ? 'bg-brandPrimary' : 'border border-brandBorder'}`}
                    />
                ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:items-end">
                <motion.h1
                initial={{x: -10, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                duration: 1,
                }}
                className="text-5xl font-bold font-oswald">StoryWeaver</motion.h1>
                <motion.div
                initial={{x: -10, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                duration: 1,
                }}
                >
                    <Link
                    href={ProjectData[projectId].projectLink}
                    className="flex gap-1 items-center w-fit border border-brandAccent py-1 px-3 rounded-xl hover:bg-brandPrimary">
                        <p className="text-xs font-sourceSans">See live project</p>
                        <Image src={"/projectIcons/link-solid.svg"} width={20} height={20} alt="key features"/>
                    </Link>
                </motion.div>
            </div>

            
            {/* Project content */}

        
            <motion.div 
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
            duration: 1,
            }}
            className="aspect-video w-fit rounded-xl overflow-hidden">
                <Image src={ProjectData[projectId].imageLink} alt={"project"} width={600} height={300} className="rounded-xl" />
            </motion.div>
            <motion.section 
            variants={parentListVariant}
            initial={"closed"}
            animate={"open"}
            transition={{
                duration: 1,
            }}
            className="flex flex-col justify-center w-full bg-brandPrimary rounded-xl p-6 gap-6">
                <motion.div 
                variants={childItemVariant}
                className="flex gap-2">
                    <Image src={"/projectIcons/bullseye-solid.svg"} width={20} height={20} alt="key features"/>
                    <p className="font-sourceSans text-brandTextWhite text-sm"><span className="font-oswald text-lg font-bold">Purpose. </span>{ProjectData[projectId].content.Purpose}</p>
                </motion.div>
                <motion.div 
                variants={childItemVariant}
                className="flex gap-2 border">
                    <Image src={"/projectIcons/check-solid.svg"} width={20} height={20} alt="key features"/>
                    <p className="font-sourceSans text-brandTextWhite text-sm"><span className="font-oswald text-lg font-bold">Key features. </span>{ProjectData[projectId].content.keyFeatures}</p>
                </motion.div>
                <motion.div 
                variants={childItemVariant}
                className="flex gap-2">
                    <Image src={"/projectIcons/book-solid.svg"} width={20} height={20} alt="key features"/>
                    <p className="font-sourceSans text-brandTextWhite text-sm"><span className="font-oswald text-lg font-bold">Challenges and learnings </span>{ProjectData[projectId].content.learnings}</p>
                </motion.div>
                <motion.div 
                variants={childItemVariant}
                className="flex gap-2">
                    <Image src={"/projectIcons/stack-overflow.svg"} width={20} height={20} alt="key features"/>
                    <p className="font-sourceSans text-brandTextWhite text-sm"><span className="font-oswald text-lg font-bold">Technologies used. </span>{ProjectData[projectId].content.technologies}</p>
                </motion.div>
            </motion.section>
        </section>
    );

}


export default ProjectSummary;