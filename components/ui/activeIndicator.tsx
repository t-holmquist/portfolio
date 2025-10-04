'use client'

import { motion } from 'motion/react'
import React from 'react'

const ActiveIndicator = () => {
  return (
    <motion.div className="relative w-3 h-3 bg-green-400 rounded-full">
        {/* this wrapper div centers the motion divs to avoid origin transform when applying animation -> shifting the circles position */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 2,
                delay: 0.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
            }}
            className="w-7 h-7 bg-gray-100 border border-brandBorder rounded-full opacity-10"
            />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
            }}
            className="w-5 h-5 bg-gray-200 rounded-full opacity-20"
            />
        </div>
</motion.div>
  )
}

export default ActiveIndicator