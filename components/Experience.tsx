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
  

const Experience = () => {

  return (
    <div id="experience" className="lg:mt-40">
        <h2 className="heading">
            My
            <span className="text-brandAccent"> qualifications</span>
        </h2>
        <p className="text-white-200 mt-10 max-w-lg font-sourceSans">Here is an overview of my prior experience and my certificates within front-end development.</p>

        <motion.div className="w-full mt-20 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-10"
        initial={{y: 40, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ delay: 0.2}}
        viewport={{once: true}}
        >
            {workExperience.map((card) => (
                <Button
                key={card.id}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800 bg-slate-950">
                    <div className="flex items-center rounded-lg p-3 bg-slate-800 border border-slate-700">
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