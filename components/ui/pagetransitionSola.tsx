'use client';

import { useState } from "react";
import MagicButton from "./MagicButton";
import { motion } from "motion/react";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

const PagetransitionSola = () => {

    const [isKaffebar, setIsKaffebar] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex gap-2">
            <MagicButton
            title="Simulate transition"
            handleClick={() => setIsKaffebar(!isKaffebar)}
            otherClasses="border border-brandBorder"
            />
            <Link href="https://www.solacph.dk/">
                <MagicButton
                title="Try it live"
                otherClasses="border border-brandBorder"
                icon={<FaLink/>}
                position="right"
                />
            </Link>
        </div>
        
        <motion.div
        // Motion keyframes added to y-position to avoid component re-render via key prop with react state to improve performance and minimize complexity. I also didn't want the elements to leave the DOM because of layout shift.
        animate={isKaffebar ? {y: [-10, 0], backgroundColor: "#AF3423"} : {y: [-15, 0], backgroundColor: "#39592C"}}
        transition={{duration: 0.8}}
        className="w-10/12 sm:w-8/12 h-64 rounded-2xl font-oswald flex items-center justify-center"
        >
            {isKaffebar ? "Café page" : "Co-working page"}
        </motion.div>
    </div>
  )
}

export default PagetransitionSola;
