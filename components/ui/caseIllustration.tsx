'use client'

import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image";

const CaseIllustration = () => {


    const { scrollYProgress } = useScroll();

    const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1200, 2000])
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 35])

  return (
    <motion.div className="absolute -left-20 top-4 lg:-left-96 lg:top-72 opacity-10"
    style={{y: y, rotate: rotate}}
    >
        <Image src={"/floatingillustrations/line.svg"} className="hidden sm:block" width={2000} height={2000} alt="illustration"/>
    </motion.div>
  )
}

export default CaseIllustration