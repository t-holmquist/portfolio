'use client'

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useState } from 'react';
import MagicButton from "./ui/MagicButton";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";
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


    return (
        // key prop gives React info about which element to render and passes to framer motion to trigger animation when projectId changes
        <section className={cn("flex flex-col gap-6 text-brandTextWhite", className)} key={projectId}>
            <div className="flex gap-4">
                {ProjectData.map(({ id, content }) => (
                    <MagicButton
                    key={id}
                    title={content?.title}
                    handleClick={() => setProjectId(id)}
                    otherClasses={`${projectId == id ? 'bg-brandPrimary' : 'bg-brandBackgroundBlack border border-brandBorder'}`}
                    />
                ))}
            </div>
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
                    <p className="text-sm font-sourceSans">See live project</p>
                    <FaExternalLinkAlt size={10}/>
                </Link>
            </motion.div>
            {/* Project content */}
            <motion.div 
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
            duration: 1,
            }}
            className="aspect-video w-fit rounded-xl">
                <Image src={ProjectData[projectId].imageLink} alt={"project"} width={600} height={300} className="rounded-xl" />
            </motion.div>
            <section className="flex flex-col justify-center w-full bg-brandPrimary rounded-xl p-6 gap-6">
                <div className="flex gap-2">
                    <LuTarget size={25} className="text-brandAccent"/>
                    <p className="font-sourceSans text-brandTextWhite text-sm"><span className="font-oswald text-lg font-bold">Purpose. </span>{ProjectData[projectId].content.Purpose}</p>
                </div>
                <div className="flex gap-2">
                    <LuTarget size={25} className="text-brandAccent"/>
                    <p className="font-sourceSans text-brandTextWhite text-sm"><span className="font-oswald text-lg font-bold">Key features. </span>{ProjectData[projectId].content.keyFeatures}</p>
                </div>
                <div className="flex gap-2">
                    <LuTarget size={25} className="text-brandAccent"/>
                    <p className="font-sourceSans text-brandTextWhite text-sm"><span className="font-oswald text-lg font-bold">Challenges and learnings </span>{ProjectData[projectId].content.learnings}</p>
                </div>
                <div className="flex gap-2">
                    <LuTarget size={25} className="text-brandAccent"/>
                    <p className="font-sourceSans text-brandTextWhite text-sm"><span className="font-oswald text-lg font-bold">Technologies used. </span>{ProjectData[projectId].content.technologies}</p>
                </div>
            </section>
        </section>
    );

}


export default ProjectSummary;