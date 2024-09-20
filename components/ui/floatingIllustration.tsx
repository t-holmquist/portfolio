'use client'

import { floatingItems } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import { useRef } from "react";


const FloatingIllustration = () => {


    const illuRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: illuRef,
        offset: ["start end", "end end"]
    });

    const moveYup = useTransform(scrollYProgress, [0, 0.6, 1], [0, 100, 200])
    const moveYdown = useTransform(scrollYProgress, [0, 0.6, 1], [0, -50, -100 ])


  return (
    <motion.div className="hidden sm:block absolute w-full h-full"
    ref={illuRef}
    >
        {floatingItems.map(({id, imagePath, className}) => (
          <motion.div
          key={id}
          style={{y: id % 2 == 0 ? moveYup : moveYdown}}
          >
            <Image src={imagePath} className={`${className} mt-20`} width={25} height={25} alt="illustration"/>
          </motion.div>
        ))}
    </motion.div>
  )
}

export default FloatingIllustration