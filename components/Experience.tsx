'use client'

import { workExperience } from "@/data"
import { ExperienceCard } from "./ui/ExperienceCards"
import Image from "next/image"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
  

const Experience = () => {


    const parentListVariant = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            }
        },
        closed: {
            opacity: 1
        }
    };

    const childItemVariant = {
        open: {
            opacity: 1,
            scale: 1,
            x: 0,
        },
        closed: {
            opacity: 0,
            x: 20,
        }
    };

    // Hook for checking if element is in view and then trigger animation exactly at that point.
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3, });

  return (
    <div id="experience" className="mt-20 lg:mt-28">
        <h2 className="heading">
            My
            <span className="text-brandAccent"> qualifications</span>
        </h2>
        <p className="text-white-200 mt-6 max-w-lg font-sourceSans text-lg">Here is an overview of my prior experience and my certificates within front-end development.</p>

        <motion.div className="w-full mt-20 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-10"
        ref={ref}
        variants={parentListVariant}
        initial={"closed"}
        animate={isInView && 'open'}
        
        >
            {workExperience.map((card) => (
                <ExperienceCard
                variants={childItemVariant}
                key={card.id}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800 bg-brandBackgroundBlack">
                    <div className="flex items-center rounded-lg p-3 bg-brandBackgroundGrey border border-slate-700">
                        <p className="text-brandTextWhite font-sourceSans text-xs">{card.year}</p>
                    </div>
                    <div className="lg:ms-5">
                        <div className="flex items-center gap-3">
                            <h2 className="text-start text-xl lg:text-2xl font-bold font-oswald">
                                {card.title}
                            </h2>
                            {card.hasCertificate && (
                                <Dialog>
                                    <DialogTrigger className="font-sourceSans px-2 rounded-xl text-brandAccent bg-brandBackgroundBlack border hover:bg-slate-800 border-slate-700 text-xs">See certificate</DialogTrigger>
                                    <DialogContent className="bg-brandPrimary">
                                        <DialogHeader>
                                            <DialogTitle>Certificate</DialogTitle>
                                        </DialogHeader>
                                            <Image src={card.certificate} width={550} height={430} alt="certificate" className="rounded-xl"/>
                                    </DialogContent>
                                </Dialog>
                            )}
                        </div>
                        <p className="text-start text-brandTextWhite mt-3 font-sourceSans text-lg">
                            {card.desc}
                        </p>
                    </div>
                </ExperienceCard>
            ))}
        </motion.div>
    </div>
  )
}

export default Experience