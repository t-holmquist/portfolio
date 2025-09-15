'use client'

import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { useState } from 'react';
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import { ProjectData } from "@/data/projectData";
import Image from 'next/image'
import ProjectDeeperDive from "./ProjectDeeperDive";

const ProjectSummary = ({
    className
} :
{
    className?: string;
}
) => {

    const [projectId, setProjectId ] = useState(2);

    // Animation states
    const parentListVariant = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6,
                duration: 0.8,
            }
        },
        hidden: {
            opacity: 0
        }
    };

    const childItemVariant = {
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: 10,
        }
    };


    return (
        // key prop gives React info about which element to render and passes to framer motion to trigger animation when projectId changes
        // TODO: Refactor to instead create individual project summary components
        <>
            <section className={cn("flex flex-col gap-6 text-brandTextWhite", className)} key={projectId}>
                <div className="flex gap-4 flex-wrap">
                    {ProjectData.map(({ id, content }) => (
                        <MagicButton
                        key={id}
                        title={content?.title}
                        handleClick={() => setProjectId(id)}
                        otherClasses={`${projectId == id ? 'bg-brandAccent' : 'border border-brandBorder'}`}
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
                    className="text-5xl font-bold font-oswald">{ProjectData[projectId].content.title}</motion.h1>
                    <div className="flex gap-2">
                        <motion.div
                        initial={{x: -10, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{
                        duration: 1,
                        }}
                        >
                            <Link
                            target="_blank"
                            href={ProjectData[projectId].projectLink}
                            className="flex gap-1 items-center w-fit border border-brandAccent py-1 px-3 rounded-xl hover:bg-brandPrimary">
                                <p className="text-xs font-sourceSans">See Figma prototype</p>
                                <Image src={"/projectIcons/link-solid.svg"} width={15} height={15} alt="figma prototype"/>
                            </Link>
                        </motion.div>
                        {projectId == 1 && (
                        <motion.div
                        initial={{x: -10, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{
                        duration: 1,
                        }}
                        >
                            <div
                            className="flex gap-1 items-center w-fit border border-brandSecondary cursor-default py-1 px-3 rounded-xl">
                                <p className="text-xs font-sourceSans">School project</p>
                            </div>
                        </motion.div>
                        )}
                        {projectId == 2 && (
                        <motion.div
                        initial={{x: -10, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{
                        duration: 1,
                        }}
                        >
                            <Link 
                            href={"https://www.solacph.dk/"}
                            target="_blank"
                            >
                                <div
                                className="flex gap-1 items-center w-fit border border-brandAccent py-1 px-3 rounded-xl hover:bg-brandPrimary">
                                    <p className="text-xs font-sourceSans">See live site</p>
                                    <Image src={"/projectIcons/link-solid.svg"} width={15} height={15} alt="figma prototype"/>
                                </div>
                            </Link>
                        </motion.div>
                        )}
                    </div>
                </div>

                
                {/* Project content */}

            
                <motion.div 
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                duration: 1,
                }}
                className="rounded-xl">
                    {/* Project image */}
                    <Image src={ProjectData[projectId].imageLink} alt={"project"} width={1280} height={720} priority className="rounded-xl w-full" />
                </motion.div>

                <motion.section 
                variants={parentListVariant}
                initial={"hidden"}
                animate={"visible"}
                transition={{
                    duration: 1,
                }}
                className="flex flex-col justify-center w-full custom-blur bg-brandPrimary/50 rounded-xl p-6 md:p-8 gap-6">
                    <motion.div 
                    variants={childItemVariant}
                    className="flex gap-2">
                        <div>
                            <Image src={"/projectIcons/bullseye-solid.svg"} width={20} height={20} alt="purpose" className="min-w-5"/>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-oswald font-bold text-2xl leading-none">Purpose.</h3>
                            <p className="font-sourceSans text-brandTextWhite text-lg">{ProjectData[projectId].content.Purpose}</p>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={childItemVariant}
                    className="flex gap-2">
                        <div>
                            <Image src={"/projectIcons/check-solid.svg"} width={20} height={20} alt="purpose" className="min-w-5"/>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-oswald font-bold text-2xl leading-none">Key Features.</h3>
                            <p className="font-sourceSans text-brandTextWhite text-lg">{ProjectData[projectId].content.keyFeatures}</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={childItemVariant}
                    className="flex gap-2">
                        <div>
                            <Image src={"/projectIcons/book-solid.svg"} width={20} height={20} alt="purpose" className="min-w-5"/>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-oswald font-bold text-2xl leading-none">Challenges and learnings.</h3>
                            <p className="font-sourceSans text-brandTextWhite text-lg max-w-xs md:max-w-none">{ProjectData[projectId].content.learnings}</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    variants={childItemVariant}
                    className="flex gap-2">
                        <div>
                            <Image src={"/projectIcons/stack-overflow.svg"} width={20} height={20} alt="purpose" className="min-w-5"/>
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-oswald font-bold text-2xl leading-none">Technologies used.</h3>
                            <p className="font-sourceSans text-brandTextWhite text-lg">{ProjectData[projectId].content.technologies}</p>
                        </div>
                    </motion.div>
                </motion.section>
            </section>
            {/* A deeper dive section */}
            <ProjectDeeperDive projectId={projectId} className="w-11/12 lg:w-7/12 xl:w-6/12 z-10" />
        </>
    );

}


export default ProjectSummary;