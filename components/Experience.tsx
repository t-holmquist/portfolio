import { workExperience } from "@/data"
import { Button } from "./ui/MovingBorders"
import Image from "next/image"

const Experience = () => {
  return (
    <div id="experience" className="lg:py-14">
        <h1 className="heading">
            A little about {' '}
            <span className="text-[#877EFF]">me</span>
        </h1>
        <div className="flex justify-center mt-10">
            <p className="text-white-200">
                Some of the stuff that I have been doing
            </p>
        </div>
        <div className="w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map((card) => (
                <Button 
                key={card.id}
                duration={Math.floor(Math.random() * 14000 + 6000)}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800">
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16"/>
                        <div className="lg:ms-5">
                            <h1 className="text-start text-xl md:text-2xl font-bold">
                                {card.title}
                            </h1>
                            <p className="text-start text-white-100 mt-3 font-semibold">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience