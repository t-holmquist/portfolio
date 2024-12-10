'use client'

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useState } from 'react';
import MagicButton from "./ui/MagicButton";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { ProjectData } from "@/data";


const ProjectSummary = ({
    className
} :
{
    className?: string;
}
) => {

    const [projectId, setProjectId ] = useState(0);


    return (
        <section className={cn("flex flex-col gap-4 text-brandTextWhite", className)}>
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
            <h1 className="text-5xl font-bold font-oswald">StoryWeaver</h1>
            <Link
            href={ProjectData[projectId].projectLink}
            className="flex gap-1 items-center w-fit border border-brandAccent py-1 px-3 rounded-xl hover:bg-brandPrimary">
                <p className="text-sm font-sourceSans">See live project</p>
                <FaExternalLinkAlt size={10}/>
            </Link>
            {/* Dynamic content section begins below. Map over data to create project summary */}
        </section>
    );

}


export default ProjectSummary;