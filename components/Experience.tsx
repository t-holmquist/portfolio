'use client'

import { workExperience } from "@/data"
import { Button } from "./ui/ExperienceCards"
import Image from "next/image"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
  

const Experience = () => {


    const parentListVariant = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                duration: 1,
            }
        },
        closed: {
            opacity: 1
        }
    };

    const childItemVariant = {
        open: {
            opacity: 1,
            x: 0,
        },
        closed: {
            opacity: 0,
            x: 20,
        }
    };

    // Hook for checking if element is in view and then trigger animation exactly at that point.
    const ref = useRef(null);
    const isInView = useInView(ref);

  return (
    <div id="experience" className="lg:mt-40">
        <h2 className="heading">
            My
            <span className="text-brandAccent"> qualifications</span>
        </h2>
        <p className="text-white-200 mt-10 max-w-lg font-sourceSans">Here is an overview of my prior experience and my certificates within front-end development.</p>

        <motion.div className="w-full mt-20 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-10"
        ref={ref}
        variants={parentListVariant}
        initial={"closed"}
        animate={isInView && 'open'}
        
        >
            {workExperience.map((card) => (
                <Button
                variants={childItemVariant}
                key={card.id}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800 bg-brandBackgroundBlack">
                    <div className="flex items-center rounded-lg p-3 bg-brandBackgroundGrey border border-slate-700">
                        <p className="text-white-100 font-sourceSans">{card.year}</p>
                    </div>
                    <div className="lg:ms-5">
                        <div className="flex items-center gap-3">
                            <h1 className="text-start text-xl lg:text-2xl font-bold font-oswald">
                                {card.title}
                            </h1>
                            {card.hasCertificate && (
                                <Dialog>
                                    <DialogTrigger className="font-sourceSans px-1 rounded-lg text-brandAccent bg-slate-900 border hover:bg-slate-800 border-slate-700">See certificate</DialogTrigger>
                                    <DialogContent className="bg-brandPrimary">
                                        <DialogHeader>
                                            <DialogTitle>Certificate</DialogTitle>
                                        </DialogHeader>
                                            <Image src={card.certificate} width={550} height={430} alt="certificate" className="rounded-lg"/>
                                    </DialogContent>
                                </Dialog>
                            )}
                        </div>
                        <p className="text-start text-white-100 mt-3 font-semibold font-sourceSans">
                            {card.desc}
                        </p>
                    </div>
                </Button>
            ))}
        </motion.div>
    </div>
  )
}

export default Experience