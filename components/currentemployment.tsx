'use client'

import { skillsData } from "@/data"
import GlareButton from "./ui/glarebutton"
import ActiveIndicator from "./ui/activeIndicator"
import Image from "next/image"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

const CurrentEmployment = () => {


    const parentVariant = {
        visible: {
            transition: {
                staggerChildren: 0.3,
            }
        },
        hidden: {}
    };

    const childVariant = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: 20}
    }

    // Hook for checking if element is in view and then trigger animation exactly at that point.
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5, });



    return (
        <section className="relative mt-8 md:mt-14 bg-gradient-to-r from-brandSecondary/10 to-brandAccent/10 border border-brandBorder rounded-2xl">
            {/* Dots bg */}
            <div className="absolute bottom-0 bg-dot-white/[0.2] w-[60%] h-80 z-10" />
            <div className="lg:flex-row flex flex-col p-5 sm:p-8 gap-10 lg:gap-0">
                {/* Text and skills */}
                <div className="order-last lg:order-first flex flex-col gap-8">
                    <div className="flex gap-2 items-center bg-[#30412d] w-fit p-2 rounded-sm">
                        <ActiveIndicator />
                        <p className="font-sourceSans text-[#9bec6c] text-sm">Current employment</p>
                    </div>
                    <motion.div
                    ref={ref} 
                    variants={parentVariant}
                    initial="hidden"
                    animate={isInView && 'visible'}
                    className="space-y-3">
                        <motion.h3
                        variants={childVariant} 
                        className="font-oswald text-2xl font-bold">Center for IT og Medicoteknologi</motion.h3>
                        <motion.p 
                        variants={childVariant} 
                        className="font-sourceSans text-sm text-brandSecondary">Region Hovedstaden</motion.p>
                        <motion.p 
                        variants={childVariant} 
                        className="font-sourceSans sm:text-lg max-w-xl">
                            I currently work as a Student Assistant, where I focus on enhancing the user experience of Min Sundhedsplatform (the patient health platform) and conduct application testing for Sundhedsplatformen for clinicians in Region Hovedstaden.
                            <br/>
                            Recently, I improved the UX of Min Sundhedsplatform by using patient feedback to update the menu navigation, making it easier for patients to find critical medical information.
                            Our team operates within the SAFe agile framework, which has provided me with valuable experience in planning and executing tasks efficiently in a fast-paced environment. I have been entrusted with significant responsibility, allowing me to leverage my technical skills to prototype and improve products used by millions of patients and clinicians.
                        </motion.p>
                    </motion.div>
                    <div>
                        <h4 className="font-oswald text-lg font-bold">Skills that I am building in this job</h4>
                        {/* Skills */}
                        <div className="mt-6 sm:mt-0 space-y-6 sm:space-x-2 space-x-1">
                            {skillsData.map((skill) => (
                                <GlareButton titleClassname="text-sm" key={skill.id} title={skill.title}/>
                            ))}
                        </div>
                    </div>
                </div>
                {/* image */}
                <motion.aside 
                initial={{y: 10}}
                animate={{y: 0}}
                transition={{repeatType: 'reverse', repeat: Infinity, duration: 5, ease: 'easeInOut'}}
                className="relative h-fit w-full min-w-[48%]">
                    <Image className="rounded-2xl border border-brandBorder" width={620} height={600} alt="team day image" src={"/cimt.webp"}/>
                    <div className="absolute font-sourceSans text-xs sm:text-sm -bottom-2 left-6 bg-brandPrimary rounded-full py-1 px-2 border border-white">Team day</div>
                </motion.aside>
            </div>
        </section>
    )
}

export default CurrentEmployment