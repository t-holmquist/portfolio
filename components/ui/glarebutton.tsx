'use client'

import { motion } from "motion/react"

const GlareButton = (
    {
        title,
        titleClassname
    } : 
    {
        title: string,
        titleClassname?: string,

    } 
) => {
  return (
    <button className="relative overflow-hidden border bg-slate-900 z-10 cursor-default border-brandBorder py-2 px-6 rounded-full">
        <motion.div 
        initial={{
          x: '-140%'
        }}
        animate={{
          x: '240%'
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          
        }}
        className="absolute top-0 left-0 w-[50%] h-full bg-brandAccent opacity-30 blur-xl"/>
        <p className={`${titleClassname}`}>{title}</p>
      </button>
  )
}

export default GlareButton